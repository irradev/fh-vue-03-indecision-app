export interface ChatMessage {
  id: number;
  message: string;
  type: 'sent' | 'received';
  image?: string;
}
