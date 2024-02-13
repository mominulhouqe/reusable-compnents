// import { FormEvent, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import "./App.css";
import {
  Form,
  FormSelection,
  FormSubmit,
  Input,
} from "./components/ReusableForm";
// import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import { z } from "zod";
// import Modal from "./components/ui/Modal";
// import NormalForm from "./components/NormalForm/NormalForm";

function App() {
  // const [modal, setModal] = useState(false);

  // const handelModalClose = () => {
  //   setModal((prev) => !prev);
  // };
  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log("cliked");
  // };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TTest>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    // password : z.string().email(),
  });

  type TTest = z.infer<typeof TestSchema>;

  return (
    <Container>
      {/* <div className="w-full flex justify-center items-center  gap-2">
        <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handelModalClose}>
          <Modal.Header>
            <h1>Modal Title</h1>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <form className="" onSubmit={handleSubmit}>
            <input type="text" className="border " />
            <button className="btn-outline" type="submit">
              submit
            </button>
          </form>
        </Modal>
      </div>
      <div>
        <NormalForm />

      </div> */}
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSelection>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <Input
            type="email"
            register={register("email")}
            errors={errors}
            label="Email"
          />
        </FormSelection>
        <FormSubmit></FormSubmit>
      </Form>
    </Container>
  );
}

export default App;
