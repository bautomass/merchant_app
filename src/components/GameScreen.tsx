import ResourceUI from "./ResourceUI";
import { Resource } from "@/types/resource";
import { useState } from "react";

const amount = 200;
const price = 100;

const GameScreen: React.FC<{
  turn: number;
}> = ({ turn }) => {
  const [resources, setResources] = useState<{ [key: string]: Resource }>({
    gold: {
      name: "gold",
      icon: "./icons/resource_gold.svg",
      amount: amount,
      price: price,
    },
    silver: {
      name: "silver",
      icon: "./icons/resource_silver.svg",
      amount: amount,
      price: price,
    },
    stone: {
      name: "stone",
      icon: "./icons/resource_rock.svg",
      amount: amount,
      price: price,
    },
    wood: {
      name: "wood",
      icon: "./icons/resource_wood.svg",
      amount: amount,
      price: price,
    },
  });

  const buyResource = (resName: string) => {
    let newResource = { ...resources[resName] };
    newResource.amount++;
    newResource.price += 50;
    setResources((prevState) => ({
      ...prevState,
      [resName]: newResource,
    }));
  };

  const sellResource = (resName: string) => {
    let newResource = { ...resources[resName] };
    newResource.amount--;
    newResource.price -= 50;
    setResources((prevState) => ({
      ...prevState,
      [resName]: newResource,
    }));
  };

  return (
    <div className="wrapper">
      <div className="game-screen">
        <div className="moves">Turn: {turn}</div>
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
