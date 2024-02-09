import cn from "../../utils/cn";

const Button = ({ className, variant }) => {
  const getVariant = (variant) => {
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
    <button className={cn( getVariant(variant), className)}>click</button>
  );
};

export default Button;
