import { useAtom } from "jotai";
import { SendCodeDto } from "np/generated/models/SendCodeDto";
import { DefaultService } from "np/generated/services/DefaultService";
import { authAtom } from "../atoms/atom";

export const sendVerificationCode = (phone: string): Promise<boolean> => {
  const requestBody: SendCodeDto = {
    phone,
  };

  return DefaultService.authControllerSendCode(requestBody)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('Ошибка при отправке кода верификации:', error);
      throw error;
    });
};

export async function refreshToken(setAuth: (arg0: (auth: any) => any) => void, refreshToken: any) {
  if (!refreshToken) {
    return;
  }

  try {
    const response = await DefaultService.authControllerRefreshTokens({ refreshToken });
    const newAccessToken = response.data.accessToken;
    localStorage.setItem("authToken", newAccessToken);
    setAuth((auth) => ({ ...auth, authToken: newAccessToken }));
  } catch (error) {
    console.error("Error refreshing token:", error);
  }
}

