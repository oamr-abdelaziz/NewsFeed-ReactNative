const API = 'https://newsapi.org/v2/'
const TOKEN= 'apiKey=fcc5896bf5344bf283f97f804fa9fe56'
// const TOKEN= 'apiKey=4840119fc69547f7bbfc023746901112'

export const fetchData=async (url:string,lng:string):Promise<any>=>{
    // return fetch(`${API}${url}?${TOKEN}`).then((res)=>{
        console.log('fetch again');
        let country=lng=="en"?"us":"fr"
        const res = await fetch(`${API}/${url}?country=${country}&${TOKEN}`);
    return await res.json();
}




///////////////////another api 
// const API = 'https://api.thenewsapi.com/v1/news/'
// const TOKEN= '4vWSXs6m7efGMSJyqWioRClw0wWtvSW7ZzuF6Ch3'
// // const TOKEN= 'apiKey=4840119fc69547f7bbfc023746901112'

// export const fetchData=(url,lng)=>{
//     // return fetch(`${API}${url}?${TOKEN}`).then((res)=>{
//         return fetch(`${API}/${url}?locale=us&language=${lng}?limit=5&api_token=${TOKEN}`).then((res)=>{
//         return res.json()
//     });
// }
