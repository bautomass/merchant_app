import ResourceUI from "./ResourceUI";

const GameScreen: React.FC<{
  turn: number;
  amount: number;
  buyPrice: number;
  sellPrice: number;
}> = ({ turn }) => {
  return (
    <div className="game-screen">
      <div>Turn: {turn}</div>
      <ResourceUI
        icon="./icons/resource_rock.svg"
        amount={10}
        buyPrice={100}
        sellPrice={100}
      />
      <ResourceUI
        icon="./icons/resource_wood.svg"
        amount={10}
        buyPrice={100}
        sellPrice={100}
      />
    </div>
  );
};

export default GameScreen;
