export function setItmLocalStorage (key, data){
    localStorage.setItem(key, JSON.stringify(data));
}


export function getItmLocalStorage (key){
    let data = localStorage.getItem(key)
    return  JSON.parse(data)
}