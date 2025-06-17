import { useState } from "react";
import React from "react";

import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton/TabButton";

import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";

function App() {
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
    console.log("Tab selected:::", typeButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((itemConcept) => (
              <CoreConcepts key={itemConcept.title} {...itemConcept} />
            ))}
            {/* <CoreConcepts
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Time to get started!</h2>
          <menu>
            <TabButton
              isSelected={selectedButton === "components"}
              onSelect={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedButton === "jsx"}
              className="active"
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedButton === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
            <TabButton
              isSelected={selectedButton === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
          </menu>
        </section>
        {tableContent}
      </main>
    </div>
  );
}

export default App;
