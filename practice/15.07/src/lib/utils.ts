import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from "../components/ui/use-toast";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function formatJWTTokenToUser(token) {
  const decodedJwt = _parseJwt(token);
  if (!decodedJwt) return null;

  const {
    payload: { userId },
  } = decodedJwt;

  return { userId };
}

function _parseJwt(token) {
  // split the token into header, payload, and signature
  const [header, payload, signature] = token.split(".");

  // replace URL-safe characters with standard base64 characters
  const fixedHeader = header.replace(/-/g, "+").replace(/_/g, "/");
  const fixedPayload = payload.replace(/-/g, "+").replace(/_/g, "/");

  // decode the header and payload from base64
  const decodedHeader = atob(fixedHeader);
  const decodedPayload = atob(fixedPayload);

  // parse the JSON objects from the decoded header and payload
  const headerObj = JSON.parse(decodedHeader);
  const payloadObj = JSON.parse(decodedPayload);

  // return an object with the decoded header, payload, and signature
  return {
    header: headerObj,
    payload: payloadObj,
    signature,
};
}


export const toastUtils = {
  success: (message) => {
    toast({
      title: message,
      status: "success",
      style: {
        backgroundColor: "lightgreen",
        color: "black",
      },
    });
  },
  error: (message) => {
    toast({
      title: message,
      status: "error",
      style: {
        backgroundColor: "lightcoral",
        color: "black",
      },
    });
  },
};

