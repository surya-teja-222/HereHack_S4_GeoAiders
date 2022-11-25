import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { BACKEND_URL } from "../assets/env";
import HeaderDark from "../components/headerDark";
import ResMap from "../components/resMap";

type main = {
    latitude: number;
    longitude: number;
    price: number;
};

type secondary = {
    lat: number;
    lng: number;
    price: number;
    label: string;
};
export default function HouseResPrice() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [cityName, setCityName] = React.useState<string>("");

    const [main, setMain] = React.useState<main>();
    const [secondary, setSecondary] = React.useState<secondary[]>([]);

    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    const noOfRooms = searchParams.get("noOfRooms");
    const bathRoom = searchParams.get("bathRoom");
    const car = searchParams.get("car");
    const landSize = searchParams.get("landSize");
    const buildingArea = searchParams.get("buildingArea");
    const houseAge = searchParams.get("houseAge");

    useEffect(() => {
        fetch(BACKEND_URL + "r-geocode", {
            method: "POST",
            body: JSON.stringify({
                latitude: lat,
                longitude: lng,
            }),
        }).then(async (res) => setCityName(await res.text()));

        fetch(BACKEND_URL + "house-price", {
            method: "POST",
            body: JSON.stringify({
                lat: lat,
                lng: lng,
                noOfRooms: noOfRooms,
                bathRoom: bathRoom,
                car: car,
                landSize: landSize,
                buildingArea: buildingArea,
                houseAge: houseAge,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setMain(data["1"]);
                // console.log(data["1"]);
                setSecondary(data["2"]["house_price_nearest"]);
            });
    }, [searchParams.get("lat")]);

    if (lat === null || lng === null) {
        window.location.href = "/house-price";
        return <></>;
    } else {
        return (
            <>
                <HeaderDark home />
                <div className="h-[90%] relative">
                    <div className="absolute h-[90vh] shadow-2xl w-[25%] bg-white p-3 rounded-r-[23px] !z-[10000]">
                        <h1 className="text-lg">{`Location : ${cityName}`}</h1>

                        <div className="latLong mt-4 text-sm">
                            <p className="text-sm">Latitude : {lat}</p>
                            <p className="text-sm">Longitude : {lng}</p>
                        </div>

                        <div className="mt-6 p-5 select-none text-white font-poppins bg-[#1E232E] w-full rounded-[10px] shadow-2xl text-md">
                            <h2>{`Selected: ${cityName}`}</h2>
                            <p>Predicted Price:</p>
                            <span>{`${
                                main?.price ? main.price : ""
                            } (per Sqft)`}</span>
                        </div>
                        <h3 className="mt-3 font-semibold">
                            {secondary.length > 0
                                ? "Other Locations Nearby :"
                                : ""}
                        </h3>
                        <div
                            id="details"
                            className="additional flex flex-col overflow-y-scroll max-h-[50vh] mt-4 gap-3 font-poppins text-white"
                        >
                            {secondary.map((item, index) => {
                                return (
                                    <>
                                        <div
                                            tabIndex={index}
                                            id={`item-${index}`}
                                            className="bg-[#4b5364] rounded-md  shadow-md w-full p-3 h-fit transition-all ease-in-out duration-500"
                                            style={{
                                                maxHeight: "40px",
                                            }}
                                            key={index}
                                        >
                                            <div className="flex justify-between">
                                                <h2>{item.label}</h2>
                                                <div
                                                    key={index}
                                                    className="my-auto cursor-pointer h-full w-[10%] "
                                                    onClick={(
                                                        e: React.MouseEvent<
                                                            HTMLDivElement,
                                                            MouseEvent
                                                        >
                                                    ) => {
                                                        console.log("clicked");
                                                        var x =
                                                            e.target as HTMLDivElement;
                                                        var parent =
                                                            document.getElementById(
                                                                `item-${index}`
                                                            ) as HTMLDivElement;
                                                        var svg =
                                                            document.getElementById(
                                                                `svg-${index}`
                                                            ) as HTMLDivElement;
                                                        if (
                                                            parent.style
                                                                .maxHeight ===
                                                            "40px"
                                                        ) {
                                                            parent.style.maxHeight =
                                                                "1000px";
                                                            svg.style.rotate =
                                                                "180deg";
                                                        } else {
                                                            parent.style.maxHeight =
                                                                "40px";
                                                            svg.style.rotate =
                                                                "0deg";
                                                        }
                                                    }}
                                                >
                                                    <svg
                                                        key={index}
                                                        id={`svg-${index}`}
                                                        className="transition-all ease-in-out duration-500"
                                                        width="14"
                                                        height="10"
                                                        viewBox="0 0 14 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M13.4573 1.61467C13.6013 1.42667 13.6666 1.21467 13.6666 1.00667C13.6666 0.488 13.2586 0 12.6679 0H1.33325C0.739919 0 0.333252 0.489333 0.333252 1.00667C0.333252 1.216 0.399919 1.428 0.545252 1.616C2.14925 3.688 4.88125 7.21467 6.22259 8.94667C6.41192 9.192 6.70259 9.33333 7.01192 9.33333C7.31859 9.33333 7.61059 9.19067 7.79992 8.94533L13.4573 1.61467ZM3.37192 2H10.6333L7.00925 6.696L3.37192 2Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="mt-4 select-none">
                                                <p className="text-lg">{`Price: ${item.price} (per Sqft)`}</p>
                                                <p className="mt-3">{`Latitude: ${item.lat}`}</p>
                                                <p>{`Longitude: ${item.lng}`}</p>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                    <ResMap
                        inpLat={parseFloat(lat)}
                        inpLng={parseFloat(lng)}
                        secondary={secondary}
                    />
                </div>
            </>
        );
    }
}
