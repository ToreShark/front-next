import React, { createContext, useContext, useState } from 'react';

interface ModalContextValue {
  isSendPhoneModalOpen: boolean;
  openSendPhoneModal: () => void;
  closeSendPhoneModal: () => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isSendPhoneModalOpen, setIsSendPhoneModalOpen] = useState(false);

  const openSendPhoneModal = () => {
    setIsSendPhoneModalOpen(true);
  };

  const closeSendPhoneModal = () => {
    setIsSendPhoneModalOpen(false);
  };

  const value = {
    isSendPhoneModalOpen,
    openSendPhoneModal,
    closeSendPhoneModal,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};
