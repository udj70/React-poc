import apikey from './key';
const allNews=()=>{
        return fetch('https://imdb8.p.rapidapi.com/actors/get-all-news?nconst=nm0001667',{
        method:'GET',
        headers:{
            'x-rapidapi-key':apikey

        }
    })
    .then((response)=>{
            return response.json();
    })
    .catch((error)=>{console.log(error)});
}

const getMovies=(name)=>{
    return fetch('https://imdb8.p.rapidapi.com/title/find?q='+name,{
        method:'GET',
        headers:{
            'x-rapidapi-key':apikey

        }
    })
    .then((response)=>{
        return response.json();
    })
    .catch((error)=>{console.log(error)});
}

export {allNews,getMovies};