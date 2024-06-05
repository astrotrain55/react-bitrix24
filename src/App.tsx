import { useState } from 'react';
import { BxButton } from '..';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BxButton count={count} counter onClick={() => setCount((c) => c + 1)}>
        count is
      </BxButton>
      <BxButton menu>Bx-Button</BxButton>
    </>
  );
}

export default App;
