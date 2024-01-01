"use client";

import {Heading} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export const SmallLogo = () => {
    const router = useRouter();

    return (
        <>
            <Heading
                    fontFamily='Dancing Script'
                    onClick={() => {
                        router.push("/");
                        console.log("click");
                        
                    }}
                    cursor="pointer"
                    userSelect="none"
                >
                    Search List
            </Heading>
        </>
    )
}