import { createContext, ReactNode, useContext, useState } from 'react';

interface ContextProviderProps {
  children: ReactNode;
}

interface TaskProps {
  id: number;
  title: string;
  createdAt: string;
}

interface ContextData {
  setTasks: (TaskProps) => void;
  tasks: TaskProps[];
}

export const Context = createContext<ContextData>({} as ContextData);

export function ContextProvider({ children }: ContextProviderProps) {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Context.Provider value={{ setTasks, tasks }}>{children}</Context.Provider>
  );
}

export function useContextProps() {
  const context = useContext(Context);
  return context;
}
