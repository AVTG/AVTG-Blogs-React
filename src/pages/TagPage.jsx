import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

export default function TagPage() {
    const navigate = useNavigate() ;
    const location = useLocation() ;
    const tag = location.pathname.split("/").at(-1) ;

    return (
        <div className="flex flex-col items-center justify-center">
            <Header/>
            <div className="mt-[106px] w-11/12 max-w-[630px] flex gap-x-4 items-center -mb-[70px]">
                <button onClick={() => {
                    navigate(-1) ;
                }} className="px-5 py-1 border rounded-lg shadow-md">
                    Back
                </button>

                <h2 className="font-bold text-2xl">Blogs Tagged #{tag}</h2>
            </div>

            <Blogs/>
            <Pagination/>
        </div>
    )
}