import Pusher from 'pusher-js';

let socketId;

const pusher = new Pusher(process.env.PUSHER_APP_KEY, {
  cluster: process.env.PUSHER_APP_CLUSTER,
});

const channel = pusher.subscribe('my-channel');

pusher.connection.bind('connected', () => {
  socketId = pusher.connection.socket_id;
})

export {
  channel,
  socketId,
}