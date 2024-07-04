import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

type SideDrawerContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const SideDrawerContext = createContext<SideDrawerContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

const useSideDrawerContext = () => {
  const context = useContext(SideDrawerContext);

  if (!context)
    throw Error('useSideDrawerContext must be used within a SideDrawerProvider');

  return context;
};

type SideDrawerProviderProps = {
  children: ReactNode;
};

const SideDrawerProvider = ({ children }: SideDrawerProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), [setIsOpen]);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <SideDrawerContext.Provider
      value={{
        isOpen,
        open,
        close,
      }}
    >
      {children}
    </SideDrawerContext.Provider>
  );
};

export { SideDrawerProvider, useSideDrawerContext };
