"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Search, Check, Loader2 } from "lucide-react";
import { api } from "@/services/httpClient";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import PlayerCandidatesList, {
  PlayerCandidate,
} from "./buy-vip-players-candidates-list";
import BuyVipHelpDialog from "./buy-vip-help-dialog";

type PlayerData = {
  player_id: string;
  name: string;
  created?: string;
  last_seen?: string;
  avatar_url?: string;
  vip?: boolean;
  vip_expiration?: string | null;
  is_blacklisted?: boolean;
};

type Props = {
  label: string;
  placeholder: string;
  userNotFoundText?: string;
  value?: string;
  onChange: (id: string) => void;
};

export default function BuyVipPlayerIdInput({
  label,
  placeholder,
  userNotFoundText = "ID não encontrado.",
  value = "",
  onChange,
}: Props) {
  const [query, setQuery] = useState(value || "");
  const [loading, setLoading] = useState(false);
  const [player, setPlayer] = useState<PlayerData | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [candidates, setCandidates] = useState<PlayerCandidate[]>([]);
  const [open, setOpen] = useState(false);

  const anchorRef = useRef<HTMLDivElement | null>(null);
  const [anchorWidth, setAnchorWidth] = useState<number>(0);

  useLayoutEffect(() => {
    function measure() {
      if (anchorRef.current) setAnchorWidth(anchorRef.current.offsetWidth);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const isValidId = useMemo(
    () => (id: string) => {
      const v = id.trim();
      return (
        /^\d{17,}$/.test(v) ||
        v.toLowerCase().startsWith("xuid-") ||
        /^[a-fA-F0-9]{32}$/.test(v)
      );
    },
    []
  );

  useEffect(() => {
    if (!query) {
      setPlayer(null);
      setSearchError(null);
      setCandidates([]);
      setOpen(false);
      onChange("");
      return;
    }

    const run = () => {
      setLoading(true);
      setSearchError(null);
      api
        .get(`/check-vip-eligibility`, { params: { input: query } })
        .then((res) => {
          const data = res.data ?? {};
          const mode = data.mode as "id" | "name" | undefined;
          const needs = Boolean(data.needs_selection);
          const list: PlayerData[] = Array.isArray(data.players)
            ? data.players
            : [];

          if (mode === "name" && needs && list.length > 1) {
            setCandidates(
              list.map((p) => ({
                player_id: p.player_id,
                name: p.name,
                created: p.created,
                last_seen: p.last_seen,
                vip: p.vip,
                vip_expiration: p.vip_expiration,
              }))
            );
            setOpen(true);
            setPlayer(null);
            onChange("");
            return;
          }

          if (mode === "name" && list.length === 1 && data.player) {
            const p = data.player as PlayerData;
            setCandidates([]);
            setOpen(false);
            setPlayer({
              player_id: p.player_id,
              name: p.name,
              created: p.created,
              last_seen: p.last_seen,
              avatar_url: p.avatar_url,
              vip: p.vip,
              vip_expiration: p.vip_expiration,
              is_blacklisted: p.is_blacklisted,
            });
            onChange(p.player_id);
            return;
          }

          if (mode === "id" && data.valid && data.player) {
            const p = data.player as PlayerData;
            setCandidates([]);
            setOpen(false);
            setPlayer({
              player_id: p.player_id ?? query,
              name: p.name,
              created: p.created,
              last_seen: p.last_seen,
              avatar_url: p.avatar_url,
              vip: p.vip,
              vip_expiration: p.vip_expiration,
              is_blacklisted: p.is_blacklisted,
            });
            onChange(p.player_id ?? query);
            return;
          }

          setPlayer(null);
          setCandidates([]);
          setOpen(false);
          setSearchError(data.message || userNotFoundText);
          onChange("");
        })
        .catch(() => {
          setPlayer(null);
          setCandidates([]);
          setOpen(false);
          setSearchError("Erro na validação.");
          onChange("");
        })
        .finally(() => setLoading(false));
    };

    if (isValidId(query)) {
      run();
      return;
    }

    if (query.trim().length >= 3) {
      const t = setTimeout(run, 350);
      return () => clearTimeout(t);
    } else {
      setCandidates([]);
      setOpen(false);
    }
  }, [query, isValidId, onChange, userNotFoundText]);

  const selectCandidate = (p: PlayerCandidate) => {
    setQuery(p.player_id);
    setCandidates([]);
    setOpen(false);
    setLoading(true);
    setSearchError(null);
    api
      .get(`/check-vip-eligibility`, { params: { input: p.player_id } })
      .then((res) => {
        const data = res.data;
        if (data?.valid && data.player) {
          const sel = data.player as PlayerData;
          setPlayer({
            player_id: sel.player_id ?? p.player_id,
            name: sel.name,
            created: sel.created,
            last_seen: sel.last_seen,
            avatar_url: sel.avatar_url,
            vip: sel.vip,
            vip_expiration: sel.vip_expiration,
            is_blacklisted: sel.is_blacklisted,
          });
          onChange(sel.player_id ?? p.player_id);
        } else {
          setPlayer(null);
          setSearchError(data?.message || "ID não encontrado.");
          onChange("");
        }
      })
      .catch(() => {
        setPlayer(null);
        setSearchError("Erro na validação.");
        onChange("");
      })
      .finally(() => setLoading(false));
  };

  const borderClass = searchError
    ? "border-[#FFB430]"
    : player
    ? "border-[#FFB430]"
    : "border-white/25 hover:border-white/40 focus:border-white/50";

  const formatExpiration = (vip?: boolean, exp?: string | null) => {
    if (!vip || !exp) return "--";
    const d = new Date(exp);
    if (!Number.isNaN(d.getTime()) && d.getFullYear() >= 2999) {
      const now = new Date();
      const masked = new Date(now);
      masked.setMonth(masked.getMonth() + 3);

      const rand = (max: number) => Math.floor(Math.random() * max);
      masked.setHours(rand(24), rand(60), rand(60), 0);

      const pad = (n: number) => String(n).padStart(2, "0");
      const dd = pad(masked.getDate());
      const mm = pad(masked.getMonth() + 1);
      const yyyy = masked.getFullYear();
      const HH = pad(masked.getHours());
      const MM = pad(masked.getMinutes());
      const SS = pad(masked.getSeconds());

      return `${dd}/${mm}/${yyyy} ${HH}:${MM}:${SS}`;
    }
    return d.toLocaleString();
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-white">{label}</label>

      <Popover
        open={open && candidates.length > 0}
        onOpenChange={(v) => setOpen(v && candidates.length > 0)}
      >
        <PopoverTrigger asChild>
          <div ref={anchorRef} className="relative w-full">
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPlayer(null);
                setSearchError(null);
                onChange("");
              }}
              placeholder={placeholder}
              className={[
                "w-full rounded-md px-3 py-3 pr-12 text-[14px] text-white placeholder:text-white/60 outline-none",
                "bg-[#141416] border border-[#2A2A2A] hover:bg-[#16181B] focus:bg-[#181A1D]",
                "transition-colors focus:ring-2 focus:ring-[#FFB430]/25 focus:border-[#3A3A3A]",
                borderClass,
              ].join(" ")}
            />
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/15 focus:outline-none"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : player ? (
                <Check className="h-5 w-5 text-[#FFB430]" />
              ) : (
                <Search className="h-5 w-5" />
              )}
            </button>
          </div>
        </PopoverTrigger>

        <div className="mt-2 flex w-full items-center justify-end">
          <BuyVipHelpDialog />
        </div>

        <PlayerCandidatesList
          candidates={candidates}
          anchorWidth={anchorWidth}
          onSelect={selectCandidate}
          emptyText="Nenhum jogador encontrado."
        />
      </Popover>

      {player && (
        <div className="mt-4 flex gap-4 rounded-md border border-white/15 bg-white/5 p-3">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">
              {player.name}
            </span>
            <span className="text-xs text-white/85">
              Steam/GamePass ID: {player.player_id}
            </span>
            <span className="text-xs text-white/85">
              VIP:{" "}
              <span className={player.vip ? "text-[#FFB430]" : "text-white/65"}>
                {player.vip ? "Ativo" : "Inativo"}
              </span>
            </span>
            <span className="text-xs text-white/85">
              Expiração: {formatExpiration(player.vip, player.vip_expiration)}
            </span>
          </div>
        </div>
      )}

      {(searchError || false) && (
        <p className="mt-2 text-sm text-[#FFB430]">{searchError}</p>
      )}

      <input
        type="hidden"
        value={player ? player.player_id : ""}
        readOnly
        name="id"
        data-testid="player-id-hidden"
      />
    </div>
  );
}
