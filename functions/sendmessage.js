const Pusher = require('pusher');

exports.handler = async function () {
  const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
  });

  pusher.trigger("my-channel", "my-event", {
    message: "A dope message."
  });

  return {
    statusCode: 200,
    message: 'success',
  };
}