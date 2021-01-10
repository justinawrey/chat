import { readable } from 'svelte/store';

export default function setupChatStream(channel, event) {
  let messages = [];

  return readable(messages, set => {
    channel.bind(event, data => {
      messages = [...messages, data.message];
      set(messages);
    });
  });
};