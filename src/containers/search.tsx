import Header from "../components/header";
import DisplayMapClass from "../components/DisplayMap";
export default function Search() {
    return (
        <>
            <Header home />
            <div className="h-[90%] font-poppins bg-[#1D232E] w-full ">
                <div className="text-[42px] max-w-[60%] text-center text-white mx-auto py-[24px]">
                    Enter a Location or Pin on the Map
                </div>
                <div className="flex w-full p-4 px-20 h-[80%] justify-between gap-6">
                    <div className="w-[30%] bg-white h-full rounded-[44px] shadow-xl"></div>
                    <div className="w-[3px] bg-white h-[60%] my-auto rounded-[44px] shadow-2xl"></div>
                    <div className="w-[60%] bg-white h-full rounded-[44px] shadow-xl">
                        <DisplayMapClass />
                    </div>
                </div>
            </div>
        </>
    );
}
