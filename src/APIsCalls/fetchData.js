const API = 'https://newsapi.org/v2/'
const TOKEN= 'apiKey=fcc5896bf5344bf283f97f804fa9fe56'

export const fetchData=(url)=>{
    // return fetch(`${API}${url}?${TOKEN}`).then((res)=>{
        return fetch(`${API}/${url}?country=eg&${TOKEN}`).then((res)=>{
        return res.json()
    });
}