import React from "react";
import {Heading} from "@chakra-ui/react";
import { SmallLogo } from "../_client/SmallLogo";

interface LogoType {
    type?: string | null
}

export const Logo: React.FC<LogoType> = ({type = null}) => {
    return (
        <>
            {(type === null && type !== "small") ? (
                <Heading
                    fontSize={100}
                    fontFamily='Dancing Script'
                    cursor="pointer"
                    userSelect="none"
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)"
                >
                    Search List
                </Heading>
            ) : (
                <SmallLogo/>
            )}
        </>
    )
}