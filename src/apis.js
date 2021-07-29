import apitoken from './key';
const allNews=()=>{
        return fetch('https://imdb8.p.rapidapi.com/actors/get-all-news?nconst=nm0001667',{
        method:'GET',
        headers:{
            'x-rapidapi-key':'4d6b5018b6msh280ce260362a620p1c3c5ajsn5249d888909d'

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
            'x-rapidapi-key':'4d6b5018b6msh280ce260362a620p1c3c5ajsn5249d888909d'

        }
    })
    .then((response)=>{
        return response.json();
    })
    .catch((error)=>{console.log(error)});
}

export {allNews,getMovies};