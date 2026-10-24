import { createContext, useContext } from 'react';

export const ModalCtx = createContext(() => {});
export const useModal = () => useContext(ModalCtx);
