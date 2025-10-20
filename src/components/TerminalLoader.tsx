import { useEffect, useState } from "react";

interface TerminalLoaderProps {
  category: string;
  onComplete: () => void;
}

export function TerminalLoader({ category, onComplete }: TerminalLoaderProps) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 300);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="min-h-[300px] flex items-start pt-16">
      <div className="font-mono text-emerald-400">
        <span className="text-emerald-500">&gt;&gt;</span> Filtering results for{" "}
        <span className="uppercase">{category}</span>
        {dots}
      </div>
    </div>
  );
}
