import { useCallback, useState } from 'react';
import { CustomEvents } from './CustomEvents';

export const CustomEventsSample = () => {
  const [message, setMessage] = useState('Click the button to recieve a custom event dispatched by the SecretButton component.');

  const onSecretMessage = useCallback(
    (e: CustomEvent<string>) => setMessage(e.detail),
    []
  );

  return (
    <>
      <CustomEvents onSecretMessage={onSecretMessage}></CustomEvents>
      <div>{message}</div>
    </>
  );
}
