import type { ReactNode } from "react";
import type { AsyncStatus } from "@/shared/lib";

export type StatusMessageProps = {
  children: ReactNode;
  className?: string;
  errorTitle?: string;
  status: AsyncStatus;
  successTitle?: string;
};
