async function post(url, data) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });
  const json = await res.json();

  if (res.ok) {
    return json;
  } else {
    throw new Error(`Request failed: POST to ${url} with data ${data}`);
  }
}

async function sendMessage(data) {
  return post('.netlify/functions/sendmessage', data);
}

export default {
  sendMessage,
};