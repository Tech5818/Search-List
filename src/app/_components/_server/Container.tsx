import {Center} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";

export const Container = () => {
    return (
        <>
            <Center
                minW="500px"
                w="40vw"
                minH="85vh"
                background="#fff"
                boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
                flexFlow="column"
                gap="80px"
            >
                <Logo />
                <SearchBar />
            </Center>
        </>
    )
}