"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { PopoverContent } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export type PlayerCandidate = {
  player_id: string;
  name: string;
  created?: string;
  last_seen?: string;
  vip?: boolean;
  vip_expiration?: string | null;
};

type Props = {
  candidates: PlayerCandidate[];
  anchorWidth: number;
  onSelect: (p: PlayerCandidate) => void;
  emptyText?: string;
};

export default function PlayerCandidatesList({
  candidates,
  anchorWidth,
  onSelect,
  emptyText = "Nenhum jogador encontrado.",
}: Props) {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

  const setItemRef =
    (idx: number) =>
    (el: HTMLDivElement | null): void => {
      itemsRef.current[idx] = el;
    };

  const panelWidth = useMemo(
    () => (anchorWidth ? `${anchorWidth + 2}px` : "calc(100% + 2px)"),
    [anchorWidth]
  );

  useEffect(() => {
    listRef.current?.focus();
  }, []);

  useEffect(() => {
    const el = itemsRef.current[active];
    const list = listRef.current;
    if (el && list) {
      const elTop = el.offsetTop;
      const elBottom = elTop + el.offsetHeight;
      if (elTop < list.scrollTop) list.scrollTop = elTop - 8;
      else if (elBottom > list.scrollTop + list.clientHeight)
        list.scrollTop = elBottom - list.clientHeight + 8;
    }
  }, [active]);

  if (candidates.length === 0) return null;

  return (
    <PopoverContent
      align="start"
      side="bottom"
      sideOffset={8}
      className="p-0 bg-[#1a1a1a] border border-white/20 rounded-md shadow-2xl text-white overflow-hidden"
      style={{ width: panelWidth }}
      onKeyDownCapture={(e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          e.stopPropagation();
          setActive((i) => Math.min(i + 1, candidates.length - 1));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          e.stopPropagation();
          setActive((i) => Math.max(i - 1, 0));
        } else if (e.key === "Enter") {
          e.preventDefault();
          e.stopPropagation();
          onSelect(candidates[active]);
        }
      }}
    >
      <Command className="bg-[#1a1a1a] text-white">
        <CommandList
          ref={listRef as React.RefObject<HTMLDivElement>}
          role="listbox"
          tabIndex={0}
          onWheel={(e) => {
            if (listRef.current) listRef.current.scrollTop += e.deltaY;
          }}
          className="max-h-96 overflow-y-auto bg-[#1a1a1a] text-white"
        >
          <CommandEmpty className="px-4 py-6 text-center text-sm text-white/90">
            {emptyText}
          </CommandEmpty>

          <CommandGroup className="p-3 bg-[#1a1a1a] text-white">
            <div className="space-y-4">
              {candidates.map((it, idx) => (
                <CommandItem
                  key={`${it.player_id}-${
                    it.last_seen ?? it.created ?? it.name
                  }`}
                  ref={setItemRef(idx)}
                  role="option"
                  aria-selected={active === idx}
                  onSelect={() => onSelect(it)}
                  onMouseEnter={() => setActive(idx)}
                  className={[
                    "cursor-pointer rounded-md px-3 py-3",
                    "text-white/95",
                    "bg-[#1a1a1a]",
                    "border",
                    active === idx
                      ? "border-[#FFB430]"
                      : "border-white/15 hover:border-[#FFB430]",
                    "transition-colors",
                    "hover:bg-transparent focus:bg-transparent",
                    "data-[selected]:!bg-transparent aria-selected:!bg-transparent",
                    "data-[selected]:text-white",
                  ].join(" ")}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[13px] font-semibold text-white">
                      {it.name}
                    </span>
                    <span className="text-xs text-white/85">
                      Steam/GamePass ID: {it.player_id}
                    </span>
                    <span className="text-xs text-white/85">
                      VIP:{" "}
                      <span
                        className={it.vip ? "text-[#FFB430]" : "text-white/65"}
                      >
                        {it.vip ? "Ativo" : "Inativo"}
                      </span>
                    </span>
                    <span className="text-xs text-white/85">
                      Expiração:{" "}
                      {it.vip && it.vip_expiration
                        ? new Date(it.vip_expiration).toLocaleString()
                        : "--"}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </div>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  );
}
