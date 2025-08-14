import React, { FC, ReactNode, createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Definição da interface para o contexto
interface IMembersContextProps {
  moderacao: any[]; // Substitua `any` pela tipagem correta dos dados, se disponível
  recrutadores: any[];
  loadModeracao: () => Promise<void>;
  loadRecrutadores: () => Promise<void>;
}

// Interface do provedor
interface IMembersProvider {
  children: ReactNode;
}

// Criação do contexto
export const MembersContext = createContext<IMembersContextProps>({} as IMembersContextProps);

// Provedor do contexto
const MembersProvider: FC<IMembersProvider> = ({ children }) => {
  const ctx = useProvideMembers();
  return <MembersContext.Provider value={ctx}>{children}</MembersContext.Provider>;
};

// Hook para consumir o contexto
export const useMembers = (): IMembersContextProps => {
  return useContext(MembersContext);
};

// Implementação do provider
export function useProvideMembers(): IMembersContextProps {
  const [moderacao, setModeracao] = useState<any[]>([]); // Inicialize como um array vazio
  const [recrutadores, setRecrutadores] = useState<any[]>([]); // Novo estado para recrutadores

  const loadModeracao = async () => {
    if (moderacao.length > 0) {
      // Não faça a chamada se os dados já estão carregados
      return;
    }

    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + 'guild-members?filter=moderacao');
      if (response.data && response.data.moderacao) {
        setModeracao(response.data.moderacao);
      }
    } catch (error) {
      console.error('Erro ao carregar dados de moderação:', error);
    }
  };

  const loadRecrutadores = async () => {
    if (recrutadores.length > 0) {
      // Não faça a chamada se os dados já estão carregados
      return;
    }

    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + 'guild-members?filter=recrutadores');
      if (response.data && response.data.recrutadores) {
        setRecrutadores(response.data.recrutadores);
      }
    } catch (error) {
      console.error('Erro ao carregar dados de recrutadores:', error);
    }
  };

  // Carregar os dados uma vez ao montar o componente
  useEffect(() => {
    loadModeracao();
    loadRecrutadores();
  }, []);

  return {
    moderacao,
    recrutadores,
    loadModeracao,
    loadRecrutadores,
  };
}

export default MembersProvider;
