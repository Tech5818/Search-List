
import { Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"

interface SearchListItemProps {
    element: {
        title: string
        description: string
        link: string
    }
}

export const SearchListItem = ({element}: SearchListItemProps) => {
    return (
        <Flex
            background="#fafafa"
            p="20px"
            w="100%"
            boxShadow="0 0 4px rgba(0, 0, 0, 0.4)"
            flexFlow="column"
            gap="5px"
        >
            <Link
                href={element.link}
            >
                <Heading
                    as="h5"
                    size="md"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    color="#333"
                    transition=".3s"
                    _hover={{
                        textDecoration: "underLine",
                        color: "#000"
                    }}
                >
                    {element.title}
                </Heading>
            </Link>
            <Text
                overflow="hidden"
                textOverflow="ellipsis"
                h="72px"
            >
                {element.description}
            </Text>
        </Flex>
    )
}