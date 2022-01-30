import Button from "./components/Button/Button.tsx";

function App() {
  return (
    <div className="App">
      <Button type="primary" size="large">
        Primary
      </Button>
      <br />
      <br />
      <Button type="dash" size="small">
        Primary
      </Button>
      <br />
      <br />
      <Button type="primary" shape="round">
        I'm Round
      </Button>
      <br />
      <br />
      <Button type="primary" shape="round" size="large">
        I'm Round And Large
      </Button>
    </div>
  );
}

export default App;
