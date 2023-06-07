import { useCallback, useState } from 'react';
import { ReactEvents } from './ReactEvents';

export const ReactEventsSample = () => {
    const [count, setCount] = useState(0);

  const onClick = useCallback(() => setCount(count + 1), [count]);

  return <ReactEvents onClick={onClick} count={count}></ReactEvents>;
}
