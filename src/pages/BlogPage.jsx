import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import BlogDetails from "../components/BlogDetails";

export default function BlogPage(){
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/" ;

    const [blog, setBlog] = useState(null) ;
    const [relatedBlogs,setRelatedBlogs] = useState([]) ;
    const location = useLocation() ;
    const navigate = useNavigate() ;
    const {loading,setLoading} = useContext(AppContext) ;
    const blogId = location.pathname.split("/").at(-1) ;

    async function fetchRelatedBlog(){
        // console.log(location.pathname) ;
        setLoading(true) ;
        let url = `${newBaseUrl}get-blog?blogId=${blogId}` ;
        console.log(`${url}`) ;
        try{
            const res = await fetch(url) ;
            const data = await res.json() ;
            setRelatedBlogs(data.relatedBlogs) ;
            setBlog(data.blog) ;
        }
        catch{
            console.log("Error in BlogsPage") ;
            setBlog(null) ;
            setRelatedBlogs([]) ;
        }
        setLoading(false) ;
    }

    useEffect(()=>{
        if(blogId){
            fetchRelatedBlog() ;
        }
    },[location.pathname])
    return (
        <div className="flex flex-col justify-center items-center gap-y-1">
            <Header/>
            <div className=" mt-[105px] w-11/12 max-w-[630px]">
                <button className="px-5 py-1 border rounded-lg shadow-md" onClick={() => {
                    navigate(-1) ;
                }}>
                    Back
                </button>
            </div>

            {
                loading ? (<Spinner/>) : 
                blog ? (<div className="w-11/12 max-w-[630px] flex flex-col gap-y-6 pt-5 mb-[90px]">
                            <BlogDetails post = {blog} /> 
                            <h2 className="font-bold text-2xl">Related Blogs</h2> 
                            {
                                relatedBlogs.map((post) => {
                                    return <BlogDetails post = {post}/>
                                })
                            }
                        </div> ) : 
                    ( <p>No Blogs Found</p> )
            }
        </div>
    )
}