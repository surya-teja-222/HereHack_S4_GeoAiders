import { Link } from "react-router-dom";
import Logo from "../assets/logo";
import { headerProps } from "../types";

export default function Header(props: headerProps) {
    const getStarted = () => {
        if (props.getStarted) {
            return (
                <Link to="/land-price" className="flex franchise_btn py-2 px-4">
                    <p className="text-[#7C7C7C] font-semibold">Get Started</p>
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
            );
        } else {
            return <></>;
        }
    };

    const home = () => {
        if (props.home) {
            return (
                <Link to="/" className="flex  py-2 px-4">
                    <p className="text-[#7C7C7C] font-semibold">Home</p>
                </Link>
            );
        } else {
            return <></>;
        }
    };

    return (
        <div className="h-[10%] flex w-full justify-between">
            <Link to="/" className="p-2 flex ml-[20px]">
                <svg
                    width="44"
                    height="55"
                    viewBox="0 0 55 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_1_9)">
                        <rect width="55" height="66" fill="white" />
                        <path
                            d="M15.125 50.6L7.5625 58.1625L0 50.6H15.125Z"
                            fill="#48DAD0"
                        />
                        <path
                            d="M26.2625 33.275C24.6125 31.35 24.75 30.3875 25.7125 29.425C26.95 28.1875 28.05 28.7375 29.425 30.1125L26.2625 33.275ZM42.4875 12.65C43.725 11.4125 44.825 11.9625 46.2 13.3375L43.0375 16.5C41.3875 14.7125 41.525 13.6125 42.4875 12.65ZM52.25 15.95C50.7375 18.15 48.2625 21.725 45.5125 18.975L52.3875 12.1C51.8375 11.4125 51.2875 10.8625 51.0125 10.5875C47.3 6.87501 43.175 6.87501 40.0125 10.0375C37.8125 12.2375 37.2625 14.7125 37.95 17.05L35.75 14.575C35.0625 14.9875 32.45 17.1875 34.5125 20.7625L32.0375 18.7L28.7375 22L33.1375 26.4C29.7 23.7875 26.125 23.925 23.2375 26.95C20.075 30.1125 20.35 33.825 22.6875 36.9875L22.275 36.575C19.1125 33.4125 15.8125 34.5125 14.1625 36.1625C12.925 37.4 12.1 39.1875 12.375 40.425L5.49999 33.825L1.92499 37.4L15.125 50.6H22.275L17.4625 45.7875C14.9875 43.3125 14.9875 41.9375 16.0875 40.7C17.1875 39.6 18.5625 40.2875 21.0375 42.625L25.7125 47.3L29.2875 43.725L24.8875 39.325C28.05 41.8 31.9 41.9375 35.475 38.5C37.5375 36.575 38.225 34.65 38.225 34.65L35.6125 32.8625C34.1 35.0625 31.625 38.6375 28.875 36.025L35.75 29.15L40.0125 33.4125L43.725 29.7L38.3625 24.3375C35.8875 21.8625 37.4 19.525 38.3625 18.7C38.9125 19.6625 39.6 20.7625 40.425 21.5875C43.8625 25.025 48.2625 25.7125 52.25 21.8625C54.3125 19.9375 55 18.0125 55 18.0125L52.25 15.95Z"
                            fill="black"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_9">
                            <rect width="55" height="66" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <div className="w-[2px] bg-black h-[75%] my-auto mx-3"></div>
                <div className="my-auto">
                    <Logo />
                </div>
            </Link>
            <div className="p-2 mr-[20px] my-auto">
                {getStarted()}
                {home()}
            </div>
        </div>
    );
}
