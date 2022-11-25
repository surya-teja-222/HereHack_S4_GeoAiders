import Header from "../components/header";
import DisplayMapClass from "../components/DisplayMap";
import { HERE_API_KEY, MAP_QUEST_API } from "../assets/ENV";
import React, { useEffect } from "react";

const AUTO_COMPLETE_URL = (input: string) => {
    return `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?query=${input}&apiKey=${HERE_API_KEY}`;
};

async function getLatLong(label: string) {
    const res = await fetch(
        `https://www.mapquestapi.com/geocoding/v1/address?key=${MAP_QUEST_API}&location=${label}`
    );
    const data = await res.json();
    return data.results[0].locations[0].latLng;
}

type sel = {
    label: string;
    lat: number;
    lng: number;
};

export default function Search() {
    const [suggestions, setSuggestions] = React.useState<string[]>([]);

    const [selected, setSelected] = React.useState<sel>();

    const inpStyle =
        suggestions.length > 0 ? "rounded-t-[23px]" : "rounded-[23px]";

    useEffect(() => {
        console.log(suggestions);
    }, [suggestions]);

    function autoComplete(e: any) {
        const term = e.target.value;
        if (term.length > 2) {
            fetch(AUTO_COMPLETE_URL(term))
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    var ls = [];
                    for (var i = 0; i < data.suggestions.length; i++) {
                        const label = data.suggestions[i].label.split(",");
                        ls.push(`${label[label.length - 1]} , ${label[0]}`);
                    }
                    setSuggestions(ls);
                });
        }
    }

    return (
        <>
            <Header home />
            <div className="h-[90%] font-poppins bg-[#1D232E] w-full ">
                <div className="text-[42px] max-w-[60%] text-center select-none text-white mx-auto py-[24px]">
                    Enter a Location or Pin on the Map
                </div>
                <div className="flex w-full p-4 px-20 h-[80%] justify-between gap-6">
                    <div className="w-[30%] bg-white h-full rounded-[44px] flex flex-col justify-between shadow-xl p-10">
                        <div className="">
                            <div
                                className={`bg-[#D9D9D9]    p-5 mt-4  flex justify-between ${inpStyle}`}
                            >
                                <input
                                    type={"text"}
                                    name="manual_input"
                                    id="manual_input"
                                    className="outline-none w-fit bg-inherit placeholder:text-[#595959]"
                                    placeholder="Enter a Location..."
                                    onChange={autoComplete}
                                />
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M27.9475 29.8043C25.3593 31.9708 22.0255 33.278 18.3908 33.278C10.171 33.278 3.5 26.607 3.5 18.389C3.5 10.171 10.171 3.5 18.3908 3.5C26.607 3.5 33.2798 10.171 33.2798 18.389C33.2798 22.0255 31.9725 25.361 29.806 27.9458L38.1168 36.2583C38.3723 36.5138 38.5 36.8498 38.5 37.1875C38.5 38.2148 37.5603 38.5 37.1875 38.5C36.8515 38.5 36.5155 38.3723 36.2583 38.115L27.9475 29.8043ZM18.3908 6.12675C11.6218 6.12675 6.1285 11.6217 6.1285 18.389C6.1285 25.1563 11.6218 30.6513 18.3908 30.6513C25.1563 30.6513 30.653 25.1563 30.653 18.389C30.653 11.6217 25.1563 6.12675 18.3908 6.12675Z"
                                        fill="#595959"
                                    />
                                </svg>
                            </div>

                            <div
                                id="searchSuggestions"
                                className="h-fit w-full bg-[#D9D9D9] rounded-b-[23px]"
                            >
                                {suggestions.map((suggestion, index) => {
                                    return (
                                        <div
                                            className="text-[#595959] hover:text-green-700 cursor-pointer font-poppins text-[14px] px-4 pb-1"
                                            key={index}
                                            onClick={async () => {
                                                setSuggestions([]);
                                                (
                                                    document.getElementById(
                                                        "manual_input"
                                                    ) as HTMLInputElement
                                                ).value = suggestion;
                                                var re = await getLatLong(
                                                    suggestion
                                                );
                                                console.log(re);

                                                let ree: sel = {
                                                    label: suggestion,
                                                    lat: re.lat,
                                                    lng: re.lng,
                                                };

                                                setSelected(ree);
                                            }}
                                        >
                                            {suggestion}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="">
                            <div className="alert">
                                <div className="text-[#595959] mb-2 text-center font-poppins text-[14px] px-4 pb-1">
                                    {selected
                                        ? `Selected: ${selected.label}`
                                        : "Select a Location to Continue"}
                                </div>
                            </div>

                            <div className="bg-[#8CACFF] cursor-pointer hover:bg-[#3971ff] h-[60px] w-fit py-3 px-8 mx-auto transition-all duration-700 hover:scale-[1.05] ease-in-out rounded-[33px] flex gap-3">
                                <p className="my-auto text-white font-semibold">
                                    Next
                                </p>
                                <svg
                                    className="my-auto"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 32 33"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 16.8372H29M29 16.8372L14.5 31M29 16.8372L14.5 2"
                                        stroke="white"
                                        stroke-width="3"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-[3px] bg-white h-[60%] my-auto rounded-[44px] shadow-2xl"></div>
                    <div className="w-[60%] bg-white h-full rounded-[44px] shadow-xl">
                        <DisplayMapClass
                            label={selected?.label}
                            lat={selected?.lat}
                            lng={selected?.lng}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
