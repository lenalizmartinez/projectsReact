import {useState} from 'react';
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

function App() {

  const [selectedTopic, setSelectedTopic]= useState('Please click a button');

let tabContent = 'please click a button';

function handSelect(selectedButton){
  
  //tabContent = selectedButton;
  setSelectedTopic(selectedButton);
  //selectedButton => 'components', 'jsx', 'props',
  console.log(setSelectedTopic);
}

console.log('APP component executing');

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>
            Core Concepts
          </h2>
          <ul>
            <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description} 
              image={CORE_CONCEPTS[0].image}
            />
             <CoreConcept {... CORE_CONCEPTS[1]}/>
             <CoreConcept {... CORE_CONCEPTS[2]}/>
             <CoreConcept {... CORE_CONCEPTS[3]}/>
          </ul>

        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handSelect('components')}>Component</TabButton>
            <TabButton onSelect={() => handSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handSelect('state')}>State</TabButton>
          </menu>
            {selectedTopic}
        </section>

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}


export default App;
