import React, { useState, useEffect, use, useRef } from "react";
import styles from "./sendcode.module.css";
// Здесь нужно заменить путь на свой файл со сваггером
import { DefaultService } from "np/generated/services/DefaultService";
import { SignInUserDto } from "np/generated/models/SignInUserDto";
import { useAtom } from "jotai";
import { authAtom } from "np/state/atoms/atom";
import { lastTimeOtpAtom } from "np/state/utils/atomutils";

interface SendCodeProps {
  onLoginSuccess: () => void;
  onClose: () => void;
}

export function SendCode({ onLoginSuccess, onClose }: SendCodeProps) {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState(Array(4).fill(""));
  const [activCode, setActivCode] = useState<number>(0);
  const [attemptCount, setAttemptCount] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [seconds, setSeconds] = useState(() => {
    const storedValue = localStorage.getItem("timer");
    return storedValue ? JSON.parse(storedValue) : 60;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [, setAuth] = useAtom(authAtom);
  const [lastTimeOtp] = useAtom(lastTimeOtpAtom);

  useEffect(() => {
    const storedPhone = localStorage.getItem("phoneLocal");
    if (storedPhone) {
      setPhone(JSON.parse(storedPhone));
    }
  }, []);

  function getDiffTimeLocalStorage() {
    const now = Date.now();
    const diff = now - (lastTimeOtp || 0);
    const diffSeconds = Math.floor(diff / 1000);
    return diffSeconds < 60 ? 60 - diffSeconds : 0;
  }

  useEffect(() => {
    setSeconds(getDiffTimeLocalStorage());
    const interval = setInterval(() => {
      setSeconds((seconds: number) => {
        if (seconds > 0) {
          return seconds - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [lastTimeOtp]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    const signInUser: SignInUserDto = {
      phone,
      code: parseInt(code.join("")),
    };
    DefaultService.authControllerLogin(signInUser)
      .then((response) => {
        console.log("Response:", response);
        console.log("Response data:", response.data);
        const authToken = response.accessToken;
        const refreshToken = response.refreshToken;
        setAuth({ isAuthenticated: true, authToken, refreshToken });
        onLoginSuccess();
        onClose();
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        console.error(error);
        if (error.message.includes("Unauthorized")) {
          setAttemptCount(prevAttemptCount => {
            if (prevAttemptCount >= 2) {
              onClose();
              return prevAttemptCount;
            } else {
              alert("Неправильный пароль, осталось попыток: " + (2 - prevAttemptCount));
              setIsError(false);
              return prevAttemptCount + 1;
            }
          });
        }
      });
  };

  const handleInputChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    if (/^\d*$/.test(target.value)) {
      const { value } = target;
      const newCode: string[] = [...code];
      newCode[index] = value.substring(value.length - 1);
      if (!value) setActivCode(index - 1);
      else setActivCode(index + 1);
      setCode(newCode);
    } else {
      alert("Вводите только цифры");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Backspace" && !code[activCode]) {
      setActivCode(activCode - 1);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activCode]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <div className={styles.container}>
          <form onSubmit={handleSubmit}>
            <h4 className={styles.heading}>Введите полученный код</h4>
            {seconds > 0 ? (
              <p className={styles.timer}>{seconds}</p>
            ) : (
              <button onClick={() => setSeconds(60)}>Повторить</button>
            )}

            <div className={styles.otpInput}>
              {code.map((_, index) => (
                <React.Fragment key={index}>
                  <input
                    ref={index === activCode ? inputRef : null}
                    type="tel"
                    maxLength={1}
                    pattern="\d*"
                    inputMode="numeric"
                    onChange={(e) => handleInputChange(e, index)}
                    value={code[index] || ""}
                    onKeyDown={(e) => handleKeyDown(e)}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                  />
                </React.Fragment>
              ))}
            </div>

            <button
              className={styles.submitButton}
              type="submit"
              disabled={isLoading || isError}
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
