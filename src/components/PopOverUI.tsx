import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { ReactNode } from "react";

const PopOverUI: React.FC<{
  amount: number;
  children: ReactNode;
}> = ({ amount, children }) => {
  return (
    <Popover placement="right">
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">{amount}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopOverUI;
