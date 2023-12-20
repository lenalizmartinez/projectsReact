import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";


export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handSelect(selectedButton) {
    //tabContent = selectedButton;
    setSelectedTopic(selectedButton);
    //selectedButton => 'components', 'jsx', 'props',
    console.log(setSelectedTopic);
  }
  let tabContent = <p>Please select a topic.</p>;

  if(selectedTopic){
    tabContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handSelect("components")}
        >
          Component
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handSelect("state")}
        >
          State
        </TabButton>
      </menu>

      {tabContent}
    </Section>
  );
}
