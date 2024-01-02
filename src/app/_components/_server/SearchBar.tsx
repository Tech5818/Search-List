import { Stack, FormControl, Button } from "@chakra-ui/react";
import { SearchInput } from "../_client/SearchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { SearchForm } from "../_client/SearchForm";

export const SearchBar = () => {

    return(
        <>
            <SearchForm>
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
            </SearchForm>
        </>
    )
}