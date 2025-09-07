"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

interface Props {
  error?: Error | null;
  reset: () => void;
}
const RootError = ({ error, reset }: Props) => {
  useEffect(() => {
    if (error instanceof Error) {
      console.error(error?.message);
    }
  }, []);
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center bg-slate-950 p-10">
        {error && (
          <>
            <div className="flex flex-col justify-center items-center gap-5">
              <p className="text-2xl text-red-600 p-2">{error?.message}</p>
              <Button type="button" variant={"destructive"} onClick={reset}>
                Try Again
              </Button>
            </div>
          </>
        )}
      </main>
    </React.Fragment>
  );
};

export default RootError;
