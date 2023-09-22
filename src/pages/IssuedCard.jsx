import CardBack from "../components/CardBack";
import ILButton from "../components/core/ILButton";
import { motion, useAnimate, animate } from "framer-motion";
import Page from "./Page";
import { useEffect } from "react";
import CardFront from "../components/CardFront";
import { transform } from "@babel/core";

function IssuedCard() {
  const [scope, animate] = useAnimate();
  const choreo = async () => {
    // await animate(
    //   ".card",
    //   { scale: [0, 1.2], opacity: [0, 1], rotateY: [0, 0] },
    //   {
    //     scale: { duration: 1, ease: "easeOut" },
    //     opacity: { duration: 0.1 },
    //     rotateY: { duration: 1.2, ease: "easeOut" },
    //   }
    // );
    // animate(
    //   ".card",
    //   { scale: [1.2, 1], rotateY: [0, 0] },
    //   {
    //     scale: { duration: 0.4, ease: "easeIn" },
    //     rotateY: { duration: 0.4, ease: "easeIn" },
    //     delay: 0.5,
    //   }
    // );

    await animate(
      ".card",
      { scale: [0, 1.2], opacity: [0, 1] },
      {
        scale: { duration: 1, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.1 },
      }
    );
    animate(
      ".card",
      { rotateY: [0, 360] },
      { ease: [0, 0.86, 1, 0.07], duration: 2 }
    );
    animate(".shine", { x: [0, 400] }, { duration: 2 });
    animate(
      ".card",
      { scale: [1.2, 1] },
      { ease: [0.64, 0, 0.78, 0], duration: 1, delay: 1.05 }
    );
  };

  useEffect(() => {
    choreo();
  }, []);

  return (
    <Page>
      <div className="section">
        <div className="fixed-container">
          <div
            ref={scope}
            className="flex h-screen flex-col items-center justify-center gap-10"
            style={{ perspective: "800px" }}
          >
            {/* Header */}
            {/* <div className="text-title1 font-semibold">Virtual card issued</div> */}

            {/* The actual card */}
            <div
              className="card relative flex h-[15rem] w-[22.5rem] items-center justify-center opacity-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute h-full w-full"
                style={{ backfaceVisibility: "hidden" }}
              >
                <CardBack />
              </div>
              <div
                className="absolute h-full w-full"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <CardFront physical />
              </div>
            </div>

            <CardFront physical />

            {/* Footer */}
            {/* <div className="flex flex-col items-center gap-6">
              <div className="max-w-md text-center text-body2 text-gray-700">
                This card is now active. Updates will be shared to{" "}
                <span className="font-semibold">
                  cardholderemail@company.com
                </span>
              </div>
              <div className="flex gap-3">
                <ILButton variant="secondarySubtle">View card details</ILButton>
                <ILButton variant="secondary">View all cards</ILButton>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Page>
  );
}

export default IssuedCard;
