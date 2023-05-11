import Image from 'next/image'
import { Inter } from 'next/font/google';
import Header from 'np/components/Header/headers';
import Footer from 'np/components/Footer/footer';
import Sendphone from 'np/components/Auth/services/Sendphone/Sendphone';
import { useModalContext } from 'np/components/Contexts/ModalContext';
import { useEffect, useState } from 'react';
import { SendCode } from 'np/components/Auth/services/Sendcode/SendCode';
import Carousel from 'np/components/Carousel/Carousel';
import CardCategories from 'np/components/Cards/Card.categories';
import { useRouter} from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { isSendPhoneModalOpen, closeSendPhoneModal } = useModalContext();
  const [isSendCodeModalOpen, setIsSendCodeModalOpen] = useState(false);
    
  const handleCodeSend = () => {
    setIsSendCodeModalOpen(true);
    localStorage.setItem("isSendCodeModalOpen", "true");
  };
  
  const handleCloseSendCodeModal = () => {
    setIsSendCodeModalOpen(false);
    localStorage.setItem("isSendCodeModalOpen", "false");
  };
  useEffect(() => {
    const storedValue = localStorage.getItem("isSendCodeModalOpen");
    if (storedValue === "true") {
      setIsSendCodeModalOpen(true);
    }
  }, []);
  const handleLoginSuccess = () => {
    console.log("login success");
  };

  return (
    <div>
      {/* <h1>MAIN</h1>     */}
      <Carousel />
      <CardCategories />
      {isSendPhoneModalOpen && (
        <Sendphone onCodeSend={handleCodeSend} onClose={closeSendPhoneModal} />
      )}
      {isSendCodeModalOpen && (
        <SendCode onLoginSuccess={handleLoginSuccess} onClose={handleCloseSendCodeModal} />
      )}
    </div>
  )
}
