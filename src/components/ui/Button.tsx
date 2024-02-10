import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

type TRef = HTMLButtonElement;
type TVariant = "solid" | "gosht" | "outline";
type TButtonOptions = {
  variant?: TVariant;
};
type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;

const Button = forwardRef<TRef, TButton>(
  ({ className, variant = "solid", ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "gosht":
          return "btn-gosht";

        default:
          return "btn-solid";
      }
    };

    return (
      <button
        {...rest}
        ref={ref}
        className={cn(getVariant(variant), className)}
      ></button>
    );
  }
);

export default Button;

/* 
Accordion
Tabs
pagination component
sideber/carusel component
Breadcrumb
*/
