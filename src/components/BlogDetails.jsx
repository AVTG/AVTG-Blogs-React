import { NavLink } from "react-router-dom"

export default function BlogDetails({ post }) {
    return (
        <div className="flex flex-col gap-y-1 bg" >
            <NavLink to={`/blog/${post.id}`}>
                <p className="font-bold leading-6">{post.title}</p>
            </NavLink>

            <p className="text-sm flex gap-x-2">
                By <span className="italic">{post.author}</span>


                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                    <span className=" border-b-2 border-dotted border-black">{post.category}</span>
                </NavLink>
            </p>


            <p className=" text-sm">Posted on {post.date}</p>
            <p>{post.content}</p>


            <div className="flex flex-wrap gap-x-2">
                {post.tags.map((tag, index) => {
                    return(
                    <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}key={index} >
                        <span className="text-blue-600 underline  text-sm">{`#${tag}`}</span>
                    </NavLink>)
                })}
            </div>
        </div>
    )
}