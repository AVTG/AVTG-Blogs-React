import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner" ;
import BlogDetails from "./BlogDetails";

export default function Blogs(){
    const {posts, loading} = useContext(AppContext) ;
    console.log(posts) ;
    return (
        <div className="w-11/12 max-w-[630px] flex flex-col gap-y-6 pt-5 mt-[70px] mb-[90px]">
            {
                loading? (<Spinner></Spinner>) : (
                    posts.length === 0 ? (
                        <div key={posts.id} className="text-center text-3xl">
                            No Post Found
                        </div>
                    ) : (posts.map((post) => (
                            <BlogDetails key = {post.id} post={post} />
                        ) )  )
                )
            }
        </div>
    ) ;
}