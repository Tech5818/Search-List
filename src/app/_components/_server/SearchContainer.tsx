import {Flex} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { SearchList } from "../_client/SearchList";

export const SearchContainer = () => {

    return (
        <>
            <Flex
                minW="500px"
                w="40vw"
                minH="85vh"
                background="#fff"
                boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
                flexFlow="column"
                gap="80px"
                alignItems="center"
                p="40px"
            >
                <Logo
                    type="small"
                />
                <SearchList/>
            </Flex>
        </>
    )
}