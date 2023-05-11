import React from "react";
import styles from "../Sendphone/sendphone.module.css";
import { useAtom } from "jotai";
import { lastTimeOtpAtom, phoneLocalAtom } from "np/state/utils/atomutils";
import { useRouter } from "next/router";
import { sendVerificationCode } from "np/state/utils/authutils";

interface SendphoneProps {
  onCodeSend: () => void;
  onClose: () => void;
}

const Sendphone = ({ onCodeSend, onClose }: SendphoneProps) => {
  const [phoneLocal, setPhoneLocal] = useAtom(phoneLocalAtom);
  const [lastTimeOtp, setLastTimeOtp] = useAtom(lastTimeOtpAtom);
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
//   const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (phoneLocal.trim().length === 0) {
      alert("Номер телефона не должен быть пустым.");
      return;
    }

    if (/[A-Za-zА-Яа-яЁё]/.test(phoneLocal)) {
      alert("Некорректный номер телефона: должны быть только цифры.");
      return;
    }

    if (phoneLocal.length !== 11) {
      alert("Некорректный номер телефона: должно быть 11 цифр.");
      return;
    }

    sendVerificationCode(phoneLocal)
      .then(() => {
        setPhoneLocal(phoneLocal);
        setLastTimeOtp(Date.now());
        onCodeSend();
        onClose(); 

        console.log("phoneLocal", phoneLocal);
        // router.push("/auth/otp");
      })
      .catch((error: any) => {
        console.error("Ошибка при отправке кода верификации:", error);
        // Здесь вы можете обработать ошибку, например, показать сообщение пользователю
      });
    // router.push("/auth/otp");
  };
  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.container}>
        <h4 className={styles.h4}>Введите номер телефона</h4>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputField}>
            <input
              type="tel"
              value={phoneLocal}
              onChange={(e) => setPhoneLocal(e.target.value)}
              placeholder="+7 707 381 60 81"
            />
            <button onClick={onCodeSend}>ОТПРАВИТЬ</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sendphone;
