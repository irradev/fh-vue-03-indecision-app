import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getResponse = async () => {
    // Todo: Try catch
    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesNoResponse;

    return data;
  };

  const onMessage = async (text: string) => {
    if (text.trim() === '') return;

    messages.value.push({
      id: messages.value.length + 1,
      type: 'sent',
      message: text,
    });

    if (!text.endsWith('?')) return;
    await sleep(1.5);

    const { answer, image } = await getResponse();

    messages.value.push({
      id: messages.value.length + 1,
      type: 'received',
      message: answer,
      image,
    });
  };

  return {
    messages,
    onMessage,
  };
};
