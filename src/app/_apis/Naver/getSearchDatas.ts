import axios from "axios"
import { log } from "console";

const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

export const getSearchDatas = async (query: string) => {
    try {
        const api_uri = "/v1/search/blog?query=" + encodeURIComponent(query);
        const options = {
            headers: {
                "X-Naver-Client-Id" : client_id || "",
                "X-Naver-Client-Secret" : client_secret || "",
            },
        };
        
        const response = await axios.get(api_uri, options);
        if(response.status === 200) {
            const data = response.data;
            return data;
        }
        

    } catch (error) {
        throw error;
    }
}