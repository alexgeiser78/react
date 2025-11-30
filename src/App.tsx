import Test from "./components/Test";
import ListGroup from "./components/ListGroup";
import OtherList from "./components/OtherList";
import Alert from "./components/Alert";
import Alert2 from "./components/Alert2";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let planet = ["World", "Venus", "Mars"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <Test></Test>
      <ListGroup></ListGroup>
      <OtherList
        planet={planet}
        headings={"planet"}
        onSelectItem={handleSelectItem}
      ></OtherList>
      <Alert>
        Salut <span>toi!</span>
      </Alert>
      <Button color="secondary" onClick={() => console.log("clicked")}>
        My Button
      </Button>
      {alertVisible && (
        <Alert2 onClose={() => setAlertVisibility(false)}>My alert</Alert2>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
