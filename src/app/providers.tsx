"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ChakraProvider>
  );
}
