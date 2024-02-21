import { useState } from "react";
import { createContext } from "react";
import baseUrl from '../baseUrl'
import { useNavigate } from "react-router-dom";


export const AppContext = createContext() ;

export default function AppContextProvider({children}){
    const [loading,setLoading] = useState(false) ;
    const [posts,setPosts] = useState([]) ;
    const [page,setPage] = useState(1) ;
    const [totalPages, setTotalPages] = useState(null) ;
    const navigate = useNavigate() ;

    async function fetchBlogs(page = 1 , tag = null , category){
        setLoading(true) ;
        let url = `${baseUrl}?page=${page}` ;
        if(tag){
            url += `&tag=${tag}` ;
        }

        if(category){
            url += `&category=${category}` ;
        }

        try{
            const result = await fetch(url) ;
            const data = await result.json() ;
            console.log(data) ;
            setPage(data.page) ;
            setPosts(data.posts) ;
            setTotalPages(data.totalPages) ;
        }
        catch(error){
            alert("error in fetching data") ;
            setPage(1) ;
            setPosts([] ) ;
            setTotalPages(null) ;
        }
        setLoading(false) ;
    }

    function handlePageChange(page){
        navigate({search : `?page=${page}`}) ;
        setPage(page) ;
        fetchBlogs(page) ;
    }

    const value = {
        loading,setLoading,
        posts,setPosts,
        page,setPage,
        totalPages, setTotalPages,
        fetchBlogs, handlePageChange

    }
    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}