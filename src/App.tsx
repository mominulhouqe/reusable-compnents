import { FormEvent, useState } from "react";
import "./App.css";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";
import NormalForm from "./components/NormalForm/NormalForm";

function App() {
  const [modal, setModal] = useState(false);

  const handelModalClose = () => {
    setModal((prev) => !prev);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("cliked");
  };

  return (
    <Container>
      <div className="w-full flex justify-center items-center  gap-2">
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
      </div>
    </Container>
  );
}

export default App;
