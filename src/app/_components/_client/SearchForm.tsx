"use client";

import React, { FormEvent, useContext } from "react";
import { Stack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { GlobalContexts } from "../../GlobalContext";

export const SearchForm = ({ children }: { children: React.ReactNode }) => {
    const {search} = useContext(GlobalContexts);
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
        e.preventDefault();

        router.push(`/search?query=${search}`);
    }
    return(
        <>
            <Stack
                as="form" 
                spacing={4}
                onSubmit={handleSubmit}
            >
                {children}
            </Stack>
        </>
    )
}