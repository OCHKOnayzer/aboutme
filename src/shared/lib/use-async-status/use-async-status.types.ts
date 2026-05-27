export type AsyncStatus = "idle" | "loading" | "success" | "error";

export type RunAsyncStatusOptions<TResult> = {
  action: () => Promise<TResult>;
  fallbackErrorMessage: string;
  getSuccessMessage: (result: TResult) => string;
  onSuccess?: (result: TResult) => void;
};
