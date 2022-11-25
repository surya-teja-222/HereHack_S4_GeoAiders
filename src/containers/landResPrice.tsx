import HeaderDark from "../components/headerDark";
import ResMap from "../components/resMap";

export default function LandResPrice() {
    return (
        <>
            <HeaderDark home />
            <div className="h-[90%] relative">
                <div className="absolute h-[90vh] shadow-2xl w-[25%] bg-white p-3 rounded-r-[23px] !z-[10000]">
                    <h1 className="text-lg">Location : Jolimont</h1>

                    <div className="latLong mt-4 text-sm">
                        <p className="text-sm">Latitude : 28.6139</p>
                        <p className="text-sm">Longitude : 77.209</p>
                    </div>
                </div>
                <ResMap />
            </div>
        </>
    );
}
