import background from "../Assets/bg-image.jpg";
import NavigationBar from "../Components/Navbar";

export default function Home() {
    return (
        <div className="relative max-h-screen bg-white">
            <div className="absolute w-full h-screen bg-gradient-to-t from-black via-transparent to-black" />
            <div className="flex flex-col justify-between absolute text-white font-sans-serif font-light w-full h-full p-10">
                <NavigationBar />
                <div className="flex flex-col items-end justify-center gap-y-2">
                    <h1 className="text-6xl tracking-wide">YAHYA</h1>
                    <h1 className="font-bold text-7xl tracking-wide">AYYASH</h1>
                    <h1 className="italic text-5xl tracking-veryWide">PORTOFOLIO</h1>
                </div>
                <div className="flex flex-row justify-start gap-x-12 text-lg">
                    <a href="https://www.linkedin.com/in/yahya-ayyash-saifullah-98a28710b/">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="31.4902" height="31.4902" fill="#D9D9D9"/>
                            <path d="M25.3639 3.12042H6.12624C4.467 3.12042 3.12036 4.46706 3.12036 6.1263V25.364C3.12036 27.0232 4.467 28.3698 6.12624 28.3698H25.3639C27.0231 28.3698 28.3698 27.0232 28.3698 25.364V6.1263C28.3698 4.46706 27.0231 3.12042 25.3639 3.12042ZM10.9357 12.7392V24.1616H7.3286V12.7392H10.9357ZM7.3286 9.41474C7.3286 8.57309 8.05001 7.92983 9.13213 7.92983C10.2142 7.92983 10.8936 8.57309 10.9357 9.41474C10.9357 10.2564 10.2623 10.9357 9.13213 10.9357C8.05001 10.9357 7.3286 10.2564 7.3286 9.41474ZM24.1615 24.1616H20.5545C20.5545 24.1616 20.5545 18.5947 20.5545 18.1498C20.5545 16.9475 19.9533 15.7451 18.4504 15.7211H18.4023C16.9474 15.7211 16.3462 16.9595 16.3462 18.1498C16.3462 18.6969 16.3462 24.1616 16.3462 24.1616H12.7392V12.7392H16.3462V14.2783C16.3462 14.2783 17.5065 12.7392 19.8391 12.7392C22.2257 12.7392 24.1615 14.3805 24.1615 17.705V24.1616Z" fill="black"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/ayyash.saifullah/">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="31.4902" height="31.4902" fill="#D9D9D9"/>
                            <path d="M10.0769 1.8894C5.56272 1.8894 1.8894 5.56272 1.8894 10.0769V21.4133C1.8894 25.9275 5.56272 29.6008 10.0769 29.6008H21.4133C25.9275 29.6008 29.6008 25.9275 29.6008 21.4133V10.0769C29.6008 5.56272 25.9275 1.8894 21.4133 1.8894H10.0769ZM10.0769 3.14901H21.4133C25.2466 3.14901 28.3412 6.24357 28.3412 10.0769V21.4133C28.3412 25.2466 25.2466 28.3412 21.4133 28.3412H10.0769C6.24357 28.3412 3.14901 25.2466 3.14901 21.4133V10.0769C3.14901 6.24357 6.24357 3.14901 10.0769 3.14901ZM23.3027 6.92784C22.6071 6.92784 22.0431 7.49178 22.0431 8.18744C22.0431 8.88311 22.6071 9.44705 23.3027 9.44705C23.9984 9.44705 24.5623 8.88311 24.5623 8.18744C24.5623 7.49178 23.9984 6.92784 23.3027 6.92784ZM15.7451 8.81725C11.9264 8.81725 8.81725 11.9264 8.81725 15.7451C8.81725 19.5638 11.9264 22.6729 15.7451 22.6729C19.5638 22.6729 22.6729 19.5638 22.6729 15.7451C22.6729 11.9264 19.5638 8.81725 15.7451 8.81725ZM15.7451 10.0769C18.883 10.0769 21.4133 12.6072 21.4133 15.7451C21.4133 18.883 18.883 21.4133 15.7451 21.4133C12.6072 21.4133 10.0769 18.883 10.0769 15.7451C10.0769 12.6072 12.6072 10.0769 15.7451 10.0769Z" fill="black"/>
                        </svg>
                    </a>
                    <a href="https://github.com/ayyashcihuy">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.509766" width="31.4902" height="31.4902" fill="#D9D9D9"/>
                            <g clip-path="url(#clip0_116_200)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 2C24.7322 2 31 8.4259 31 16.3541C31 22.6947 26.9932 28.0735 21.4338 29.9733C20.724 30.1147 20.472 29.6665 20.472 29.2843C20.472 28.8111 20.4888 27.2655 20.4888 25.3447C20.4888 24.0063 20.0408 23.1328 19.5382 22.6876C22.656 22.332 25.932 21.1181 25.932 15.6049C25.932 14.0369 25.3888 12.7573 24.49 11.7521C24.6356 11.3895 25.1158 9.92953 24.3528 7.95273C24.3528 7.95273 23.1796 7.56811 20.507 9.42451C19.3884 9.10671 18.19 8.94681 17 8.94121C15.81 8.94681 14.613 9.10671 13.4958 9.42451C10.8204 7.56811 9.6444 7.95273 9.6444 7.95273C8.8842 9.92953 9.3644 11.3895 9.5086 11.7521C8.614 12.7573 8.0666 14.0369 8.0666 15.6049C8.0666 21.1041 11.3356 22.3366 14.445 22.6992C14.0446 23.0576 13.682 23.6899 13.556 24.6181C12.758 24.9849 10.7308 25.6197 9.482 23.4259C9.482 23.4259 8.7414 22.0467 7.3358 21.9459C7.3358 21.9459 5.9708 21.9278 7.2406 22.8182C7.2406 22.8182 8.1576 23.2592 8.7946 24.9182C8.7946 24.9182 9.6164 27.4801 13.5112 26.6121C13.5182 27.8119 13.5308 28.9427 13.5308 29.2843C13.5308 29.6637 13.2732 30.1077 12.5746 29.9747C7.011 28.0777 3 22.6961 3 16.3541C3 8.4259 9.2692 2 17 2Z" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_116_200">
                            <rect width="28" height="28" fill="white" transform="translate(3 2)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>
            <img src={background} alt="background" className="w-full h-screen object-cover" />
        </div>
    )
}