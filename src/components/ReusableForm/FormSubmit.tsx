import { useContext } from "react";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { FormElementContext } from ".";

export const FormSubmit = () => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={cn("p-2 grid grid-cols-1 justify-items-center gap-5", {
        "md:grid-cols-2 ": double,
      })}
    >
      <div className=" w-full mx-w-md col-start-1 md:col-start-2 flex justify-end my-8">
        <Button className="w-full md:w-fit" type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
};
