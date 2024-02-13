import { useContext } from "react";
import cn from "../../utils/cn";
import { FormElementContext } from ".";
import { TForm } from "../../types";

export const FormSelection = ({ children }: TForm) => {
  const context = useContext(FormElementContext);
  const double = context?.double;

  return (
    <div
      className={cn("p-2 grid grid-cols-1 justify-items-center gap-2", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};
