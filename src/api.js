async function get(url) {
  const res = await fetch(url);
  const json = await res.json();

  if (res.ok) {
    return json;
  } else {
    throw new Error(`Request failed: GET ${url}`);
  }
}

async function sendMessage() {
  return get('.netlify/functions/sendmessage');
}

export default {
  sendMessage,
};