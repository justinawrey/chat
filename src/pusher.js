import Pusher from 'pusher-js';

const pusher = new Pusher('6ffa5a7f2644294c76b0', {
  cluster: 'us3',
});

const channel = pusher.subscribe('my-channel');
channel.bind('my-event', function (data) {
  alert(JSON.stringify(data));
});