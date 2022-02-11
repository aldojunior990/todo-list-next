import { createContext, ReactNode, useContext, useState } from 'react';

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextData {
  modalIsOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const Context = createContext<ContextData>({} as ContextData);

export function ContextProvider({ children }: ContextProviderProps) {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Context.Provider value={{ modalIsOpen, openModal, closeModal }}>
      {children}
    </Context.Provider>
  );
}

export function useContextProps() {
  const context = useContext(Context);
  return context;
}
