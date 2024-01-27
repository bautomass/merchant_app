import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import PopOverUI from "./PopOverUI";

const ResourceUI: React.FC<{
  icon: string;
  amount: number;
  buyPrice: number;
  sellPrice: number;
}> = ({ icon, amount, buyPrice, sellPrice }) => {
  return (
    <div className="resource-ui">
      <img className="resource-ui__icon" src={icon} />
      <div className="resource-ui__box">
        <PopOverUI amount={sellPrice}>
          <button className="resource-ui__btn sell">-</button>
        </PopOverUI>

        <p className="resource-ui__count">{amount}</p>
        <PopOverUI amount={buyPrice}>
          <button className="resource-ui__btn buy">+</button>
        </PopOverUI>
      </div>
    </div>
  );
};

export default ResourceUI;
