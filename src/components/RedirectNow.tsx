"use client";

import { useEffect } from "react";

export function RedirectNow({ url }: { url: string }) {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);
  return null;
}
