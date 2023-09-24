import CardBack from "../components/CardBack";
import ILButton from "../components/core/ILButton";
import { motion, useAnimate, animate } from "framer-motion";
import Page from "./Page";
import { useEffect } from "react";
import CardFront from "../components/CardFront";
import { transform } from "@babel/core";
import { useCard } from "../contexts/CardContext";
import { useNavigate } from "react-router-dom";

function IssuedCard() {
  const navigate = useNavigate();
  const {
    setName: aName,
    setHolderName,
    setAmount: aAmount,
    setPhysical,
    physical,
    name,
    holdername,
    amount,
  } = useCard();
  const [scope, animate] = useAnimate();

  const choreo = async () => {
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
    animate(".shine", { x: [-20, 380], rotate: [12, 12] }, { duration: 2 });
    animate(
      ".card",
      { scale: [1.2, 1] },
      { ease: [0.64, 0, 0.78, 0], duration: 1, delay: 1.05 }
    );
    animate(
      ".wave1",
      {
        width: [360, 400],
        height: [240, 280],
        borderRadius: [16, 36],
        opacity: [1, 0],
        scale: [0, 1],
      },
      { duration: 0.4, delay: 2, scale: { duration: 0.0001, delay: 2.1 } }
    );
    await animate(
      ".header",
      { y: [8, 0], opacity: [0, 1] },
      { duration: 0.2, delay: 2.5, ease: "easeOut" }
    );
    await animate(
      ".footer",
      { y: [4, 0], opacity: [0, 1] },
      { duration: 0.2, ease: "easeOut" }
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
            <div className="header text-title1 font-semibold opacity-0">
              {physical ? `Physical card` : `Virtual card`} issued
            </div>

            {/* The actual card */}
            <div
              className="card relative flex h-[15rem] w-[22.5rem] items-center justify-center opacity-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Wave */}
              <div className="wave1 absolute h-[15rem] w-[22.5rem] border-2 border-orange-500 bg-orange-500/40 opacity-0"></div>
              <div
                className="absolute h-full w-full"
                style={{ backfaceVisibility: "hidden" }}
              >
                <CardBack
                  physical={physical}
                  name={name}
                  holder={holdername}
                  amount={amount}
                />
              </div>
              <div
                className="absolute h-full w-full"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <CardFront physical={physical} />
              </div>
            </div>

            {/* Footer */}
            <div className="footer flex flex-col items-center gap-6 opacity-0">
              <div className="max-w-md text-center text-body2 text-gray-700">
                {physical
                  ? `Delivery of the card can take up to 7-10 business days. `
                  : `This card is now active. `}
                Updates will be shared to{" "}
                <span className="font-semibold">
                  cardholderemail@company.com
                </span>
              </div>
              <div className="flex gap-3">
                <ILButton variant="secondarySubtle">View card details</ILButton>
                <ILButton
                  variant="secondary"
                  onClick={() => navigate("/cards/cards")}
                >
                  View all cards
                </ILButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default IssuedCard;
