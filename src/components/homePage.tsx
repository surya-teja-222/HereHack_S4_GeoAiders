import zMinus100 from "../assets/bg_background_-100.png";
import zMinus10 from "../assets/bg_background_-10.png";
import bg from "../assets/bg.png";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <div className="h-[90%] relative">
                <div className="z-[-10] absolute">
                    <img
                        src={bg}
                        alt="decor"
                        className="w-[110vw] h-[90vh] object-cover"
                    />
                </div>
                <div className="z-0 text-white  max-w-[40vw]  h-full my-auto  ml-20 pt-10">
                    <h1 className="font-roboto text-[72px] font-semibold cursor-default select-none">
                        Power Of Real Estate in Your Hands!
                    </h1>
                    <div className="flex gap-6 mt-4">
                        <Link
                            to="/land-price"
                            className="flex w-fit franchise_btn py-2 px-4 mt-4"
                        >
                            <p className="text-[#7C7C7C] font-semibold">
                                Know Land Price
                            </p>
                            <svg
                                className="ml-2 my-auto"
                                width="19"
                                height="16"
                                viewBox="0 0 19 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 8.16667H16M16 8.16667L8 14.053M16 8.16667L8 2"
                                    stroke="#7C7C7C"
                                    strokeWidth="3"
                                />
                            </svg>
                        </Link>
                        <Link
                            to="/house-price"
                            className="flex w-fit franchise_btn py-2 px-4 mt-4"
                        >
                            <p className="text-[#7C7C7C] font-semibold">
                                Know House Price
                            </p>
                            <svg
                                className="ml-2 my-auto"
                                width="19"
                                height="16"
                                viewBox="0 0 19 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 8.16667H16M16 8.16667L8 14.053M16 8.16667L8 2"
                                    stroke="#7C7C7C"
                                    strokeWidth="3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
