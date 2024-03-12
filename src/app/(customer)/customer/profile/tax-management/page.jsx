import React from "react";
import image from "../../../../../images/8771ba801f762cd6cf72e84603df4b17.jpg";
import Image from "next/image";

const TaxManagement = () => {
  return (
    <div className="pl-10">
      <div className="w-[750px] h-[820px] border border-[#97979A] rounded-xl mt-7">
        <h1 className="text-[24px] font-bold text-center pt-5">
        Tax Statment
        </h1>
        <div className="py-7 ">
          <div className="relative">
            <Image
              src={image}
              alt="image"
              className="w-[650px] h-[250px] mx-auto"
            />
            <svg
              width="205"
              height="40"
              viewBox="0 0 205 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-14 top-2 z-50"
            >
              <path
                d="M0 0H185C196.046 0 205 8.95431 205 20V40H20C8.95431 40 0 31.0457 0 20V0Z"
                fill="#FF0000"
                fill-opacity="0.72"
              />
              <path
                d="M11.6833 27V15.08H19.6353V17H13.8593V20.296H18.9153V22.216H13.8593V27H11.6833ZM24.9508 27.192C24.0974 27.192 23.3188 26.9947 22.6148 26.6C21.9214 26.2053 21.3668 25.6667 20.9508 24.984C20.5454 24.3013 20.3428 23.5227 20.3428 22.648C20.3428 21.7733 20.5454 20.9947 20.9508 20.312C21.3668 19.6293 21.9214 19.0907 22.6148 18.696C23.3081 18.3013 24.0868 18.104 24.9508 18.104C25.8041 18.104 26.5774 18.3013 27.2708 18.696C27.9641 19.0907 28.5134 19.6293 28.9188 20.312C29.3348 20.984 29.5428 21.7627 29.5428 22.648C29.5428 23.5227 29.3348 24.3013 28.9188 24.984C28.5028 25.6667 27.9481 26.2053 27.2548 26.6C26.5614 26.9947 25.7934 27.192 24.9508 27.192ZM24.9508 25.272C25.4201 25.272 25.8308 25.16 26.1828 24.936C26.5454 24.712 26.8281 24.4027 27.0308 24.008C27.2441 23.6027 27.3508 23.1493 27.3508 22.648C27.3508 22.136 27.2441 21.688 27.0308 21.304C26.8281 20.9093 26.5454 20.6 26.1828 20.376C25.8308 20.1413 25.4201 20.024 24.9508 20.024C24.4708 20.024 24.0494 20.1413 23.6868 20.376C23.3241 20.6 23.0361 20.9093 22.8228 21.304C22.6201 21.688 22.5188 22.136 22.5188 22.648C22.5188 23.1493 22.6201 23.6027 22.8228 24.008C23.0361 24.4027 23.3241 24.712 23.6868 24.936C24.0494 25.16 24.4708 25.272 24.9508 25.272ZM31.1323 27V18.296H33.1003V20.232L32.9403 19.944C33.1429 19.2933 33.4576 18.84 33.8843 18.584C34.3216 18.328 34.8443 18.2 35.4523 18.2H35.9643V20.056H35.2123C34.6149 20.056 34.1349 20.2427 33.7723 20.616C33.4096 20.9787 33.2283 21.4907 33.2283 22.152V27H31.1323ZM37.1166 27V18.296H39.0846V20.312L38.8606 19.976C39.0206 19.3467 39.3406 18.8773 39.8206 18.568C40.3006 18.2587 40.866 18.104 41.5166 18.104C42.2313 18.104 42.8606 18.2907 43.4046 18.664C43.9486 19.0373 44.3006 19.528 44.4606 20.136L43.8686 20.184C44.1353 19.4907 44.5353 18.9733 45.0686 18.632C45.602 18.28 46.2153 18.104 46.9086 18.104C47.5273 18.104 48.0766 18.2427 48.5566 18.52C49.0473 18.7973 49.4313 19.1867 49.7086 19.688C49.986 20.1787 50.1246 20.7493 50.1246 21.4V27H48.0286V21.896C48.0286 21.512 47.9593 21.1813 47.8206 20.904C47.682 20.6267 47.49 20.4133 47.2446 20.264C46.9993 20.104 46.7006 20.024 46.3486 20.024C46.018 20.024 45.7246 20.104 45.4686 20.264C45.2126 20.4133 45.0153 20.6267 44.8766 20.904C44.738 21.1813 44.6686 21.512 44.6686 21.896V27H42.5726V21.896C42.5726 21.512 42.5033 21.1813 42.3646 20.904C42.226 20.6267 42.0286 20.4133 41.7726 20.264C41.5273 20.104 41.234 20.024 40.8926 20.024C40.562 20.024 40.2686 20.104 40.0126 20.264C39.7566 20.4133 39.5593 20.6267 39.4206 20.904C39.282 21.1813 39.2126 21.512 39.2126 21.896V27H37.1166ZM54.5379 27.192C53.9299 27.192 53.4019 27.0907 52.9539 26.888C52.5059 26.6853 52.1592 26.3973 51.9139 26.024C51.6685 25.64 51.5459 25.1973 51.5459 24.696C51.5459 24.216 51.6525 23.7893 51.8659 23.416C52.0792 23.032 52.4099 22.712 52.8579 22.456C53.3059 22.2 53.8712 22.0187 54.5539 21.912L57.4019 21.448V23.048L54.9539 23.464C54.5379 23.5387 54.2285 23.672 54.0259 23.864C53.8232 24.056 53.7219 24.3067 53.7219 24.616C53.7219 24.9147 53.8339 25.1547 54.0579 25.336C54.2925 25.5067 54.5805 25.592 54.9219 25.592C55.3592 25.592 55.7432 25.5013 56.0739 25.32C56.4152 25.128 56.6765 24.8667 56.8579 24.536C57.0499 24.2053 57.1459 23.8427 57.1459 23.448V21.208C57.1459 20.8347 56.9965 20.5253 56.6979 20.28C56.4099 20.024 56.0259 19.896 55.5459 19.896C55.0979 19.896 54.6979 20.0187 54.3459 20.264C54.0045 20.4987 53.7539 20.8133 53.5939 21.208L51.8819 20.376C52.0525 19.9173 52.3192 19.5227 52.6819 19.192C53.0552 18.8507 53.4925 18.584 53.9939 18.392C54.4952 18.2 55.0392 18.104 55.6259 18.104C56.3405 18.104 56.9699 18.2373 57.5139 18.504C58.0579 18.76 58.4792 19.1227 58.7779 19.592C59.0872 20.0507 59.2419 20.5893 59.2419 21.208V27H57.2579V25.512L57.7059 25.48C57.4819 25.8533 57.2152 26.168 56.9059 26.424C56.5965 26.6693 56.2445 26.8613 55.8499 27C55.4552 27.128 55.0179 27.192 54.5379 27.192ZM64.9909 27.096C64.0095 27.096 63.2469 26.8293 62.7029 26.296C62.1695 25.752 61.9029 24.9893 61.9029 24.008V20.168H60.3989V18.296H60.5589C60.9855 18.296 61.3162 18.184 61.5509 17.96C61.7855 17.736 61.9029 17.4107 61.9029 16.984V16.312H63.9989V18.296H65.9989V20.168H63.9989V23.896C63.9989 24.184 64.0469 24.4293 64.1429 24.632C64.2495 24.8347 64.4095 24.9893 64.6229 25.096C64.8469 25.2027 65.1295 25.256 65.4709 25.256C65.5455 25.256 65.6309 25.2507 65.7269 25.24C65.8335 25.2293 65.9349 25.2187 66.0309 25.208V27C65.8815 27.0213 65.7109 27.0427 65.5189 27.064C65.3269 27.0853 65.1509 27.096 64.9909 27.096ZM70.652 27V15.08H74.54C75.7987 15.08 76.892 15.336 77.82 15.848C78.7587 16.3493 79.484 17.048 79.996 17.944C80.508 18.8293 80.764 19.8587 80.764 21.032C80.764 22.1947 80.508 23.2293 79.996 24.136C79.484 25.032 78.7587 25.736 77.82 26.248C76.892 26.7493 75.7987 27 74.54 27H70.652ZM72.828 25.08H74.588C75.3987 25.08 76.0973 24.9147 76.684 24.584C77.2813 24.2427 77.7453 23.7733 78.076 23.176C78.4067 22.568 78.572 21.8533 78.572 21.032C78.572 20.2 78.4067 19.4853 78.076 18.888C77.7453 18.2907 77.2813 17.8267 76.684 17.496C76.0973 17.1653 75.3987 17 74.588 17H72.828V25.08ZM86.5758 27.192C85.7224 27.192 84.9438 26.9947 84.2398 26.6C83.5464 26.2053 82.9918 25.6667 82.5758 24.984C82.1704 24.3013 81.9678 23.5227 81.9678 22.648C81.9678 21.7733 82.1704 20.9947 82.5758 20.312C82.9918 19.6293 83.5464 19.0907 84.2398 18.696C84.9331 18.3013 85.7118 18.104 86.5758 18.104C87.4291 18.104 88.2024 18.3013 88.8958 18.696C89.5891 19.0907 90.1384 19.6293 90.5438 20.312C90.9598 20.984 91.1678 21.7627 91.1678 22.648C91.1678 23.5227 90.9598 24.3013 90.5438 24.984C90.1278 25.6667 89.5731 26.2053 88.8798 26.6C88.1864 26.9947 87.4184 27.192 86.5758 27.192ZM86.5758 25.272C87.0451 25.272 87.4558 25.16 87.8078 24.936C88.1704 24.712 88.4531 24.4027 88.6558 24.008C88.8691 23.6027 88.9758 23.1493 88.9758 22.648C88.9758 22.136 88.8691 21.688 88.6558 21.304C88.4531 20.9093 88.1704 20.6 87.8078 20.376C87.4558 20.1413 87.0451 20.024 86.5758 20.024C86.0958 20.024 85.6744 20.1413 85.3118 20.376C84.9491 20.6 84.6611 20.9093 84.4478 21.304C84.2451 21.688 84.1438 22.136 84.1438 22.648C84.1438 23.1493 84.2451 23.6027 84.4478 24.008C84.6611 24.4027 84.9491 24.712 85.3118 24.936C85.6744 25.16 86.0958 25.272 86.5758 25.272ZM96.9493 27.192C96.0853 27.192 95.3066 26.9947 94.6133 26.6C93.9306 26.1947 93.3919 25.6507 92.9973 24.968C92.6026 24.2747 92.4053 23.496 92.4053 22.632C92.4053 21.768 92.6026 20.9947 92.9973 20.312C93.3919 19.6293 93.9306 19.0907 94.6133 18.696C95.3066 18.3013 96.0853 18.104 96.9493 18.104C97.5679 18.104 98.1439 18.216 98.6773 18.44C99.2106 18.6533 99.6693 18.952 100.053 19.336C100.448 19.7093 100.731 20.1573 100.901 20.68L99.0613 21.48C98.9013 21.0427 98.6293 20.6907 98.2453 20.424C97.8719 20.1573 97.4399 20.024 96.9493 20.024C96.4906 20.024 96.0799 20.136 95.7173 20.36C95.3653 20.584 95.0879 20.8933 94.8853 21.288C94.6826 21.6827 94.5813 22.136 94.5813 22.648C94.5813 23.16 94.6826 23.6133 94.8853 24.008C95.0879 24.4027 95.3653 24.712 95.7173 24.936C96.0799 25.16 96.4906 25.272 96.9493 25.272C97.4506 25.272 97.8879 25.1387 98.2613 24.872C98.6346 24.6053 98.9013 24.248 99.0613 23.8L100.901 24.632C100.731 25.1227 100.453 25.5653 100.069 25.96C99.6853 26.344 99.2266 26.648 98.6933 26.872C98.1599 27.0853 97.5786 27.192 96.9493 27.192ZM105.596 27.192C104.924 27.192 104.337 27.0427 103.836 26.744C103.345 26.4453 102.966 26.0293 102.7 25.496C102.444 24.9627 102.316 24.3387 102.316 23.624V18.296H104.412V23.448C104.412 23.8107 104.481 24.1307 104.62 24.408C104.769 24.6747 104.977 24.888 105.244 25.048C105.521 25.1973 105.83 25.272 106.172 25.272C106.513 25.272 106.817 25.1973 107.084 25.048C107.35 24.888 107.558 24.6693 107.708 24.392C107.857 24.1147 107.932 23.784 107.932 23.4V18.296H110.028V27H108.044V25.288L108.22 25.592C108.017 26.1253 107.681 26.5253 107.212 26.792C106.753 27.0587 106.214 27.192 105.596 27.192ZM111.976 27V18.296H113.944V20.312L113.72 19.976C113.88 19.3467 114.2 18.8773 114.68 18.568C115.16 18.2587 115.725 18.104 116.376 18.104C117.091 18.104 117.72 18.2907 118.264 18.664C118.808 19.0373 119.16 19.528 119.32 20.136L118.728 20.184C118.995 19.4907 119.395 18.9733 119.928 18.632C120.461 18.28 121.075 18.104 121.768 18.104C122.387 18.104 122.936 18.2427 123.416 18.52C123.907 18.7973 124.291 19.1867 124.568 19.688C124.845 20.1787 124.984 20.7493 124.984 21.4V27H122.888V21.896C122.888 21.512 122.819 21.1813 122.68 20.904C122.541 20.6267 122.349 20.4133 122.104 20.264C121.859 20.104 121.56 20.024 121.208 20.024C120.877 20.024 120.584 20.104 120.328 20.264C120.072 20.4133 119.875 20.6267 119.736 20.904C119.597 21.1813 119.528 21.512 119.528 21.896V27H117.432V21.896C117.432 21.512 117.363 21.1813 117.224 20.904C117.085 20.6267 116.888 20.4133 116.632 20.264C116.387 20.104 116.093 20.024 115.752 20.024C115.421 20.024 115.128 20.104 114.872 20.264C114.616 20.4133 114.419 20.6267 114.28 20.904C114.141 21.1813 114.072 21.512 114.072 21.896V27H111.976ZM130.885 27.192C129.989 27.192 129.205 26.9893 128.533 26.584C127.861 26.1787 127.339 25.6293 126.965 24.936C126.592 24.2427 126.405 23.4747 126.405 22.632C126.405 21.7573 126.592 20.984 126.965 20.312C127.349 19.6293 127.867 19.0907 128.517 18.696C129.179 18.3013 129.915 18.104 130.725 18.104C131.408 18.104 132.005 18.216 132.517 18.44C133.04 18.664 133.483 18.9733 133.845 19.368C134.208 19.7627 134.485 20.216 134.677 20.728C134.869 21.2293 134.965 21.7733 134.965 22.36C134.965 22.5093 134.955 22.664 134.933 22.824C134.923 22.984 134.896 23.1227 134.853 23.24H128.133V21.64H133.669L132.677 22.392C132.773 21.9013 132.747 21.464 132.597 21.08C132.459 20.696 132.224 20.392 131.893 20.168C131.573 19.944 131.184 19.832 130.725 19.832C130.288 19.832 129.899 19.944 129.557 20.168C129.216 20.3813 128.955 20.7013 128.773 21.128C128.603 21.544 128.539 22.0507 128.581 22.648C128.539 23.1813 128.608 23.656 128.789 24.072C128.981 24.4773 129.259 24.792 129.621 25.016C129.995 25.24 130.421 25.352 130.901 25.352C131.381 25.352 131.787 25.2507 132.117 25.048C132.459 24.8453 132.725 24.5733 132.917 24.232L134.613 25.064C134.443 25.48 134.176 25.848 133.813 26.168C133.451 26.488 133.019 26.7387 132.517 26.92C132.027 27.1013 131.483 27.192 130.885 27.192ZM136.554 27V18.296H138.522V20.008L138.362 19.704C138.565 19.1813 138.895 18.7867 139.354 18.52C139.823 18.2427 140.367 18.104 140.986 18.104C141.626 18.104 142.191 18.2427 142.682 18.52C143.183 18.7973 143.573 19.1867 143.85 19.688C144.127 20.1787 144.266 20.7493 144.266 21.4V27H142.17V21.896C142.17 21.512 142.095 21.1813 141.946 20.904C141.797 20.6267 141.589 20.4133 141.322 20.264C141.066 20.104 140.762 20.024 140.41 20.024C140.069 20.024 139.765 20.104 139.498 20.264C139.231 20.4133 139.023 20.6267 138.874 20.904C138.725 21.1813 138.65 21.512 138.65 21.896V27H136.554ZM150.007 27.096C149.025 27.096 148.263 26.8293 147.719 26.296C147.185 25.752 146.919 24.9893 146.919 24.008V20.168H145.415V18.296H145.575C146.001 18.296 146.332 18.184 146.567 17.96C146.801 17.736 146.919 17.4107 146.919 16.984V16.312H149.015V18.296H151.015V20.168H149.015V23.896C149.015 24.184 149.063 24.4293 149.159 24.632C149.265 24.8347 149.425 24.9893 149.639 25.096C149.863 25.2027 150.145 25.256 150.487 25.256C150.561 25.256 150.647 25.2507 150.743 25.24C150.849 25.2293 150.951 25.2187 151.047 25.208V27C150.897 27.0213 150.727 27.0427 150.535 27.064C150.343 27.0853 150.167 27.096 150.007 27.096ZM156.484 27V24.76H158.596V27H156.484ZM156.484 20.536V18.296H158.596V20.536H156.484ZM164.558 27V15.08H169.006C169.817 15.08 170.532 15.2293 171.15 15.528C171.78 15.816 172.27 16.2427 172.622 16.808C172.974 17.3627 173.15 18.04 173.15 18.84C173.15 19.6293 172.969 20.3067 172.606 20.872C172.254 21.4267 171.769 21.8533 171.15 22.152C170.532 22.4507 169.817 22.6 169.006 22.6H166.734V27H164.558ZM166.734 20.68H169.038C169.433 20.68 169.774 20.6053 170.062 20.456C170.35 20.296 170.574 20.0773 170.734 19.8C170.894 19.5227 170.974 19.2027 170.974 18.84C170.974 18.4667 170.894 18.1467 170.734 17.88C170.574 17.6027 170.35 17.3893 170.062 17.24C169.774 17.08 169.433 17 169.038 17H166.734V20.68ZM174.933 27V15.08H178.821C180.08 15.08 181.173 15.336 182.101 15.848C183.04 16.3493 183.765 17.048 184.277 17.944C184.789 18.8293 185.045 19.8587 185.045 21.032C185.045 22.1947 184.789 23.2293 184.277 24.136C183.765 25.032 183.04 25.736 182.101 26.248C181.173 26.7493 180.08 27 178.821 27H174.933ZM177.109 25.08H178.869C179.68 25.08 180.379 24.9147 180.965 24.584C181.563 24.2427 182.027 23.7733 182.357 23.176C182.688 22.568 182.853 21.8533 182.853 21.032C182.853 20.2 182.688 19.4853 182.357 18.888C182.027 18.2907 181.563 17.8267 180.965 17.496C180.379 17.1653 179.68 17 178.869 17H177.109V25.08ZM186.777 27V15.08H194.729V17H188.953V20.296H194.009V22.216H188.953V27H186.777Z"
                fill="white"
              />
            </svg>

            <div className="absolute top-0 left-12  h-full w-[650px] mx-auto bg-black bg-opacity-40"></div>
            <input type="file" name="" id="file" className="hidden" />
            <div className="flex justify-center cursor-pointer">
              <div className="absolute bottom-2  text-white flex gap-x-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" "
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.4697 3.21967C11.7626 2.92678 12.2374 2.92678 12.5303 3.21967L16.4678 7.15717C16.7607 7.45006 16.7607 7.92494 16.4678 8.21783C16.1749 8.51072 15.7001 8.51072 15.4072 8.21783L12 4.81066L8.59283 8.21783C8.29994 8.51072 7.82506 8.51072 7.53217 8.21783C7.23928 7.92494 7.23928 7.45006 7.53217 7.15717L11.4697 3.21967Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V14.25C12.75 14.6642 12.4142 15 12 15C11.5858 15 11.25 14.6642 11.25 14.25V3.75C11.25 3.33579 11.5858 3 12 3Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 13.5C4.16421 13.5 4.5 13.8358 4.5 14.25V19.5H19.5V14.25C19.5 13.8358 19.8358 13.5 20.25 13.5C20.6642 13.5 21 13.8358 21 14.25V19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21H4.5C4.10218 21 3.72065 20.842 3.43934 20.5607C3.15804 20.2794 3 19.8978 3 19.5V14.25C3 13.8358 3.33579 13.5 3.75 13.5Z"
                    fill="white"
                  />
                </svg>

                <label
                  htmlFor="file"
                  className="  text-white text-[16px] font-bold"
                >
                  Upload Tax Statment
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-10 mt-2">
          <h1>
            <b>Nature Document :</b> Complete the information Request in the
            block blow. Complete the information Request in the block blow.{" "}
          </h1>

          <h1 className="my-5">
            <b>Document : </b> Complete the information{" "}
          </h1>

          <h1>
            <b>Visibilitas Document : </b> Complete the information{" "}
          </h1>
        </div>
        <div className="mx-10 mt-2">
          <h1>
            <b>Nature Document :</b> Complete the information Request in the
            block blow. Complete the information Request in the block blow.{" "}
          </h1>

          <h1 className="my-5">
            <b>Document : </b> Complete the information{" "}
          </h1>

          <h1>
            <b>Visibilitas Document : </b> Complete the information{" "}
          </h1>
        </div>
        <div className="flex justify-center mt-10">
          <button className="border-2 border-dashed border-[#FF0000] px-5 py-4 rounded-lg  text-[#FF0000] font-medium flex gap-x-2">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.03217 9.78217C8.32506 9.48928 8.79994 9.48928 9.09283 9.78217L12.5 13.1893L15.9072 9.78217C16.2001 9.48928 16.6749 9.48928 16.9678 9.78217C17.2607 10.0751 17.2607 10.5499 16.9678 10.8428L13.0303 14.7803C12.7374 15.0732 12.2626 15.0732 11.9697 14.7803L8.03217 10.8428C7.73928 10.5499 7.73928 10.0751 8.03217 9.78217Z"
                fill="#FF0000"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5 3C12.9142 3 13.25 3.33579 13.25 3.75V14.25C13.25 14.6642 12.9142 15 12.5 15C12.0858 15 11.75 14.6642 11.75 14.25V3.75C11.75 3.33579 12.0858 3 12.5 3Z"
                fill="#FF0000"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.25 13.5C4.66421 13.5 5 13.8358 5 14.25V19.5H20V14.25C20 13.8358 20.3358 13.5 20.75 13.5C21.1642 13.5 21.5 13.8358 21.5 14.25V19.5C21.5 19.8978 21.342 20.2794 21.0607 20.5607C20.7794 20.842 20.3978 21 20 21H5C4.60218 21 4.22065 20.842 3.93934 20.5607C3.65804 20.2794 3.5 19.8978 3.5 19.5V14.25C3.5 13.8358 3.83579 13.5 4.25 13.5Z"
                fill="#FF0000"
              />
            </svg>
            Download Document
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaxManagement;
