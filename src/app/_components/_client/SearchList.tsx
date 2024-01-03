"use client";

import { Box, Flex, Heading, Skeleton, Text } from "@chakra-ui/react";

import { useSearchParams } from "next/navigation";
import { SearchResult, SearchResultItems, getSearchDatas } from "../../_apis/Naver/getSearchDatas";
import { useEffect, useState } from "react";

export const SearchList = () => {
    const [data, setData] = useState<SearchResultItems[]> ();
    const [isLoading, setIsLoading] = useState<boolean> (false);
    const prams = useSearchParams();

    const query: string | null = prams.get("query");
    const display: string | null = prams.get("display");

    const fetchData = async () => {
        try {
            const result: SearchResult  = await getSearchDatas(query!, display!);

            const items: SearchResultItems[] = result.items;
            items.forEach((e) => {
                e.title = e.title.replace("<b>", "");
                e.title = e.title.replace("</b>", "");
                const description_count: number | undefined = e.description.match(/<b>/g)?.filter(item => item !== "").length;
                console.log(description_count);
                
                for (let i = 0; i < description_count!; i ++) {
                    e.description = e.description.replace("<b>", "");
                    e.description = e.description.replace("</b>", "");
                }
            })
            setData(items);
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        if (data === undefined) {
            fetchData();
            setIsLoading(true);
        }
        console.log(data);
    },[data])

    return(
        <>
            {isLoading ? (
                <Flex
                    w="100%"
                    gap="20px"
                    flexFlow="column"
                    overflowY="scroll"
                    css={{
                        "&::-webkit-scrollbar" : {
                            width: "5px"
                        },
                        "&::-webkit-scrollbar-thumb" : {
                            height: "10px",
                            background: "#aaa",
                            borderRadius: "10px"
                        },
                        "&::-webkit-scrollbar-track" : {
                            background: "#efefef"
                        }
                    }}
                    h="calc(85vh - 80px - 20px)"
                    p="5px 10px"
                >
                    {
                        data?.map((element, idx) => (
                            <Box
                                key={idx}
                                background="#fafafa"
                                p="20px"
                                w="100%"
                                boxShadow="0 0 4px rgba(0, 0, 0, 0.4)"
                            >
                                <Heading
                                    as="h5"
                                    size="md"
                                    overflow="hidden"
                                    whiteSpace="nowrap"
                                    textOverflow="ellipsis"
                                >
                                    {element.title}
                                </Heading>
                                <Text>
                                    {element.description}
                                </Text>
                            </Box>
                        ))
                    }
                </Flex>
            ) : (
                <Flex
                    w="100%"
                    gap="20px"
                    flexFlow="column"
                    p="5px 10px"
                    h="calc(85vh - 80px - 20px)"
                >
                    <Skeleton 
                        w="100%"
                        h="136px"
                    />
                    <Skeleton 
                        w="100%"
                        h="136px"
                    />
                    <Skeleton 
                        w="100%"
                        h="136px"
                    />
                    <Skeleton 
                        w="100%"
                        h="136px"
                    />
                    <Skeleton 
                        w="100%"
                        h="136px"
                    />
                    <Skeleton 
                        w="100%"
                        h="136px"
                    />
                    <Skeleton 
                        w="100%"
                        h="136px"
                    />
                </Flex>
            )}
        </>
    )
}