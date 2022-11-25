import Logo from "../assets/logo";

export default function footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="h-[270px] font-poppins  flex flex-col justify-between text-white  bg-[#212337] pt-16 pb-5 px-16">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <Logo fill="#fff" />
                        <p className=" font-poppins text-[14px]">
                            PROUDLY FROM INDIA ❤️
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 my-auto mr-14">
                        <h4 className="text-[20px]">Contact:</h4>
                        <div className="flex gap-6">
                            <a
                                href="mailto:suryatejareddy222@gmail.com"
                                className=" group"
                            >
                                <svg
                                    width="24"
                                    height="26"
                                    viewBox="0 0 24 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 0V18H24V0H0ZM6.623 7.929L2 13.641V4.183L6.623 7.929ZM2.482 2H21.517L12 9.713L2.482 2ZM8.176 9.188L12 12.287L15.83 9.183L21.442 16H2.663L8.176 9.188ZM17.384 7.924L22 4.183V13.531L17.384 7.924Z"
                                        fill="white"
                                        className="group-hover:fill-green-500 transition-all ease-in-out duration-200"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/surya_teja_222/"
                                className=" group"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_9_51)">
                                        <path
                                            d="M15.233 5.488C14.39 5.45 14.136 5.442 12 5.442C9.864 5.442 9.611 5.45 8.768 5.488C6.598 5.587 5.587 6.615 5.489 8.767C5.45 9.611 5.441 9.864 5.441 12C5.441 14.136 5.45 14.389 5.488 15.233C5.587 17.381 6.594 18.413 8.767 18.512C9.61 18.55 9.864 18.559 12 18.559C14.137 18.559 14.39 18.551 15.233 18.513C17.403 18.414 18.413 17.384 18.512 15.234C18.55 14.39 18.558 14.137 18.558 12.001C18.558 9.865 18.55 9.612 18.512 8.769C18.413 6.616 17.401 5.587 15.233 5.488ZM12 16.108C9.731 16.108 7.892 14.269 7.892 12C7.892 9.731 9.732 7.892 12 7.892C14.268 7.892 16.108 9.731 16.108 12C16.108 14.269 14.269 16.108 12 16.108ZM16.271 8.69C15.741 8.69 15.311 8.26 15.311 7.73C15.311 7.2 15.741 6.77 16.271 6.77C16.801 6.77 17.231 7.2 17.231 7.73C17.231 8.26 16.801 8.69 16.271 8.69ZM14.667 12C14.667 13.473 13.473 14.667 12 14.667C10.527 14.667 9.333 13.473 9.333 12C9.333 10.527 10.527 9.333 12 9.333C13.473 9.333 14.667 10.527 14.667 12ZM19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0V0ZM19.952 15.298C19.82 18.207 18.201 19.819 15.299 19.952C14.445 19.991 14.173 20 12 20C9.827 20 9.556 19.991 8.702 19.952C5.794 19.819 4.182 18.204 4.048 15.298C4.009 14.445 4 14.173 4 12C4 9.828 4.009 9.555 4.048 8.702C4.182 5.794 5.796 4.181 8.702 4.049C9.556 4.009 9.827 4 12 4C14.173 4 14.445 4.009 15.299 4.048C18.207 4.181 19.822 5.799 19.952 8.701C19.991 9.555 20 9.828 20 12C20 14.173 19.991 14.445 19.952 15.298Z"
                                            fill="white"
                                            className="group-hover:fill-green-500 transition-all ease-in-out duration-200"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_9_51">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                                className="group-hover:fill-green-500 transition-all ease-in-out duration-200"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a
                                href="https://github.com/surya-teja-222"
                                className=" group"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_9_53)">
                                        <path
                                            d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM14.534 19.59C14.129 19.668 14 19.419 14 19.206V17.011C14 16.264 13.738 15.778 13.45 15.53C15.232 15.332 17.104 14.655 17.104 11.583C17.104 10.709 16.792 9.995 16.281 9.436C16.363 9.234 16.637 8.42 16.202 7.319C16.202 7.319 15.531 7.104 14.004 8.139C13.364 7.959 12.68 7.872 12 7.868C11.32 7.871 10.636 7.959 9.997 8.137C8.469 7.102 7.797 7.317 7.797 7.317C7.363 8.419 7.637 9.232 7.72 9.435C7.208 9.995 6.896 10.708 6.896 11.582C6.896 14.646 8.763 15.333 10.541 15.536C10.312 15.736 10.105 16.088 10.033 16.606C9.576 16.81 8.419 17.163 7.705 15.94C7.705 15.94 7.282 15.172 6.478 15.115C6.478 15.115 5.698 15.105 6.423 15.602C6.423 15.602 6.948 15.848 7.312 16.772C7.312 16.772 7.775 18.2 10 17.716V19.205C10 19.416 9.871 19.664 9.472 19.59C6.292 18.533 4 15.534 4 12C4 7.581 7.582 4 12 4C16.418 4 20 7.581 20 12C20 15.533 17.711 18.531 14.534 19.59Z"
                                            fill="white"
                                            className="group-hover:fill-green-500 transition-all ease-in-out duration-200"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_9_53">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                                className="group-hover:fill-green-500 transition-all ease-in-out duration-200"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/suryateja222/"
                                className=" group"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_9_55)">
                                        <path
                                            d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z"
                                            fill="white"
                                            className="group-hover:fill-green-500 transition-all ease-in-out duration-200"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_9_55">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                                className="group-hover:fill-green-500 transition-all ease-in-out duration-200"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="h-[1px] w-[90%] mx-auto bg-white"></div>
                    <p className="text-center mt-2">KnowPrice.ai © {year}</p>
                </div>
            </div>
        </>
    );
}
