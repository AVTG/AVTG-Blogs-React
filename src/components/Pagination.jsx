import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination(){
    const {page , handlePageChange,totalPages} = useContext(AppContext) ;
    return (
        <div className="border w-full p-2 flex justify-center fixed bottom-0 bg-white ">
            <div className=" w-11/12 max-w-[630px] flex items-center justify-between gap-x-5 ">
                <div className="flex gap-x-2">
                {
                    page > 1 &&
                    <button onClick={() => {
                        handlePageChange(page-1) ;
                    }} className="px-5 py-1 border rounded-lg shadow-md">Previous</button>
                }

                {
                    page < totalPages &&
                    <button onClick={() => {
                        handlePageChange(page+1) ;
                    }} className="px-5 py-1 border rounded-lg shadow-md">
                        Next
                    </button>
                }
                </div>

                <p className="font-bold text-sm">{`page ${page} of ${totalPages}`}</p>
            </div>
        </div>
    ) ;
}