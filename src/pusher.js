import Pusher from 'pusher-js';

const pusher = new Pusher(process.env.PUSHER_APP_KEY, {
  cluster: 'us3',
});

const channel = pusher.subscribe('my-channel');
channel.bind('my-event', function (data) {
  alert(JSON.stringify(data));
});