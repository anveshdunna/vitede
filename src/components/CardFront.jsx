import { motion } from "framer-motion";

const CardFront = (props) => {
  const { physical } = props;
  const bgMain = physical ? "bg-gray-800" : "bg-gray-50";
  const logo = physical ? "text-black" : "text-gray-300";
  const textWeak = physical ? "text-gray-300" : "text-gray-700";
  const shimmerColor = physical ? "opacity-100" : "opacity-100";

  return (
    <div className="relative z-[2] overflow-clip rounded-2xl outline outline-1 -outline-offset-1 outline-gray-900/20">
      <motion.div
        key={physical}
        className={`flex h-60 w-[22.5rem] flex-col ${bgMain} -z-10`}
      >
        {/* Card label */}
        <div
          className={`absolute right-4 top-4 mt-0.5 text-caption1 font-medium ${textWeak}`}
        >
          {physical ? "PHYSICAL" : "VIRTUAL"}
        </div>

        {/* SIM card */}
        {physical && (
          <div className="absolute left-10 top-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="32"
              fill="none"
            >
              <g clipPath="url(#a)">
                <rect width="48" height="32" fill="#B6BAC3" rx="6" />
                <path
                  stroke="#D3D8DF"
                  d="M32 22.5h16M32 12.5h16M0 22.5h16M0 12.5h16"
                />
                <path
                  stroke="#4D5668"
                  d="M0 11.5h16m0 0 .3 1.35a16 16 0 0 1 .12 6.33L16 21.5m0-10 .54-3.25a16 16 0 0 0-.04-5.5L16.18.99A11.1 11.1 0 0 1 16-1m0 22.5H0m16 0 .4 2a16 16 0 0 1 .05 6l-.27 1.52A11.1 11.1 0 0 0 16 33M48 11.5H32.8a1 1 0 0 0-.97.78l-.13.57a16 16 0 0 0-.12 6.33L32 21.5m0 0h16m-16 0-.4 2a16 16 0 0 0-.05 6l.27 1.52c.12.65.18 1.31.18 1.98M20 2.5h8"
                />
                <path stroke="#D3D8DF" d="M20 3.5h8M20 29.5h8" />
                <path stroke="#4D5668" d="M20 28.5h8" />
              </g>
              <defs>
                <clipPath id="a">
                  <rect width="48" height="32" fill="#fff" rx="6" />
                </clipPath>
              </defs>
            </svg>
          </div>
        )}

        {/* Mastercard logo */}
        <div className="absolute bottom-4 right-4">
          <svg
            width="84"
            height="52"
            viewBox="0 0 84 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M53.3575 5.55883H30.6436V46.4412H53.3575V5.55883Z"
              fill="#FF5F00"
            />
            <path
              d="M32.0859 26C32.0823 22.0627 32.9731 18.1762 34.6909 14.6348C36.4086 11.0933 38.9083 7.98966 42.0006 5.55881C38.1712 2.54399 33.5721 0.669124 28.7291 0.148493C23.8861 -0.372137 18.9945 0.48246 14.6135 2.61465C10.2325 4.74683 6.53876 8.07057 3.95458 12.2059C1.37039 16.3413 0 21.1214 0 26C0 30.8786 1.37039 35.6587 3.95458 39.7941C6.53876 43.9294 10.2325 47.2532 14.6135 49.3854C18.9945 51.5175 23.8861 52.3721 28.7291 51.8515C33.5721 51.3309 38.1712 49.456 42.0006 46.4412C38.9083 44.0103 36.4087 40.9067 34.6909 37.3652C32.9732 33.8237 32.0823 29.9373 32.0859 26Z"
              fill="#EB001B"
            />
            <path
              d="M84 26C84.0002 30.8785 82.6299 35.6586 80.0459 39.794C77.4618 43.9293 73.7683 47.2531 69.3873 49.3853C65.0064 51.5175 60.1149 52.3721 55.272 51.8515C50.429 51.3309 45.83 49.456 42.0006 46.4412C45.0903 44.0079 47.588 40.9037 49.3055 37.3628C51.0229 33.8219 51.9153 29.9366 51.9153 26C51.9153 22.0633 51.0229 18.1781 49.3055 14.6372C47.588 11.0962 45.0903 7.99211 42.0006 5.55881C45.83 2.54399 50.429 0.66911 55.272 0.148486C60.1149 -0.372137 65.0064 0.482498 69.3873 2.6147C73.7683 4.74691 77.4618 8.07065 80.0459 12.206C82.6299 16.3414 84.0002 21.1215 84 26Z"
              fill="#F79E1B"
            />
            <path
              d="M81.5234 42.1111V41.2741H81.8604V41.1036H81.0022V41.2741H81.3393V42.1111H81.5234ZM83.1894 42.1111V41.102H82.9264L82.6239 41.7961L82.3212 41.102H82.058V42.1111H82.2438V41.3499L82.5275 42.0062H82.7201L83.0038 41.3482V42.1111H83.1894Z"
              fill="#F79E1B"
            />
          </svg>
        </div>

        {/* Shimmer 1 */}
        <div
          className={`absolute -left-10 -top-40 h-[40rem] w-10 bg-white ${shimmerColor} shine opacity-50`}
        ></div>

        {/* IL Logo */}
        {/* <div className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="162"
            height="48"
            fill="none"
          >
            <path
              fill="currentColor"
              d="M56.3 48c8.99 0 16.29-7.17 16.29-16s-7.3-16-16.3-16S40 23.17 40 32s7.3 16 16.3 16Zm11.86-23.36.33.22.25.22.1.22v.22l-.23.66-.22.42-.38.64-1.37 1.35-4.42 3.88-6.28 5.25-5.27 2.8-1.95.85h-.75l-4.05-1.81.1-.37 2-1.3.78-.02 3.85.46 3.1-3.07-6.2-2.99-.18-.1.03-.17.15-.2 3.1-1.69.3-.07 2.77.17 4.25.37 1.02-.03 3.85-3.11 1.08-.86 1.8-1.33.67-.42.45-.22h1.1l.22.03ZM80.36 22.45c1.47 0 2.4-.98 2.35-2.2 0-1.28-.88-2.26-2.28-2.26-1.35 0-2.3.98-2.3 2.26 0 1.22.93 2.2 2.23 2.2ZM78.61 25.82v19.85h3.67V25.82h-3.67ZM92.8 20.12v5.7h5.28v2.74H92.8v10.7c0 2.46.7 3.86 2.75 3.86a8.3 8.3 0 0 0 2.13-.25l.17 2.7c-.7.3-1.85.5-3.25.5-1.72 0-3.1-.55-3.97-1.53-1.05-1.06-1.43-2.82-1.43-5.18v-10.8h-3.12v-2.74h3.12v-4.77l3.6-.93ZM103.97 22.45c1.48 0 2.4-.98 2.35-2.2 0-1.28-.9-2.26-2.27-2.26-1.35 0-2.3.98-2.3 2.26 0 1.22.92 2.2 2.22 2.2ZM102.22 25.82v19.85h3.68V25.82h-3.68ZM112 16.54h3.67v29.13H112V16.54ZM123.61 22.45c1.48 0 2.4-.98 2.35-2.2 0-1.28-.9-2.26-2.27-2.26-1.35 0-2.3.98-2.3 2.26 0 1.22.92 2.2 2.22 2.2ZM121.86 25.82v19.85h3.68V25.82h-3.68ZM136.06 20.12v5.7h5.27v2.74h-5.27v10.7c0 2.46.7 3.86 2.75 3.86a8.3 8.3 0 0 0 2.12-.25l.18 2.7c-.7.3-1.85.5-3.25.5-1.72 0-3.1-.55-3.97-1.53-1.05-1.06-1.43-2.82-1.43-5.18v-10.8h-3.12v-2.74h3.12v-4.77l3.6-.93ZM154.2 43.31c-3.7 0-6.87-2-6.94-6.9h14.22c.05-.36.12-.95.12-1.69 0-3.65-1.75-9.35-8.35-9.35-5.9 0-9.5 4.72-9.5 10.7 0 6 3.73 10.02 9.95 10.02 3.23 0 5.43-.67 6.73-1.23l-.63-2.58a13.27 13.27 0 0 1-5.6 1.03Zm-1.25-15.36c4.15 0 5.15 3.56 5.1 5.87h-10.74c.3-2.5 1.92-5.87 5.64-5.87Z"
            />
          </svg>
        </div> */}

        {/* <div className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="162"
            height="48"
            fill="none"
          >
            <defs>
              <motion.linearGradient
                id="myGradient"
                gradientTransform="rotate(3)"
                transition={{ duration: 2, delay: 1 }}
                initial={{ x1: "-100%", x2: "0%" }}
                animate={{ x1: "230%", x2: "330%" }}
              >
                <stop offset="0%" stopColor="black" />
                <stop offset="20%" stopColor="black" />
                <stop offset="20%" stopColor="white" />
                <stop offset="80%" stopColor="white" />
                <stop offset="80%" stopColor="black" />
                <stop offset="100%" stopColor="black" />
              </motion.linearGradient>
            </defs>
            <path
              fill="url(#myGradient)"
              d="M56.3 48c8.99 0 16.29-7.17 16.29-16s-7.3-16-16.3-16S40 23.17 40 32s7.3 16 16.3 16Zm11.86-23.36.33.22.25.22.1.22v.22l-.23.66-.22.42-.38.64-1.37 1.35-4.42 3.88-6.28 5.25-5.27 2.8-1.95.85h-.75l-4.05-1.81.1-.37 2-1.3.78-.02 3.85.46 3.1-3.07-6.2-2.99-.18-.1.03-.17.15-.2 3.1-1.69.3-.07 2.77.17 4.25.37 1.02-.03 3.85-3.11 1.08-.86 1.8-1.33.67-.42.45-.22h1.1l.22.03ZM80.36 22.45c1.47 0 2.4-.98 2.35-2.2 0-1.28-.88-2.26-2.28-2.26-1.35 0-2.3.98-2.3 2.26 0 1.22.93 2.2 2.23 2.2ZM78.61 25.82v19.85h3.67V25.82h-3.67ZM92.8 20.12v5.7h5.28v2.74H92.8v10.7c0 2.46.7 3.86 2.75 3.86a8.3 8.3 0 0 0 2.13-.25l.17 2.7c-.7.3-1.85.5-3.25.5-1.72 0-3.1-.55-3.97-1.53-1.05-1.06-1.43-2.82-1.43-5.18v-10.8h-3.12v-2.74h3.12v-4.77l3.6-.93ZM103.97 22.45c1.48 0 2.4-.98 2.35-2.2 0-1.28-.9-2.26-2.27-2.26-1.35 0-2.3.98-2.3 2.26 0 1.22.92 2.2 2.22 2.2ZM102.22 25.82v19.85h3.68V25.82h-3.68ZM112 16.54h3.67v29.13H112V16.54ZM123.61 22.45c1.48 0 2.4-.98 2.35-2.2 0-1.28-.9-2.26-2.27-2.26-1.35 0-2.3.98-2.3 2.26 0 1.22.92 2.2 2.22 2.2ZM121.86 25.82v19.85h3.68V25.82h-3.68ZM136.06 20.12v5.7h5.27v2.74h-5.27v10.7c0 2.46.7 3.86 2.75 3.86a8.3 8.3 0 0 0 2.12-.25l.18 2.7c-.7.3-1.85.5-3.25.5-1.72 0-3.1-.55-3.97-1.53-1.05-1.06-1.43-2.82-1.43-5.18v-10.8h-3.12v-2.74h3.12v-4.77l3.6-.93ZM154.2 43.31c-3.7 0-6.87-2-6.94-6.9h14.22c.05-.36.12-.95.12-1.69 0-3.65-1.75-9.35-8.35-9.35-5.9 0-9.5 4.72-9.5 10.7 0 6 3.73 10.02 9.95 10.02 3.23 0 5.43-.67 6.73-1.23l-.63-2.58a13.27 13.27 0 0 1-5.6 1.03Zm-1.25-15.36c4.15 0 5.15 3.56 5.1 5.87h-10.74c.3-2.5 1.92-5.87 5.64-5.87Z"
            />
          </svg>
        </div> */}
      </motion.div>
    </div>
  );
};

export default CardFront;
