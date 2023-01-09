import Button from "./components/Button";
import { GoBell, GoWatch, GoOctoface, GoJersey } from "react-icons/go";

function App() {
  return (
    <div className="App">
      <main>
        <section className="buttons">
          <h3 className="buttons__title">Button Components</h3>
          <Button primary rounded>
            <GoBell className="icon" />
            Primary Button
          </Button>
          <Button secondary outline>
            <GoWatch className="icon" />
            Secondary
          </Button>
          <Button success>
            <GoOctoface className="icon" />
            Success
          </Button>
          <Button warning>
            <GoJersey className="icon" />
            Warning
          </Button>
        </section>
      </main>
    </div>
  );
}

export default App;
