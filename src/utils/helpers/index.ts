import { CallBackType } from "@/types";

export const errorResponse = (message?: string, name?: string) => {
  const key = name || "error";
  const errors = { [key]: "Something wrong" };

  if (message) errors[key] = message;

  return { errors };
};

export const customError = ({
  message,
  status,
  name,
}: {
  message: string;
  status?: string;
  name?: string;
}) => {
  const error = new Error(message);
  if (name) error.name = name;
  if (status) error.status = status;

  return error;
};

export const tryCatchWrapper =
  <T, K>(cb: CallBackType<T, K>) =>
  async (data: K) => {
    try {
      return await cb(data);
    } catch (error) {
      if (error instanceof Error)
        return errorResponse(error.message, error.name);
      console.log("🚀 ~ error:", error);
    }
  };

export const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Failed to read the blob as base64."));
      }
    };
    reader.onerror = () => {
      reject(new Error("Error reading the blob."));
    };
    reader.readAsDataURL(blob);
  });
};
