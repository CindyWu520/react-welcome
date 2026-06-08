import "./App.css";
import { Welcome } from "./components/basic/Welcome";
import { User } from "./components/basic/User";
import { Card } from "./components/basic/Card";
import { IfElseExample } from "./components/conditionalRenderingPatterns/IfElseExample";
import { ButtonExample } from "./components/basic/ButtonExample";
import { TernaryOperator } from "./components/conditionalRenderingPatterns/TernaryOperator";
import { LogicalAnd } from "./components/conditionalRenderingPatterns/LogicalAnd";
import { LogicalOr } from "./components/conditionalRenderingPatterns/LogicalOr";
import { MultipleConditions } from "./components/conditionalRenderingPatterns/MultipleConditions";
import { SwitchStatement } from "./components/conditionalRenderingPatterns/SwitchStatement";
import { BasicArrayMapping } from "./components/renderLists/BasicArrayMapping";
import { FilterList } from "./components/renderLists/FilterList";
import { AddRemoveItems } from "./components/renderLists/AddRemoveItems";
import { MultipleInput } from "./components/formInput/MultipleInput";
import { FormSubmission } from "./components/formInput/FormSubmission";
import { RadioAndCheckButton } from "./components/formInput/RadioAndCheckButton";

function App() {
  const name = "cindy";
  const items = [1, 2, 3];
  const styles = {
    backgroundColor: "red",
    color: "white",
  };

  return (
    <>
      <Card>
        <ButtonExample />
        <Welcome name="Cindy" />
        <p style={styles}> hello react! </p>
        <input type="text" defaultValue={name} />
        <p>length: {items.length}</p>
        <p>sum: {1 + 1}</p>
        <p>today: {new Date().toDateString()}</p>
        <Welcome name="Christy" />
      </Card>
      <Card>
        <User name="cindy" role="admin" verified={true} />
        <User name="Christy" role="user" verified={false} />
      </Card>
      <Card>
        <IfElseExample />
      </Card>
      <Card>
        <TernaryOperator />
      </Card>
      <Card>
        <LogicalAnd />
      </Card>
      <Card>
        <LogicalOr />
      </Card>
      <Card>
        <MultipleConditions />
      </Card>
      <Card>
        <SwitchStatement />
      </Card>
      <Card>
        <BasicArrayMapping />
      </Card>
      <Card>
        <FilterList />
      </Card>
      <Card>
        <AddRemoveItems />
      </Card>
      <Card>
        <MultipleInput />
      </Card>
      <Card>
        <FormSubmission />
      </Card>
      <Card>
        <RadioAndCheckButton />
      </Card>
    </>
  );
}

export default App;
