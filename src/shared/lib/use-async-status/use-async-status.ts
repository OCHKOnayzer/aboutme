"use client";

import { useState } from "react";
import type { AsyncStatus, RunAsyncStatusOptions } from "./use-async-status.types";

export function useAsyncStatus() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<AsyncStatus>("idle");

  async function run<TResult>({
    action,
    fallbackErrorMessage,
    getSuccessMessage,
    onSuccess,
  }: RunAsyncStatusOptions<TResult>) {
    setStatus("loading");
    setMessage("");

    try {
      const result = await action();

      setMessage(getSuccessMessage(result));
      setStatus("success");
      onSuccess?.(result);

      return result;
    } catch (error) {
      setMessage(
        error instanceof Error && error.message
          ? error.message
          : fallbackErrorMessage
      );
      setStatus("error");

      return undefined;
    }
  }

  return {
    isLoading: status === "loading",
    message,
    run,
    status,
  };
}
