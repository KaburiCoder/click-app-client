import { createContext, ReactNode, useState } from "react";

export interface VsContextType {
  isPending: boolean;
  setIsPending: (isPending: boolean) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const VsContext = createContext<VsContextType>({
  isPending: false,
  setIsPending: () => {},
  open: false,
  setOpen: () => {},
});

interface VsContextProviderProps {
  children: ReactNode;
}

export const VsContextProvider = ({ children }: VsContextProviderProps) => {
  const [isPending, setIsPending] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <VsContext.Provider value={{ isPending, setIsPending, open, setOpen }}>
      {children}
    </VsContext.Provider>
  );
};
