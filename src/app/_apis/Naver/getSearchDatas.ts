import axios from "axios"
import { log } from "console";

const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

export interface SearchResult {
    lastBuildDate : string
    total : number
    start : number
    display: number
    items: SearchResultItems[]
}

export interface SearchResultItems {
    title: string
    link: string
    description: string
    bloggername: string
    bloggerlink: string
    postdate: string
}

export const getSearchDatas = (query: string, display: string): Promise<SearchResult> => {
    try {
        const api_uri = `/v1/search/blog?query=${encodeURIComponent(query)}&display=${encodeURIComponent(display)}`;
        const options = {
            headers: {
                "X-Naver-Client-Id" : client_id || "",
                "X-Naver-Client-Secret" : client_secret || "",
            },
        };
        
        const response: Promise<SearchResult> = axios.get(api_uri, options)
        .then((response) => {
            if (response.status === 200) {
                const data = response.data;
                return data
            }
        })
        
        return response
    } catch (error) {
        throw error;
    }
}