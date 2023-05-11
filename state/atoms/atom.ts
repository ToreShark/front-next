import { atom } from "jotai";

export const authAtom = atom({
    isAuthenticated: typeof window !== 'undefined' ? localStorage.getItem('authToken') !== null : false,
    authToken: typeof window !== 'undefined' ? localStorage.getItem('authToken') || '' : '',
    refreshToken: typeof window !== 'undefined' ? localStorage.getItem('refreshToken') || '' : '',
  });
  