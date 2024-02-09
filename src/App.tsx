import "./App.css";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center  gap-2">
       <Button variant='gosht' className="w-72">Click</Button>
      </div>
    </Container>
  );
}

export default App;
