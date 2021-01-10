const Pusher = require('pusher');

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
});

exports.handler = async function () {
  pusher.trigger("my-channel", "my-event", {
    message: "A dope message."
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  };
};