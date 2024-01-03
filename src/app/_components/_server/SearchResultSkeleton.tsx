import { Flex, Skeleton } from "@chakra-ui/react";

export const SearchResultSkeleton = () => {
    return (
        <>
            <Flex
                    w="100%"
                    gap="20px"
                    flexFlow="column"
                    p="5px 10px"
                    h="calc(85vh - 80px - 20px)"
                    overflow="hidden"
                >
                    <Skeleton 
                        minH="141px"
                    />
                    <Skeleton 
                        minH="141px"
                    />
                    <Skeleton 
                        minH="141px"
                    />
                    <Skeleton 
                        minH="141px"
                    />
                    <Skeleton 
                        minH="141px"
                    />
            </Flex>
        </>
    )
}