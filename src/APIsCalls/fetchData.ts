const API = 'https://newsapi.org/v2/';
const TOKEN = 'apiKey=fcc5896bf5344bf283f97f804fa9fe56';

//another spare token
// const TOKEN= 'apiKey=4840119fc69547f7bbfc023746901112'

export const fetchData = async (url: string, lng: string): Promise<any> => {
  //// make a config file for languages and countries
  let country = lng == 'en' ? 'us' : lng == 'fr' ? 'fr' : 'eg';
  const res = await fetch(`${API}/${url}?country=${country}&${TOKEN}`);
  return await res.json();
};
