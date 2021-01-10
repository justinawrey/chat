const Pusher = require('pusher');

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
});

exports.handler = async function (event) {
  pusher.trigger("my-channel", "my-event", {
    message: event.body,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  };
};