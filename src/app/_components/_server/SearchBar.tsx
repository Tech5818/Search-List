import { Stack, FormControl, Button } from "@chakra-ui/react";
import { SearchInput } from "../_client/SearchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export const SearchBar = () => {
    return(
        <>
            <Stack 
                as="form" 
                spacing={4}
            >
                <FormControl 
                    display="flex" 
                    alignItems="center"
                >
                    <SearchInput />
                    <Button
                        position="absolute"
                        right="1px"
                        height="46px"
                        borderRightRadius={50}
                        userSelect="none"
                        zIndex={1}
                        background="transparent"
                    >
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                        />
                    </Button>
                </FormControl>
            </Stack>
        </>
    )
}