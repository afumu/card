
export interface GreetingMessage {
  title: string;
  content: string;
  signature: string;
}

export enum CardState {
  CLOSED = 'CLOSED',
  OPENING = 'OPENING',
  OPENED = 'OPENED'
}
