import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";

export default function Examples() {
  const [selectedButton, setSelectedButton] = useState();

  let tableContent = <p>Please select the content</p>;
  if (selectedButton) {
    tableContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedButton].title}</h3>
        <p>{EXAMPLES[selectedButton].description}</p>
        <pre>
          <code>{EXAMPLES[selectedButton].code}</code>
        </pre>
      </div>
    );
  }

  function handleSelect(typeButton) {
    setSelectedButton(typeButton);
    // This is where you would handle the logic for when a tab is selected
    // For example, you might want to update the state or fetch data related to the selected tab
    // For now, we will just log the selected button type
    // You can also use this to conditionally render content based on the selected tab
    // For example, you might have different content for "Component", "JSX", "State", and "Props"
    // console.log("Tab selected:::", typeButton);
  }
  return (
    <Section id="examples">
      <h2>Time to get started!</h2>
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedButton === "components"}
              onClick={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedButton === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedButton === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
            <TabButton
              isSelected={selectedButton === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
          </>
        }
      >
        {tableContent}
      </Tabs>
    </Section>
  );
}
