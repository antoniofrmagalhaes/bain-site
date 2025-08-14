// hooks/use-ranked-api.ts
import { useState, useRef, useCallback, useEffect } from 'react';

import { api } from '@/services/httpClient';

import axios, { CancelTokenSource } from 'axios';

export type TopValues = {
  combat: number;
  offense: number;
  defense: number;
  support: number;
  kills: number;
};

export type Player = {
  id: string;
  playerId: string;
  name: string;
  avatar: string | null;
  matches: number;
  combat: number;
  offense: number;
  defense: number;
  support: number;
  kills: number;
  deaths: number;
  season: string;
  updatedAt: string;
  kd: number;
  ranking: number;
};

const PAGE_SIZE = 10;

export function useRankedApi() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [top, setTop] = useState<TopValues | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [name, setName] = useState('');
  const [orderBy, setOrderBy] = useState<string | undefined>(undefined);
  const [searching, setSearching] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null); // NOVO!
  const cancelSourceRef = useRef<CancelTokenSource | null>(null);

  // fetchPlayers agora recebe orderBy opcional
  const fetchPlayers = useCallback(async (page: number, name: string, append = false, orderBy?: string) => {
    setLoading(true);
    setApiError(null); // limpa erro ao tentar novamente
    if (cancelSourceRef.current) cancelSourceRef.current.cancel();
    const source = axios.CancelToken.source();
    cancelSourceRef.current = source;

    try {
      const params: any = { page, limit: PAGE_SIZE };
      if (name && name.length >= 3) params.name = name;
      if (orderBy) params.orderBy = orderBy;
      const { data } = await api.get('/ranked/players', {
        params,
        cancelToken: source.token,
      });
      setPlayers(prev => (append ? [...prev, ...data.players] : data.players));
      setTotalPages(data.totalPages || 1);
      setTop(data.top);
    } catch (err) {
      if (!axios.isCancel(err)) {
        setPlayers([]);
        setTotalPages(1);
        setTop(null);
        setApiError('Nenhuma temporada em andamento ou estamos fora do ar temporariamente.');
      }
    } finally {
      setLoading(false);
      setSearching(false);
    }
  }, []);

  useEffect(() => {
    fetchPlayers(page, name, page !== 1, orderBy);
    // eslint-disable-next-line
  }, [page, orderBy]);

  useEffect(() => {
    setPage(1);
    setOrderBy(undefined);
    if (!name) {
      fetchPlayers(1, '', false);
      return;
    }
    if (name.length < 3) {
      setPlayers([]);
      setTotalPages(1);
      setLoading(false);
      setSearching(false);
      setTop(null);
      return;
    }
    setSearching(true);
    const handler = setTimeout(() => {
      fetchPlayers(1, name, false);
    }, 500);

    return () => clearTimeout(handler);
    // eslint-disable-next-line
  }, [name]);

  const loadMore = () => {
    if (page < totalPages) setPage(prev => prev + 1);
  };

  const handleOrderBy = (value: string) => {
    setPage(1);
    setOrderBy(current => (current === value ? undefined : value));
  };

  return {
    players,
    top,
    loading,
    searching,
    name,
    setName,
    page,
    totalPages,
    loadMore,
    orderBy,
    setOrderBy: handleOrderBy,
    apiError,
  };
}
