import { Button } from "@/components/ui/button";
import React from "react";

import { ThemeToggleButton } from "@/components/theme-toggle-button";
export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <ThemeToggleButton />
    </>
  );
}
