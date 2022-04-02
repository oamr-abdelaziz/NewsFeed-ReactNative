const API = 'https://newsapi.org/v2/'
const TOKEN= 'apiKey=fcc5896bf5344bf283f97f804fa9fe56'
// const TOKEN= 'apiKey=4840119fc69547f7bbfc023746901112'

export const fetchData=(url)=>{
    // return fetch(`${API}${url}?${TOKEN}`).then((res)=>{
        return fetch(`${API}/${url}?country=us&${TOKEN}`).then((res)=>{
        return res.json()
    });
}