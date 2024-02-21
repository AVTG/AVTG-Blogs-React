import Blogs from "../components/Blogs";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

export default function Home(){
    return (
        <div className="flex flex-col items-center">
            <Header/>
            <div>
                <Blogs></Blogs>
            </div>
            <Pagination/>
        </div>
        
    )
}