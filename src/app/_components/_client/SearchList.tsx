"use client";

import { Box, Button, Flex, Heading, Skeleton, Text } from "@chakra-ui/react";

import { useSearchParams } from "next/navigation";
import { SearchResult, SearchResultItems, getSearchDatas } from "../../_apis/Naver/getSearchDatas";
import { MutableRefObject, RefObject, useEffect, useRef, useState } from "react";
import { SearchListItem } from "../_server/SearchListItem";
import { SearchResultSkeleton } from "../_server/SearchResultSkeleton";
import { getMoreDatas } from "../../_apis/Naver/getMoreDatas";

export const SearchList = () => {
    const [data, setData] = useState<SearchResultItems[]> ([]);
    const [isLoading, setIsLoading] = useState<boolean> (false);
    const prams = useSearchParams();

    const query: string | null = prams.get("query");
    const display: number | null = Number(prams.get("display"));

    const [start, setStart] = useState<number> (display + 1);

    const ListRef = useRef(null);

    const fetchData = async () => {
        try {
            const result: SearchResult  = await getSearchDatas(query!, display!);

            const items: SearchResultItems[] = result.items;
            const newItems: SearchResultItems[] = removeString(items);
            setData(newItems);
        } catch (error) {
            throw error
        }
    }

    const fetchMoreData = async () => {
        try {
            const result: SearchResult = await getMoreDatas(query!, 10, start!);

            const items: SearchResultItems[] = result.items;
            const newItems: SearchResultItems[] = removeString(items);

            setData((prev) => [...prev, ...newItems]);
            setStart(start + 10);
            
        } catch(error) {
            throw error;
        }
    }

    const removeString = (items: SearchResultItems[]) => {
        items.forEach((e) => {
            const title_count: number | undefined = e.title.match(/<b>/g)?.filter(item => item !== "").length;

            for (let i = 0; i < title_count!; i++) {
                e.title = e.title.replace("<b>", "");
                e.title = e.title.replace("</b>", "");
            }
            const description_count: number | undefined = e.description.match(/<b>/g)?.filter(item => item !== "").length;
            
            for (let i = 0; i < description_count!; i ++) {
                e.description = e.description.replace("<b>", "");
                e.description = e.description.replace("</b>", "");
            }
        })
        return items;
    }

    const callback = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
            fetchMoreData();
        }
    };

    const options = {
        threshold: 1.0,
    };

    useEffect(() => {
        if (ListRef.current) {
            const observer = new IntersectionObserver(callback, options);
            observer.observe(ListRef.current);
            return () => {
                observer.disconnect();
            };
        }
    }, [ListRef.current, data]);

    useEffect(() => {
        if (data.length === 0) {
            fetchData();
            setIsLoading(true);
        }
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
                            >
                                {data.length === idx + 1 ? (
                                        <SearchListItem
                                            element={element}
                                            ref={ListRef}
                                        />
                                    ) : (
                                        <SearchListItem
                                            element={element}
                                        />
                                    )
                                }
                            </Box>
                        ))
                    }
                </Flex>
            ) : (
                <SearchResultSkeleton />
            )}
        </>
    )
}