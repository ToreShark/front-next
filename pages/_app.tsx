import React from "react";
import "np/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "np/components/layout";
import { ModalProvider } from "np/components/Contexts/ModalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Адвокат Мухтаров Торехан - услуги юридической помощи</title>
        <meta
          name="description"
          content="Опытный адвокат, предоставляющий услуги по гражданскому, уголовному и административному праву. Бесплатные консультации и помощь в вопросах алиментов, мошенничества, взысканий и других юридических проблемах. Предлагаю профессиональные услуги по юридической помощи в сферах гражданского, уголовного и административного права."
        />
        <meta
          name="keywords"
          content="адвокат, юрист, гражданское право, уголовное право, административное право, алименты, бесплатные консультации"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <ModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalProvider>
    </>
  );
}
