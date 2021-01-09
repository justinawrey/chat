import dotenv from 'dotenv';
dotenv.config();

import './global.css';
import App from './components/App.svelte';
import './pusher';

const app = new App({
  target: document.body,
});

export default app;