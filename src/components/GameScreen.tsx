import ResourceUI from "./ResourceUI";
import { Resource } from "@/types/resource";
import { useState } from "react";

const amount = 10;
const goldPrice = 400;
const silverPrice = 300;
const woodPrice = 200;
const stonePrice = 100;

const GameScreen: React.FC<{
  turn: number;
  icon: string;
}> = ({ turn, icon }) => {
  const [prevTurn, setMoves] = useState(turn);
  const [bank, setBank] = useState(100000);
  const [resources, setResources] = useState<{ [key: string]: Resource }>({
    gold: {
      name: "gold",
      icon: "./icons/resource_gold.svg",
      amount: amount,
      price: goldPrice,
    },
    silver: {
      name: "silver",
      icon: "./icons/resource_silver.svg",
      amount: amount,
      price: silverPrice,
    },
    wood: {
      name: "wood",
      icon: "./icons/resource_wood.svg",
      amount: amount,
      price: woodPrice,
    },
    stone: {
      name: "stone",
      icon: "./icons/resource_rock.svg",
      amount: amount,
      price: stonePrice,
    },
  });

  const buyResource = (resName: string) => {
    let newResource = { ...resources[resName] };
    const originalPrice = newResource.price;
    newResource.amount++;
    newResource.price += 50;
    setResources((prevState) => ({
      ...prevState,
      [resName]: newResource,
    }));
    setBank((prevBank) => prevBank - originalPrice);
    setMoves((prevMoves) => prevMoves - 1);
  };

  const sellResource = (resName: string) => {
    let newResource = { ...resources[resName] };
    const originalPrice = newResource.price;
    newResource.amount--;
    newResource.price -= 50;
    setResources((prevState) => ({
      ...prevState,
      [resName]: newResource,
    }));
    setBank((prevBank) => prevBank + originalPrice);
    setMoves((prevTurn) => prevTurn - 1);
  };

  return (
    <div className="wrapper">
      <div className="game-screen">
        <div className="game-screen__stats">
          <div className="game-screen__bank">
            <img className="game-screen__icon" src={icon} />
            Bank: ${bank}
          </div>
          <div className="game-screen__moves">Turn: {prevTurn}</div>
        </div>
        {Object.entries(resources).map(([key, res]) => (
          <ResourceUI
            key={key}
            res={res}
            onBuy={buyResource}
            onSell={sellResource}
          ></ResourceUI>
        ))}
      </div>
    </div>
  );
};
export default GameScreen;
