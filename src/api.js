import { socketId } from './pusher.js';

async function post(url, data) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();

  if (res.ok) {
    return json;
  } else {
    throw new Error(`Request failed: POST to ${url} with data ${data}`);
  }
}

async function sendMessage(text, uuid = null) {
  return post('.netlify/functions/sendmessage', {
    text,
    uuid,
    socketId,
  });
}

export default {
  sendMessage,
};