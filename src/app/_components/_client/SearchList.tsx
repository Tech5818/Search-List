"use client";

import { Box } from "@chakra-ui/react";

import { useSearchParams } from "next/navigation";
import { getSearchDatas } from "../../_apis/Naver/getSearchDatas";
import { useEffect, useState } from "react";

export const SearchList = () => {
    const [data, setData] = useState<object[]> ();
    const prams = useSearchParams();

    const query: string | null = prams.get("query");

    const fetchData = async () => {
        try {
            const result = await getSearchDatas(query!);
            // result.items.map((element: any) => {
            //     element.title.replace(/<[^>]*>/g, '');
            //     // element.description.replace(/<b>/g, "")
            //     // element.description.reaplce(/<\/b>/g, "")
            //     console.log(element);
            // })
            setData(result.items);
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        if (data === undefined) fetchData();
        console.log(data);
    },[data])

    return(
        <>
            <Box
                as="ul"

            >
                {
                    data?.map((element, idx) => (
                        <div key={idx}>{element.title}</div>
                    ))
                }
            </Box>
        </>
    )
}