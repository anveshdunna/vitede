import { useNavigate } from "react-router-dom";
import { useNav } from "../contexts/NavContext";
import { useEffect, useState } from "react";
import TripCard from "../components/TripCard";
import TripSteps from "../components/TripSteps";
import Page from "./Page";
import ILButton from "../components/core/ILButton";
import { Spinner } from "../assets/Anim";

function CreateTrip() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 30000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
          <svg
            width="114"
            height="30"
            viewBox="0 0 114 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.5499 15C30.5499 23.2822 23.709 30 15.275 30C6.84093 30 0 23.2822 0 15C0 6.71779 6.84093 0 15.275 0C23.709 0 30.5499 6.71779 30.5499 15ZM26.7077 8.30522L26.4032 8.09816L26.1923 8.07515H25.5832H25.3724H25.1615L24.7398 8.28221L24.1073 8.67331L23.2638 9.29448L22.4204 9.91565L21.413 10.7209L17.8052 13.6426L16.8446 13.6656L12.8619 13.3206L10.2614 13.1595L9.98026 13.2285L7.07521 14.816L6.93464 15L6.91121 15.161L7.07521 15.2531L12.8853 18.0598L9.98026 20.9356L6.37237 20.4985L5.64611 20.5215L3.77188 21.7408L3.67817 22.0859L7.47348 23.7883H8.17632L10.0037 22.9831L14.947 20.3604L20.8274 15.4371L24.9741 11.8021L26.2626 10.5368L26.614 9.93865L26.8249 9.54755L27.0357 8.92638V8.71933L26.942 8.51227L26.7077 8.30522Z"
              fill="#EB5C24"
            />
            <path
              d="M40.0382 3.98012C40.085 5.13043 39.2182 6.05067 37.8359 6.05067C36.6177 6.05067 35.7509 5.13043 35.7509 3.98012C35.7509 2.7838 36.6411 1.86356 37.9062 1.86356C39.2182 1.86356 40.0382 2.7838 40.0382 3.98012ZM36.196 27.8375V9.20251H39.6399V27.8145H36.196V27.8375Z"
              fill="#EB5C24"
            />
            <path
              d="M49.5033 3.86505V9.20247H54.4466V11.7792H49.5033V21.8098C49.5033 24.1105 50.1593 25.4218 52.0804 25.4218C52.9706 25.4218 53.6501 25.3068 54.0718 25.1917L54.2357 27.7224C53.5798 27.9985 52.5021 28.1825 51.1901 28.1825C49.5736 28.1825 48.2851 27.6764 47.4651 26.7562C46.4811 25.7669 46.1297 24.1105 46.1297 21.9019V11.7792H43.2012V9.20247H46.1297V4.73929L49.5033 3.86505Z"
              fill="#EB5C24"
            />
            <path
              d="M62.1778 3.98009C62.2247 5.1304 61.3578 6.05064 59.9756 6.05064C58.7573 6.05064 57.8905 5.1304 57.8905 3.98009C57.8905 2.78377 58.7808 1.86353 60.0459 1.86353C61.3344 1.86353 62.1778 2.78377 62.1778 3.98009ZM58.3356 27.8375V9.20248H61.7795V27.8144H58.3356V27.8375Z"
              fill="#EB5C24"
            />
            <path
              d="M67.4957 0.506165H70.9396V27.8144H67.4957V0.506165Z"
              fill="#767676"
            />
            <path
              d="M80.592 3.98009C80.6388 5.1304 79.772 6.05064 78.3898 6.05064C77.1715 6.05064 76.3047 5.1304 76.3047 3.98009C76.3047 2.78377 77.1949 1.86353 78.46 1.86353C79.7486 1.86353 80.592 2.78377 80.592 3.98009ZM76.7498 27.8375V9.20248H80.1937V27.8144H76.7498V27.8375Z"
              fill="#767676"
            />
            <path
              d="M90.0565 3.86505V9.20247H94.9998V11.7792H90.0565V21.8098C90.0565 24.1105 90.7125 25.4218 92.6336 25.4218C93.5239 25.4218 94.2033 25.3068 94.625 25.1917L94.789 27.7224C94.133 27.9985 93.0553 28.1825 91.7434 28.1825C90.1268 28.1825 88.8383 27.6764 88.0183 26.7562C87.0344 25.7669 86.6829 24.1105 86.6829 21.9019V11.7792H83.7545V9.20247H86.6829V4.73929L90.0565 3.86505Z"
              fill="#767676"
            />
            <path
              d="M100.552 19.1411C100.623 23.7193 103.598 25.6058 107.065 25.6058C109.525 25.6058 111.025 25.1917 112.313 24.6396L112.899 27.0552C111.681 27.5843 109.619 28.2055 106.597 28.2055C100.763 28.2055 97.2726 24.4325 97.2726 18.819C97.2726 13.2055 100.646 8.78833 106.175 8.78833C112.36 8.78833 114 14.1258 114 17.5537C114 18.2439 113.93 18.796 113.883 19.1411H100.552ZM110.673 16.7024C110.72 14.5399 109.783 11.204 105.894 11.204C102.403 11.204 100.88 14.3558 100.599 16.7024H110.673Z"
              fill="#767676"
            />
          </svg>

          {/* <div className="w-40 rounded-xl bg-gray-100 p-2">Logo</div> */}
          <Spinner />
        </div>
      ) : (
        <Page>
          <TripSteps sticky />
          {/* Section */}
          <div className="section" id="section">
            <div className="fixed-container">
              <div className="mx-4 my-4 flex flex-col gap-4">
                <div className="h-40 w-full rounded-xl bg-gray-100 p-4 text-title3 font-semibold text-gray-500">
                  This is a placeholder section.
                  <div className="text-body2 font-normal">
                    Click on the 'Select options' button to proceed.
                  </div>
                </div>
                {/* {Array(6)
              .fill("")
              .map(function () {
                return (
                  <div className="h-40 w-full rounded-xl bg-gray-100"> </div>
                );
              })} */}
                <div>
                  <ILButton
                    onClick={() => navigate("/travel/select-options")}
                    variant="secondary"
                  >
                    Select options
                  </ILButton>
                </div>

                {/* <button
              onClick={() => {
                document.getElementById("section").scrollIntoView();
                console.log("clicked");
              }}
            >
              go to top
            </button> */}
              </div>
            </div>
          </div>
        </Page>
      )}
    </>
  );
}

export default CreateTrip;
