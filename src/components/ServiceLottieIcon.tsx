"use client";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const animations = {
  robinet: "https://assets2.lottiefiles.com/packages/lf20_2ks3pjua.json",
  flamme: "https://assets2.lottiefiles.com/packages/lf20_4kx2q32n.json",
  outils: "https://assets2.lottiefiles.com/packages/lf20_2glqweqs.json",
};

export default function ServiceLottieIcon({ type }: { type: keyof typeof animations }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(animations[type])
      .then(res => res.json())
      .then(setData);
  }, [type]);

  if (!data) return <div style={{ height: 80, width: 80 }} />;

  return (
    <Lottie
      animationData={data}
      loop
      autoplay
      style={{ height: 80, width: 80, margin: "0 auto" }}
    />
  );
} 