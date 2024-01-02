"use client";

import { useContext } from "react";
import { GlobalContexts } from "../../GlobalContext";
import {Input} from "@chakra-ui/react";

export const SearchInput = () => {
    const {search, setSearch} = useContext(GlobalContexts);

    return(
        <>
            <Input 
                placeholder="검색 내용을 입력해 주세요 "
                autoFocus
                w={400}
                size="lg"
                borderRadius={50}
                paddingRight="64px"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
                boxShadow="2px 2px 4px rgba(0, 0, 0, 0.4)"
            />
        </>
    )
}