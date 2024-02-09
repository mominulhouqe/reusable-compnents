import { useState } from "react";
import "./App.css";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const handelModalClose = () => {
    setModal((prev) => !prev);
  };

  return (
    <Container>
      <div className="h-screen  w-full flex justify-center items-center  gap-2">
        <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handelModalClose}>
          <h1>This is modal</h1>
        </Modal>
      </div>
    </Container>
  );
}

export default App;
