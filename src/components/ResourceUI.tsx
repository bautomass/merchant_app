import { Resource } from "@/types/resource";
import ToolTipUI from "./ToolTipUI";

const ResourceUI: React.FC<{
  res: Resource;
  onBuy: Function;
  onSell: Function;
}> = ({ res, onBuy, onSell }) => {
  return (
    <div className="resource-ui">
      <img className="resource-ui__icon" src={res.icon} />
      <div className="resource-ui__box">
        {/* SELL */}
        <ToolTipUI price={res.price}>
          <button
            onClick={() => onSell(res.name)}
            className="resource-ui__btn sell"
          >
            -
          </button>
        </ToolTipUI>
        <p className="resource-ui__count">{res.amount}</p>
        {/* BUY */}
        <ToolTipUI price={res.price}>
          <button
            onClick={() => onBuy(res.name)}
            className="resource-ui__btn buy"
          >
            +
          </button>
        </ToolTipUI>
      </div>
    </div>
  );
};

export default ResourceUI;
