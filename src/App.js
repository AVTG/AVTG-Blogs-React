import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import BlogPage from "./pages/BlogPage";

export default function App() {
  const {fetchBlogs} = useContext(AppContext) ;
  const [searchParams, setSearchParams] = useSearchParams() ;
  const location = useLocation() ;
  useEffect(() => {
    const page = searchParams.get("page") ?? 1 ;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ") ;
      fetchBlogs(Number(page), tag) ;
    }

    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ") ;
      fetchBlogs(Number(page) , null , category) ;
    }

    else{
      fetchBlogs(Number(page)) ;
    }

  },[location.pathname, location.search]) ; 
  return (
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/blog/:blogId" element = {<BlogPage/>} />
      <Route path="/tags/:tag" element = {<TagPage/>} />
      <Route path="/categories/:category" element = {<CategoryPage/>} />
    </Routes>
  );
}
