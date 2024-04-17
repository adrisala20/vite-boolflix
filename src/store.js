import {reactive} from 'vue';

export const store = reactive({
    apiUrl:'https://api.themoviedb.org/3/',
    endPoint:{
        movie:'search/movie',
        tv:'search/tv'
    },
    options:{
        params:{
            api_key:'1ec97a9cf8b76f59707959814f5ed3af', 
            query:'a',
        }
    },
    imageUrl:'https://image.tmdb.org/t/p/original/'
    
})
