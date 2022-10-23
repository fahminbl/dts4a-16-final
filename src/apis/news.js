import axios from "axios";
import create from "zustand";


const apiKey = "YLdlbszdEWk3OJjGGUcefYtUG7uSZMto";

// slice
const sliceNews = (set) => ({
    // state & action

    news: [],
    isLoading: false,
    error: null,

    fetchNews: async() => {
        try {

            set({isLoading: true});
            const {data} = await axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + apiKey);
            set((state) => ({...state, news: data.results, isLoading: false }));
            // console.log("data results");
            //  console.log(data.results);
            
            
        } catch (error) {
            // error = error;
            // set({...state, error: error}); 
            // bisa disederhanakan

            set({error: error, isLoading: false});
            console.log(error);
        }
    },

    searchNews: async(keys) => {
        try {

            set({isLoading: true});
            const {data} = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keys}&api-key=${apiKey}`);
            set((state) => ({...state, news: data.response.docs, isLoading: false }));
            // console.log(data.response)
            // console.log("data results");
            // console.log(data.results);
            
            
        } catch (error) {
            // error = error;
            // set({...state, error: error}); 
            // bisa disederhanakan

            set({error: error, isLoading: false});
            console.log(error);
        }
    }
});

// hoooks
const useNewsStore = create(sliceNews);


//selector
export const selectIsLoading = (state) => state.isLoading;
export const selectNews = (state) => state.news;
export const selectError = (state) => state.error;
export const selectFetchNews = (state) => state.fetchNews;
export const selectSearchNews = (state) => state.searchNews;

export default useNewsStore;