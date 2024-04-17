const DashboardHeader = () => {
    return (
        <div className="bg-white flex justify-between items-center py-4 px-4 shadow-none md:shadow-sm">
            <div>
                <h1 className="font-Inter text-[1.5rem] font-semibold text-gray-900">Transactions</h1>
            </div>
            <div className="flex gap-4">
                 {/* search bar */}
                <div className="hidden md:flex">
                    <div className="relative">
                        <svg className="absolute left-5 top-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_105_579)">
                            <path d="M19.3359 18.2109L14.7344 13.6094C15.875 12.2188 16.5625 10.4375 16.5625 8.49609C16.5625 4.04297 12.9492 0.429688 8.49609 0.429688C4.03906 0.429688 0.429688 4.04297 0.429688 8.49609C0.429688 12.9492 4.03906 16.5625 8.49609 16.5625C10.4375 16.5625 12.2148 15.8789 13.6055 14.7383L18.207 19.3359C18.5195 19.6484 19.0234 19.6484 19.3359 19.3359C19.6484 19.0273 19.6484 18.5195 19.3359 18.2109ZM8.49609 14.957C4.92969 14.957 2.03125 12.0586 2.03125 8.49609C2.03125 4.93359 4.92969 2.03125 8.49609 2.03125C12.0586 2.03125 14.9609 4.93359 14.9609 8.49609C14.9609 12.0586 12.0586 14.957 8.49609 14.957Z" fill="#718EBF"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_105_579">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <input className="pl-14 py-3 rounded-full bg-[#F5F7FA]" type="search" name="search" id="search" placeholder="search for something" />
                </div>
                {/* settings icon */}
                <div className="hidden md:flex">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="25" fill="#F5F7FA"/>
                        <g clipPath="url(#clip0_105_565)">
                        <path d="M25.2845 37H23.7155C22.4465 37 21.414 35.9676 21.414 34.6986V34.1678C20.8745 33.9954 20.3503 33.7778 19.8468 33.5172L19.4706 33.8934C18.5595 34.8056 17.1001 34.7789 16.2155 33.8931L15.1065 32.7842C14.2204 31.899 14.1949 30.44 15.1068 29.5291L15.4827 29.1532C15.2221 28.6496 15.0046 28.1255 14.8322 27.5859H14.3014C13.0325 27.5859 12 26.5535 12 25.2845V23.7155C12 22.4465 13.0325 21.4141 14.3015 21.4141H14.8322C15.0046 20.8745 15.2222 20.3504 15.4828 19.8468L15.1066 19.4707C14.1952 18.5603 14.2203 17.1012 15.1069 16.2156L16.2159 15.1066C17.1026 14.2187 18.5617 14.1965 19.471 15.1069L19.8468 15.4827C20.3504 15.2222 20.8746 15.0046 21.4141 14.8322V14.3014C21.4141 13.0324 22.4465 12 23.7155 12H25.2845C26.5535 12 27.5859 13.0324 27.5859 14.3014V14.8322C28.1254 15.0046 28.6496 15.2222 29.1532 15.4828L29.5293 15.1066C30.4404 14.1944 31.8999 14.2211 32.7845 15.1069L33.8934 16.2158C34.7796 17.101 34.8051 18.56 33.8931 19.4709L33.5172 19.8468C33.7778 20.3504 33.9954 20.8745 34.1678 21.4141H34.6985C35.9675 21.4141 37 22.4465 37 23.7155V25.2845C37 26.5535 35.9675 27.5859 34.6985 27.5859H34.1678C33.9954 28.1255 33.7778 28.6496 33.5172 29.1532L33.8934 29.5293C34.8048 30.4398 34.7797 31.8989 33.8931 32.7845L32.7841 33.8935C31.8974 34.7813 30.4383 34.8035 29.529 33.8932L29.1532 33.5173C28.6496 33.7779 28.1254 33.9955 27.5859 34.1679V34.6987C27.5859 35.9676 26.5535 37 25.2845 37ZM20.0917 31.979C20.7912 32.3927 21.5441 32.7053 22.3295 32.908C22.6529 32.9914 22.8789 33.2831 22.8789 33.6171V34.6986C22.8789 35.1599 23.2542 35.5352 23.7155 35.5352H25.2845C25.7458 35.5352 26.1211 35.1599 26.1211 34.6986V33.6171C26.1211 33.2831 26.3471 32.9914 26.6706 32.908C27.4559 32.7053 28.2088 32.3927 28.9084 31.979C29.1962 31.8088 29.5627 31.8551 29.7992 32.0916L30.5652 32.8576C30.8955 33.1883 31.4258 33.1806 31.748 32.858L32.8577 31.7483C33.1791 31.4273 33.1898 30.8968 32.858 30.5654L32.0917 29.7991C31.8552 29.5626 31.8089 29.1961 31.9791 28.9083C32.3928 28.2088 32.7053 27.4559 32.908 26.6705C32.9915 26.3471 33.2832 26.1211 33.6172 26.1211H34.6986C35.1599 26.1211 35.5352 25.7458 35.5352 25.2846V23.7155C35.5352 23.2542 35.1599 22.879 34.6986 22.879H33.6172C33.2832 22.879 32.9915 22.653 32.908 22.3296C32.7053 21.5442 32.3928 20.7913 31.9791 20.0917C31.8089 19.804 31.8552 19.4375 32.0917 19.201L32.8577 18.435C33.1889 18.1042 33.1802 17.5739 32.858 17.2521L31.7484 16.1425C31.4268 15.8204 30.8963 15.811 30.5655 16.1422L29.7992 16.9085C29.5628 17.145 29.1962 17.1913 28.9084 17.0211C28.2089 16.6074 27.456 16.2948 26.6706 16.0921C26.3472 16.0087 26.1212 15.717 26.1212 15.383V14.3014C26.1212 13.8401 25.7458 13.4648 25.2846 13.4648H23.7156C23.2543 13.4648 22.879 13.8401 22.879 14.3014V15.3829C22.879 15.7169 22.653 16.0086 22.3295 16.092C21.5442 16.2947 20.7913 16.6073 20.0917 17.021C19.8038 17.1912 19.4374 17.1449 19.2009 16.9084L18.4349 16.1424C18.1046 15.8117 17.5742 15.8194 17.2521 16.142L16.1424 17.2517C15.821 17.5727 15.8103 18.1031 16.1421 18.4346L16.9084 19.2009C17.1449 19.4374 17.1912 19.8039 17.021 20.0917C16.6073 20.7912 16.2948 21.5441 16.0921 22.3295C16.0086 22.6529 15.7169 22.8789 15.3829 22.8789H14.3015C13.8402 22.8789 13.4648 23.2542 13.4648 23.7155V25.2845C13.4648 25.7458 13.8402 26.1211 14.3015 26.1211H15.3829C15.7169 26.1211 16.0085 26.3471 16.092 26.6705C16.2947 27.4559 16.6073 28.2088 17.0209 28.9083C17.1911 29.1961 17.1448 29.5626 16.9084 29.799L16.1423 30.5651C15.8112 30.8959 15.8198 31.4261 16.142 31.7479L17.2517 32.8576C17.5733 33.1796 18.1038 33.1891 18.4345 32.8579L19.2008 32.0915C19.375 31.9173 19.7375 31.7695 20.0917 31.979Z" fill="#718EBF"/>
                        <path d="M24.5 29.9395C21.5006 29.9395 19.0605 27.4993 19.0605 24.5C19.0605 21.5007 21.5006 19.0605 24.5 19.0605C27.4994 19.0605 29.9395 21.5007 29.9395 24.5C29.9395 27.4993 27.4994 29.9395 24.5 29.9395ZM24.5 20.5254C22.3083 20.5254 20.5254 22.3084 20.5254 24.5C20.5254 26.6916 22.3084 28.4746 24.5 28.4746C26.6916 28.4746 28.4746 26.6916 28.4746 24.5C28.4746 22.3084 26.6917 20.5254 24.5 20.5254Z" fill="#718EBF"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_105_565">
                        <rect width="25" height="25" fill="white" transform="translate(12 12)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>

                {/* notification icon */}
                <div className="hidden md:flex">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="25" fill="#F5F7FA"/>
                        <path d="M24.4424 37C22.2894 37 20.5361 35.2479 20.5361 33.0938C20.5361 32.6625 20.8861 32.3125 21.3174 32.3125C21.7486 32.3125 22.0986 32.6625 22.0986 33.0938C22.0986 34.3866 23.1507 35.4375 24.4424 35.4375C25.734 35.4375 26.7861 34.3866 26.7861 33.0938C26.7861 32.6625 27.1361 32.3125 27.5674 32.3125C27.9986 32.3125 28.3486 32.6625 28.3486 33.0938C28.3486 35.2479 26.5956 37 24.4424 37Z" fill="#FE5C73"/>
                        <path d="M33.0357 33.875H15.8482C14.8431 33.875 14.0254 33.0573 14.0254 32.0521C14.0254 31.5187 14.2577 31.0136 14.6628 30.6666C14.689 30.6438 14.717 30.623 14.7462 30.6041C16.2753 29.2697 17.1504 27.35 17.1504 25.3228V22.4166C17.1504 18.3959 20.4223 15.125 24.442 15.125C24.6087 15.125 24.7889 15.1281 24.9556 15.1563C25.3816 15.227 25.6692 15.6303 25.5982 16.0552C25.5275 16.4802 25.117 16.7678 24.6993 16.6968C24.6159 16.6833 24.5244 16.6875 24.442 16.6875C21.2838 16.6875 18.7129 19.2573 18.7129 22.4166V25.3228C18.7129 27.8396 17.6097 30.2209 15.689 31.8551C15.6733 31.8677 15.6598 31.8792 15.643 31.8906C15.615 31.9261 15.5879 31.9802 15.5879 32.0521C15.5879 32.1937 15.7067 32.3125 15.8482 32.3125H33.0357C33.1775 32.3125 33.2963 32.1937 33.2963 32.0521C33.2963 31.9791 33.2692 31.9261 33.24 31.8906C33.2244 31.8792 33.2108 31.8677 33.1952 31.8551C31.2734 30.2198 30.1713 27.8396 30.1713 25.3228V24.1876C30.1713 23.7563 30.5213 23.4063 30.9525 23.4063C31.3838 23.4063 31.7338 23.7563 31.7338 24.1876V25.3228C31.7338 27.3511 32.6098 29.2718 34.1411 30.6073C34.1691 30.626 34.1962 30.6459 34.2212 30.6678C34.6265 31.0136 34.8588 31.5187 34.8588 32.0521C34.8588 33.0573 34.0411 33.875 33.0357 33.875Z" fill="#FE5C73"/>
                        <path d="M31.7338 22.4166C28.8619 22.4166 26.5254 20.0803 26.5254 17.2084C26.5254 14.3365 28.8619 12 31.7338 12C34.6057 12 36.942 14.3365 36.942 17.2084C36.942 20.0803 34.6057 22.4166 31.7338 22.4166ZM31.7338 13.5625C29.7233 13.5625 28.0879 15.1979 28.0879 17.2084C28.0879 19.2187 29.7233 20.8541 31.7338 20.8541C33.7441 20.8541 35.3795 19.2187 35.3795 17.2084C35.3795 15.1979 33.7441 13.5625 31.7338 13.5625Z" fill="#FE5C73"/>
                    </svg>
                </div>

                {/* for user avatar */}
                <div>
                    <img className="w-[90%] rounded-full" src="./src/images/Mask Group.png" alt="user-avatar" />
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader