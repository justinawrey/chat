import { pusher, socketId } from './pusher';
import setupChatStream from './chatStream';

const channel = pusher.subscribe('my-channel');
const chatStream = setupChatStream(channel, 'my-event');

export {
  chatStream,
  socketId,
};
