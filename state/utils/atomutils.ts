import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { authAtom } from "../atoms/atom";

export const lastTimeOtpAtom = atomWithStorage<number | undefined>(
  "lastTimeOtp",
  undefined
);
export const phoneLocalAtom = atomWithStorage<string>("phoneLocal", "");

export const useLogout = () => {
  const [auth, setAuth] = useAtom(authAtom);

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      authToken: "",
      refreshToken: "",
    });
    localStorage.removeItem("lastTimeOtp");
    localStorage.removeItem("phoneLocal");
    localStorage.removeItem("redirectPath");
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
  };

  return logout;
};
