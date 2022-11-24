export default function BetaRibbon() {
    return (
        <div id="ribbon" className="beta-ribbon h-[28px] bg-[#1549ff] flex ">
            <p className="text-white hover:underline cursor-pointer ml-auto font-poppins text-sm my-auto">
                Get Beta Access Now
            </p>
            <svg
                className="my-auto mx-4 cursor-pointer"
                onClick={() => {
                    const ribbon = document.getElementById("ribbon");
                    ribbon?.classList.add("hidden");
                }}
                width="14"
                height="14"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M2 1L16 17.5M16 1L2 17.5"
                    stroke="white"
                    strokeWidth="3"
                />
            </svg>
        </div>
    );
}
