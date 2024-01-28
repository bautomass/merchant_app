import { ReactNode } from "react";
import { Tooltip } from "@nextui-org/react";

const ToolTipUI: React.FC<{
  price: number;
  children: ReactNode;
}> = ({ price, children }) => {
  return (
    <Tooltip
      showArrow={true}
      color={"secondary"}
      placement={"right"}
      content={price}
    >
      {children}
    </Tooltip>
  );
};

export default ToolTipUI;
