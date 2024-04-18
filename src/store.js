import {reactive} from 'vue';

export const store = reactive({
    apiUrl:'https://api.themoviedb.org/3/',
    endPoint:{
        movie:'search/movie',
        serieTv:'search/tv'
    },
    options:{
        params:{
            api_key:'e36ef098b0c58eb84f84e642cd8239a0', 
            query:'a',
        }
    },
    imageUrl:'https://image.tmdb.org/t/p/original/',
    movies:[],
    seriesTv:[],
})
