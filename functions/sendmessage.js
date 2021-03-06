const Pusher = require('pusher');

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
});

exports.handler = async function (event) {
  const { text, sender, socketId, id } = JSON.parse(event.body);

  try {
    const pusherRes = await pusher.trigger("my-channel", "my-event", {
      text,
      sender,
      id,
    }, socketId);

    if (pusherRes.status !== 200) {
      throw Error('Something went wrong');
    }

    return {
      statusCode: pusherRes.status,
      body: 'Success',
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err.message,
    }
  }
};