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
                    fontSize={80}
                    fontFamily='Dancing Script'
                    cursor="pointer"
                    userSelect="none"
                >
                    Search List
                </Heading>
            ) : (
                <SmallLogo/>
            )}
        </>
    )
}