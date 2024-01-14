import { URL_API } from "../constants/const";

export function getID(url){

    let id = url.replace(URL_API, "")
    return id;
}