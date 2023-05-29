import { until } from 'lit/directives/until.js';

export const sha256 = async (message: string) => {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');

  await new Promise<void>((r) => setTimeout(() => r(), 1000));
  return hashHex;
}

export const calculateSHA = (value: string): any => {
  return until(sha256(value), 'Calculating sha...');
}
