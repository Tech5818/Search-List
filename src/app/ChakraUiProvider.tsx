"use client";

import React from "react";

import "./font.css"

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export const ChakraUiProvider = ({children} : {children: React.ReactNode}) => {
    return(
        <CacheProvider>
            <ChakraProvider resetCSS>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}