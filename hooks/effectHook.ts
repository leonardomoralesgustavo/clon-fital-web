import { DependencyList, EffectCallback, useEffect, useState } from "react";

export const useNoFirstTimeEffect = (
  callback: EffectCallback,
  deps?: DependencyList
) => {
  const [isfirstTime, setIsFirstTime] = useState<boolean>(true);

  useEffect(() => {
    if (isfirstTime) setIsFirstTime(false);
    if (!isfirstTime) {
      const unsubscribe = callback();
      return unsubscribe;
    }
  }, deps);
};

type MSG = { text: string; type: "error" | "success" | "" };
const msgInitialState: MSG = { text: "", type: "" };
export const useTemporalMsg = (time: number) => {
  const [msg, setMsg] = useState<MSG>(msgInitialState);

  const initMsg = () => setMsg(msgInitialState);

  useEffect(() => {
    const unsubscribe = setTimeout(() => {
      initMsg();
    }, time);
    return () => clearTimeout(unsubscribe);
  }, [msg]);

  return [msg, setMsg, initMsg] as const;
};
