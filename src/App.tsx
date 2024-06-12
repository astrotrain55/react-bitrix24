import { useState } from 'react';
import { BxButton, BxCheckbox, BxRadio, loadStyles } from '..';
import '../.storybook/stories.css';

loadStyles();

function App() {
  const [count, setCount] = useState(0);
  const [radio, setRadio] = useState('One');
  const [checkbox, setCheckbox] = useState([] as string[]);

  function onCheckbox(value: string) {
    const array = new Set(checkbox);
    if (array.has(value)) array.delete(value);
    else array.add(value);
    setCheckbox([...array]);
  }

  return (
    <>
      <fieldset>
        <legend>BxButton</legend>
        <div className="component">
          <BxButton count={count} counter onClick={() => setCount((c) => c + 1)}>
            count is
          </BxButton>
        </div>
        <div className="component">
          <BxButton menu>BxButton</BxButton>
        </div>
      </fieldset>
      <fieldset>
        <legend>BxRadio</legend>
        <div className="component">
          <BxRadio
            value="One"
            name="radio"
            checked={'One' === radio}
            onChange={() => setRadio('One')}
          >
            BxRadio 1
          </BxRadio>
        </div>
        <div className="component">
          <BxRadio
            value="Two"
            name="radio"
            checked={'Two' === radio}
            onChange={() => setRadio('Two')}
          >
            BxRadio 2
          </BxRadio>
        </div>
        <div className="component">
          <BxRadio
            value="Three"
            name="radio"
            checked={'Three' === radio}
            onChange={() => setRadio('Three')}
          >
            BxRadio 3
          </BxRadio>
        </div>
      </fieldset>
      <fieldset>
        <legend>BxCheckbox</legend>
        <div className="component">
          <BxCheckbox
            value="One"
            name="checkbox"
            checked={checkbox.includes('One')}
            onChange={() => onCheckbox('One')}
          >
            BxCheckbox 1
          </BxCheckbox>
        </div>
        <div className="component">
          <BxCheckbox
            value="Two"
            name="checkbox"
            checked={checkbox.includes('Two')}
            onChange={() => onCheckbox('Two')}
          >
            BxCheckbox 2
          </BxCheckbox>
        </div>
        <div className="component">
          <BxCheckbox
            value="Three"
            name="checkbox"
            checked={checkbox.includes('Three')}
            onChange={() => onCheckbox('Three')}
          >
            BxCheckbox 3
          </BxCheckbox>
        </div>
      </fieldset>
    </>
  );
}

export default App;
