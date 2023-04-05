import Head from "next/head";
import { useEffect, useState } from "react";

import Card from "../components/card";

// https://api.adviceslip.com/advice

export default function Main() {
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip);
        setLoading(false);
      });
  }, []);

  async function fetechAdvices() {
    try {
      const Response = await fetch("https://api.adviceslip.com/advice");
      const Data = Response.json();

      return Data;
    } catch (errorReason) {
      return { id: "FAILED", advice: errorReason };
    }
  }

  if (loading) {
    return <Card id="LOADING" advice="LOADING ADVICE" />;
  }

  function onMouseButton1Click() {
    fetechAdvices().then((data) => {
      setAdvice(data.slip);
    });
  }

  return (
    <>
      <Head>
        <title>Advice Generator</title>
      </Head>

      <Card
        id={advice.id}
        advice={advice.advice}
        onClick={onMouseButton1Click}
      />
    </>
  );
}
