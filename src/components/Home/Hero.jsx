import { useReducer } from "react";
import bg from "../../assets/bg.png";
import hero from "../../assets/hero.png";
import logo from "../../assets/logo.png";
import Button from "../Button";
import { FaChevronUp, FaChevronDown, FaInfoCircle } from "react-icons/fa";

export default function Hero({price,mint,totalSupply}) {
  
  //Max Allowed Amount
  const maxAmount = 10;
  //Reducer
  const mintAmountReducer = (state, action) => {
    switch (action.type) {
      case "increment":
        if (state < maxAmount) {
          return state + 1;
        } else {
          return state;
        }
      case "decrement":
        if (state > 0) {
          return state - 1;
        } else {
          return state;
        }
      case "set":
        return action.payload;
      default:
        return state;
    }
  };
  //Mint Amount
  const [mintAmount, dispatchMintAmount] = useReducer(mintAmountReducer, 0);

  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="text-secondary"
    >
      <div className="mx-auto min-h-screen max-w-screen-xl px-4 pt-32 md:pt-0 flex flex-col-reverse md:flex-row justify-between items-center md:space-x-4">
        <div className="md:min-h-screen mt-16 md:mt-0 flex-1 flex flex-col justify-end items-center">
          <img
            className="opacity-80 w-full lg:w-3/4 xl:w-2/3"
            src={hero}
            alt="Ikigai Five Character"
          />
        </div>
        <div className="md:min-h-screen flex-1 flex flex-col justify-center items-center">
          <img className="w-1/2" src={logo} alt="Ikigai Five Logo" />
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-2xl mt-8">{price} ETH ~ {totalSupply}/5000</p>
            <div className="w-full max-w-xs my-4 relative select-none">
              <input
                type="number"
                className="w-full select-none text-xl bg-secondary text-primary placeholder-primary text-center border border-secondary rounded py-3 px-8"
                placeholder="Mint Amount (Max 10)"
                min="0"
                max="10"
                step="1"
                onChange={(e) =>
                  dispatchMintAmount({
                    type: "set",
                    payload: parseInt(e.target.value),
                  })
                }
                value={mintAmount ? mintAmount : ""}
              />
              <FaChevronUp
                className="absolute cursor-pointer text-primary top-1/2 right-4 transform -translate-y-1/2"
                size={18}
                onClick={() => dispatchMintAmount({ type: "increment" })}
              />
              <FaChevronDown
                className="absolute cursor-pointer text-primary top-1/2 left-4 transform -translate-y-1/2"
                size={18}
                onClick={() => dispatchMintAmount({ type: "decrement" })}
              />
            </div>
            {mintAmount > 10 && (
              <p className="mb-4 flex items-center space-x-2 text-yellow-400">
                <FaInfoCircle />
                <span>Max {maxAmount} allowed!</span>
              </p>
            )}
            {mintAmount < 0 && (
              <p className="mb-4 flex items-center space-x-2 text-yellow-400">
                <FaInfoCircle />
                <span>Amount Can't Be Negative!</span>
              </p>
            )}
            <div
              className={`${
                (mintAmount > 10 || mintAmount < 0) &&
                "opacity-50 pointer-events-none"
              }`}
            >
              <div onClick={()=>{mint(mintAmount)}}>
              <Button >Mint Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
