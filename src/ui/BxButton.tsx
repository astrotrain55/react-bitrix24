import { useState } from 'react';

export default function BxButton(initProps: any) {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      {initProps.children} {count}
    </button>
  );
}
