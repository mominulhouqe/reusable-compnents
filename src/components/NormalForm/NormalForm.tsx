import { FieldValues, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { TNormalForm, signUpSchema } from "./Validation";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNormalForm>({
    // defaultValues:{name:"Momin",email:"momin@gmail.com"}
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const double = true;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "border border-gray-300 max-w-md mx-auto mt-12 p-4 shadow-sm",
        {
          "max-w-5xl": double,
          "max-w-md": !double,
        }
      )}
    >
      <div
        className={cn("p-2 grid grid-cols-1 justify-items-center gap-2", {
          "md:grid-cols-2": double,
        })}
      >
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input type="email" id="email" {...register("email")} />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { minLength: 8, required: true })}
          />
          {errors.password && (
            <span className="text-xs text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>
        {/* <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Dept
          </label>
          <select name="" id="">
            <option value="">One </option>
            <option value="">two </option>
            <option value="">Three </option>
          </select>
        </div> */}
        {/* <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Message
          </label>
          <textarea></textarea>
        </div> */}
        {/* <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Message
          </label>
          <input type="checkbox" name="" id="" className="" />
        </div> */}
        {/* <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Message
          </label>
          <input type="radio" name="" id="" className="" />
        </div> */}
      </div>
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
    </form>
  );
};

export default NormalForm;
