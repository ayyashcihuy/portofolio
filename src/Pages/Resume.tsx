import NavigationBar from "../Components/Navbar";
import html_img from "../Assets/html.png";
import css_img from "../Assets/css-3.png";
import react_img from "../Assets/react.png";
import vite_img from "../Assets/vite.svg";
import figma_img from "../Assets/figma.svg";
import adobe_img from "../Assets/adobe.png";

export default function Resume() {
    return (
        <div className="relative max-h-screen bg-white">
            <div className="absolute w-full h-screen bg-gradient-to-t from-black via-gray-800 to-black" />
            <div className="flex flex-col justify-between absolute h-screen text-white font-sans-serif font-light w-full p-10">
                <NavigationBar />
                <div className="flex flex-row items-end justify-between w-full gap-y-2">
                    <div className="flex flex-col gap-y-4 w-full">
                        <h1 className="font-bold tracking-widest text-lg">EDUCATIONAL HISTORY</h1>
                        <div className="w-full flex flex-col flex-wrap justify-between gap-x-4 gap-y-10">
                            <div className="flex flex-row w-full items-center gap-x-6 h-full">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                    <p className="text-black font-bold text-xs tracking-widest">2023</p>
                                </div>
                                <div className="flex flex-col justify-between items-start">
                                    <p className="font-bold tracking-widest">Indonesia University, Salemba</p>
                                    <p className="tracking-widest mt-2">Magister of Marketing Communication</p>
                                </div>
                            </div>
                            <div className="flex flex-row w-full items-center gap-x-6 h-full">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                    <p className="text-black font-bold text-xs tracking-widest">2021</p>
                                </div>
                                <div className="flex flex-col justify-between items-start">
                                    <p className="font-bold tracking-widest">Hacktiv8 Indonesia, Jakarta</p>
                                    <p className="tracking-widest mt-2">Bootcamp Full Stack Javascript</p>
                                </div>
                            </div>
                            <div className="flex flex-row w-full items-center gap-x-6 h-full">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                    <p className="text-black font-bold text-xs tracking-widest">2018</p>
                                </div>
                                <div className="flex flex-col justify-between items-start">
                                    <p className="font-bold tracking-widest">Indonesia University, Depok</p>
                                    <p className="tracking-widest mt-2">Bachelor of Islamic Economy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4 w-full">
                        <h1 className="font-bold tracking-widest text-lg">WORKING EXPERIENCE</h1>
                        <div className="w-full flex flex-col flex-wrap justify-between gap-x-4 gap-y-10">
                            <div className="flex flex-row w-full items-center gap-x-6 h-full">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                    <p className="text-black font-bold text-xs tracking-widest">2022</p>
                                </div>
                                <div className="flex flex-col justify-between items-start">
                                    <p className="font-bold tracking-widest">Panin Sekuritas</p>
                                    <p className="tracking-widest mt-2">Magister of Marketing Communication</p>
                                </div>
                            </div>
                            <div className="flex flex-row w-full items-center gap-x-6 h-full">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                    <p className="text-black font-bold text-xs tracking-widest">2019</p>
                                </div>
                                <div className="flex flex-col justify-between items-start">
                                    <p className="font-bold tracking-widest">National Committee for Islamic and Finance</p>
                                    <p className="tracking-widest mt-2">Magister of Marketing Communication</p>
                                </div>
                            </div>
                            <div className="flex flex-row w-full items-center gap-x-6 h-full">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                    <p className="text-black font-bold text-xs tracking-widest">2018</p>
                                </div>
                                <div className="flex flex-col justify-between items-start">
                                    <p className="font-bold tracking-widest">Medimedi</p>
                                    <p className="tracking-widest mt-2">Medical Illustration and Video Editor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-end justify-start gap-y-2">
                    <div className="flex flex-col gap-y-4 w-full">
                        <h1 className="font-bold tracking-widest text-lg">EXPERIENCE</h1>
                        <div className="w-full flex flex-row flex-wrap justify-between gap-x-4">
                            <div className="flex flex-col items-center gap-y-4 w-20">
                                <img src={html_img} alt="logo html" width={64} height={64} />
                                <p className="mr-1">HTML</p>
                            </div>
                            <div className="flex flex-col items-center gap-y-4">
                                <img src={css_img} alt="logo html" width={64} height={64} />
                                <p>CSS</p>
                            </div>
                            <div className="flex flex-col items-center gap-y-4">
                                <img src={react_img} alt="logo html" width={64} height={64} />
                                <p>REACT</p>
                            </div>
                            <div className="flex flex-col items-center gap-y-4">
                                <svg width="64" height="64" viewBox="0 0 90 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_116_13)">
                                        <path d="M71.2584 13.6848H56.1099L45.0786 31.9772L35.6231 13.6848H0.953125L45.0786 92.9039L89.204 13.6848H71.2584ZM11.9254 20.2916H22.5234L45.0786 61.2121L67.6141 20.2916H78.2121L45.0786 79.7936L11.9254 20.2916Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_116_13">
                                            <rect width="88.2509" height="105.708" fill="white" transform="translate(0.953125 0.409424)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>VUE</p>
                            </div>
                            <div className="flex flex-col items-center gap-y-4">
                                <svg width="64" height="64" viewBox="0 0 82 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_116_17)">
                                        <path d="M38.2653 0.865387C38.0903 0.881903 37.5335 0.939706 37.0324 0.980994C25.4745 2.06274 14.6483 8.53673 7.79153 18.4872C3.97335 24.0198 1.53131 30.2956 0.608584 36.943C0.282448 39.2634 0.242676 39.9487 0.242676 43.0949C0.242676 46.2411 0.282448 46.9264 0.608584 49.2468C2.81994 65.1097 13.6938 78.4376 28.4415 83.3756C31.0824 84.2592 33.8665 84.862 37.0324 85.2253C38.2653 85.3657 43.5949 85.3657 44.8278 85.2253C50.2926 84.5978 54.9221 83.194 59.488 80.7745C60.188 80.4029 60.3233 80.3038 60.2278 80.2212C60.1642 80.1717 57.1812 76.0181 53.6017 70.9974L47.0949 61.8728L38.9415 49.3459C34.4551 42.4591 30.7642 36.8274 30.7324 36.8274C30.7006 36.8191 30.6688 42.3848 30.6529 49.1808C30.629 61.08 30.621 61.559 30.4779 61.8397C30.271 62.2444 30.1119 62.4095 29.7779 62.5912C29.5233 62.7233 29.3006 62.7481 28.0995 62.7481H26.7233L26.3574 62.5086C26.1188 62.3517 25.9438 62.1453 25.8245 61.9058L25.6574 61.5342L25.6733 44.9776L25.6972 28.4128L25.9438 28.0908C26.071 27.9174 26.3415 27.6944 26.5324 27.5871C26.8585 27.4219 26.9858 27.4054 28.362 27.4054C29.9847 27.4054 30.2551 27.4715 30.6767 27.9504C30.796 28.0825 35.2108 34.9859 40.4926 43.3013C45.7744 51.6168 52.9971 62.971 56.5449 68.5449L62.988 78.677L63.3142 78.4541C66.2017 76.5053 69.2562 73.7307 71.6744 70.8405C76.821 64.7051 80.138 57.2237 81.2516 49.2468C81.5778 46.9264 81.6176 46.2411 81.6176 43.0949C81.6176 39.9487 81.5778 39.2634 81.2516 36.943C79.0403 21.0801 68.1664 7.75225 53.4187 2.81419C50.8176 1.93888 48.0494 1.33607 44.9472 0.972737C44.1835 0.89016 38.9256 0.799326 38.2653 0.865387ZM54.9221 26.4145C55.304 26.6127 55.6142 26.9925 55.7255 27.3889C55.7892 27.6036 55.8051 32.1948 55.7892 42.5416L55.7653 57.3889L53.2437 53.3757L50.7142 49.3625V38.5697C50.7142 31.592 50.746 27.6697 50.7937 27.4797C50.921 27.0173 51.1994 26.654 51.5812 26.4393C51.9074 26.2659 52.0267 26.2493 53.2756 26.2493C54.4528 26.2493 54.6596 26.2659 54.9221 26.4145Z" fill="white"/>
                                        <path d="M62.5901 78.8585C62.3117 79.0401 62.2242 79.164 62.4708 79.0236C62.6458 78.9163 62.9322 78.6933 62.8844 78.6851C62.8606 78.6851 62.7254 78.7676 62.5901 78.8585ZM62.0413 79.2301C61.8981 79.3457 61.8981 79.3539 62.0731 79.2631C62.1685 79.2135 62.2481 79.1557 62.2481 79.1392C62.2481 79.0732 62.2083 79.0897 62.0413 79.2301ZM61.6435 79.4778C61.5004 79.5934 61.5004 79.6017 61.6754 79.5108C61.7708 79.4613 61.8504 79.4035 61.8504 79.387C61.8504 79.3209 61.8106 79.3374 61.6435 79.4778ZM61.2458 79.7255C61.1026 79.8411 61.1026 79.8494 61.2776 79.7586C61.3731 79.709 61.4526 79.6512 61.4526 79.6347C61.4526 79.5686 61.4129 79.5851 61.2458 79.7255ZM60.6413 80.0558C60.339 80.221 60.3549 80.287 60.6572 80.1301C60.7924 80.0558 60.8958 79.9815 60.8958 79.965C60.8958 79.9072 60.8879 79.9154 60.6413 80.0558Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_116_17">
                                            <rect width="81.4624" height="84.5664" fill="white" transform="translate(0.19873 0.799072)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>NEXT</p>
                            </div>
                            <div className="flex flex-col items-center gap-y-4">
                                <img src={vite_img} alt="logo html" width={64} height={64} />
                                <p>VITE</p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-y-4">
                                <svg width="64" height="64" viewBox="0 0 93 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.24365 6.51575V90.0618H86.7232V6.51575H6.24365ZM49.3577 71.4132C49.3577 79.5459 44.7301 83.5106 38.0313 83.5106C31.9809 83.5106 28.4689 80.2582 26.6869 76.3327L32.845 72.4631C34.0324 74.6506 34.9342 76.5005 37.5265 76.5005C39.6822 76.5005 41.4534 75.4916 41.4534 71.5661V45.305H49.3577V71.4132ZM67.2051 83.3241C60.1829 83.3241 55.6452 80.0344 53.4302 75.4916L59.5973 71.7861C61.214 74.535 63.3248 76.3663 67.0524 76.3663C70.1854 76.3663 72.0051 74.9266 72.0051 72.6831C72.0051 69.9921 70.1315 69.0392 66.6734 67.4615L64.7835 66.6186C59.326 64.2092 55.708 61.1806 55.708 54.786C55.708 48.8986 60.0284 44.5982 66.7811 44.5982C71.5902 44.5982 75.0447 46.1498 77.5327 50.6926L71.6333 54.6293C70.3363 52.2181 68.9386 51.2726 66.7722 51.2726C64.5572 51.2726 63.1524 52.7309 63.1524 54.6293C63.1524 56.9847 64.5572 57.9376 67.7979 59.396L69.6878 60.237C76.1171 63.0977 79.7369 66.0181 79.7369 72.575C79.7387 79.6428 74.3908 83.3241 67.2051 83.3241Z" fill="white"/>
                                </svg>
                                <p className="text-xs">JAVASCRIPT</p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-y-4">
                                <svg width="64" height="64" viewBox="0 0 83 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_116_38)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.897949 0.11792H82.1439V84.4597H0.897949V0.11792ZM55.0619 33.8546C49.0792 33.8546 44.2291 38.8894 44.2291 45.1002C44.2291 51.311 49.0792 56.3458 55.0619 56.3458H60.4783C63.4698 56.3458 65.8947 58.8631 65.8947 61.9686C65.8947 65.074 63.4698 67.5913 60.4783 67.5913H55.0619C52.0706 67.5913 49.6455 65.074 49.6455 61.9686H44.2291C44.2291 68.1795 49.0792 73.2141 55.0619 73.2141H60.4783C66.4613 73.2141 71.3111 68.1795 71.3111 61.9686C71.3111 55.7578 66.4613 50.723 60.4783 50.723H55.0619C52.0706 50.723 49.6455 48.2056 49.6455 45.1002C49.6455 41.9948 52.0706 39.4774 55.0619 39.4774H61.3813C63.8739 39.4774 65.8947 41.5753 65.8947 44.1631V45.1002H71.3111V44.1631C71.3111 38.4699 66.8654 33.8546 61.3813 33.8546H55.0619ZM17.1471 33.8546H44.2291V39.4774H33.3963V73.2141H27.9799V39.4774H17.1471V33.8546Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_116_38">
                                            <rect width="81.246" height="84.3418" fill="white" transform="translate(0.897949 0.11792)"/>
                                        </clipPath>
                                    </defs>
                                </svg>                                
                                <p className="text-xs">TYPESCRIPT</p>
                            </div>
                            <div className="flex flex-col items-center gap-y-4">
                                <svg width="64" height="64" viewBox="0 0 73 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M69.3242 40.4566C69.3208 38.2398 68.573 36.0935 67.2095 34.3872C65.846 32.681 63.9522 31.5217 61.8541 31.1087L72.012 0.00769043H23.9977L34.1727 31.1703C32.3955 31.5812 30.7765 32.5323 29.5223 33.9024C28.2681 35.2725 27.4355 36.9994 27.1307 38.8628C26.8259 40.7262 27.0628 42.6416 27.8111 44.3647C28.5594 46.0877 29.7852 47.5403 31.3322 48.537C30.0542 50.5085 28.5677 52.3252 26.9004 53.9533C24.3195 56.5158 21.2871 58.538 17.9691 59.9095C16.4116 58.9705 15.2311 57.4817 14.6428 55.7146C14.0544 53.9475 14.0974 52.0197 14.764 50.2828L14.8771 50.0099L15.0862 49.4965C16.9691 48.8184 18.5879 47.5219 19.6975 45.8033C20.807 44.0847 21.347 42.0376 21.2355 39.9719C21.1241 37.9062 20.3673 35.9345 19.0798 34.3553C17.7923 32.776 16.0442 31.6753 14.1002 31.2197C12.1561 30.7641 10.122 30.9785 8.30584 31.8304C6.48966 32.6823 4.99032 34.1253 4.03484 35.9409C3.07936 37.7565 2.71976 39.8459 3.01051 41.8927C3.30126 43.9395 4.2265 45.8322 5.64616 47.2842C5.34092 47.962 5.01871 48.6485 4.68802 49.3556C2.8563 52.8538 1.52343 56.6094 0.731115 60.5051C-0.583145 68.7204 1.53663 75.3015 6.69757 79.0131C9.47201 81.0727 12.8003 82.1741 16.2111 82.1614C22.2369 82.1614 28.3334 79.019 34.2998 75.9441C38.4684 73.5909 42.8665 71.7054 47.4198 70.3195C49.0995 69.9195 50.7975 69.6072 52.5073 69.3835C56.1282 69.0833 59.6591 68.0591 62.9055 66.3673C64.7371 65.2817 66.3162 63.7911 67.531 62.0012C68.7457 60.2113 69.5663 58.1659 69.9347 56.0101C70.536 52.348 69.8435 48.5836 67.9845 45.4093C68.864 43.9188 69.3259 42.2046 69.3242 40.4566ZM65.7262 40.4566C65.7262 41.5998 65.3996 42.7174 64.7878 43.6679C64.176 44.6184 63.3064 45.3593 62.289 45.7968C61.2716 46.2342 60.1521 46.3487 59.072 46.1257C57.9919 45.9026 56.9998 45.3521 56.2211 44.5438C55.4424 43.7354 54.9121 42.7055 54.6973 41.5843C54.4825 40.463 54.5927 39.3009 55.0142 38.2447C55.4356 37.1885 56.1492 36.2858 57.0649 35.6507C57.9805 35.0155 59.057 34.6765 60.1583 34.6765C61.6343 34.6789 63.0492 35.2886 64.0929 36.3721C65.1366 37.4555 65.724 38.9244 65.7262 40.4566ZM66.9896 3.74275L58.0187 31.2055C57.6347 31.3027 57.2571 31.4252 56.8882 31.5723L48.0275 12.7943L39.1386 31.4608C38.7514 31.3223 38.3558 31.2105 37.9543 31.1263L29.0145 3.74275H66.9896ZM36.1624 34.6765C37.2637 34.6765 38.3402 35.0155 39.2558 35.6507C40.1714 36.2858 40.8851 37.1885 41.3065 38.2447C41.728 39.3009 41.8382 40.463 41.6234 41.5843C41.4085 42.7055 40.8782 43.7354 40.0995 44.5438C39.3209 45.3521 38.3288 45.9026 37.2487 46.1257C36.1686 46.3487 35.0491 46.2342 34.0317 45.7968C33.0143 45.3593 32.1447 44.6184 31.5329 43.6679C30.921 42.7174 30.5945 41.5998 30.5945 40.4566C30.596 38.9241 31.1831 37.4548 32.2269 36.3712C33.2708 35.2876 34.6862 34.6781 36.1624 34.6765ZM12.0733 34.7323C13.1745 34.7323 14.2511 35.0713 15.1667 35.7064C16.0823 36.3415 16.796 37.2443 17.2174 38.3004C17.6388 39.3566 17.7491 40.5188 17.5343 41.64C17.3194 42.7613 16.7891 43.7912 16.0104 44.5995C15.2318 45.4079 14.2396 45.9584 13.1596 46.1814C12.0795 46.4044 10.96 46.29 9.94256 45.8525C8.92515 45.415 8.05556 44.6742 7.44375 43.7236C6.83193 42.7731 6.50538 41.6556 6.50538 40.5124C6.50687 38.9804 7.09359 37.5115 8.13684 36.428C9.1801 35.3444 10.5976 34.7346 12.0733 34.7323ZM66.3876 55.3705C66.1086 56.9879 65.4902 58.5219 64.5763 59.8636C63.6624 61.2052 62.4754 62.3218 61.0994 63.134C58.2457 64.575 55.1547 65.4412 51.9901 65.6866C50.2038 65.9536 48.3582 66.2294 46.5521 66.693C41.7445 68.1387 37.1012 70.1189 32.703 72.5993C23.7603 77.2087 16.0274 81.1902 8.75799 75.9529C3.42464 72.1151 3.67053 65.0147 4.29233 61.1242C5.02298 57.5819 6.24443 54.1683 7.91856 50.9899C8.17859 50.4324 8.43296 49.8896 8.68168 49.3498C9.44125 49.6637 10.2378 49.8709 11.0502 49.9659C10.3297 52.6035 10.5301 55.4206 11.6161 57.9197C12.7022 60.4188 14.6039 62.4391 16.9855 63.624L17.678 63.9937L18.41 63.7208C22.4945 62.1917 26.226 59.7932 29.365 56.6791C31.4377 54.6529 33.2587 52.3663 34.786 49.872C36.7393 50.1805 38.7364 49.825 40.4792 48.8586C42.222 47.8922 43.6171 46.3668 44.4563 44.5099C45.2956 42.653 45.5339 40.5641 45.1359 38.5551C44.7378 36.546 43.7246 34.7244 42.2476 33.3621L48.0077 21.2708L53.8272 33.5939C52.1714 35.2504 51.1766 37.493 51.0405 39.876C50.9043 42.259 51.6368 44.608 53.0923 46.4561C54.5479 48.3042 56.62 49.5161 58.8968 49.8511C61.1736 50.1861 63.4885 49.6196 65.3814 48.2642C66.4313 50.4621 66.7826 52.9492 66.3847 55.3675L66.3876 55.3705Z" fill="white"/>
                                </svg>
                                <p>JEST</p>
                            </div>
                            <div className="flex flex-col items-center gap-y-4">
                                <img src={figma_img} alt="logo figma" width={64} height={64} />
                                <p>FIGMA</p>
                            </div>
                            <div className="flex flex-col items-center gap-y-4">
                                <img src={adobe_img} alt="logo adobe" width={64} height={64} />
                                <p>ADOBE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}