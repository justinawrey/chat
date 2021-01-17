<script>
  import { channel } from "../pusher.js";
  import Input from "./Input.svelte";

  let messages = [];
  function addMessage(message) {
    messages = [message, ...messages];
  }
  channel.bind("my-event", ({ message }) => addMessage(message));
</script>

<style>
  article {
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 500px;
  }

  ul {
    all: unset;
    list-style-type: none;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    overflow-y: auto;
  }
</style>

<article>
  <ul>
    {#each messages as message}
      <li>{message}</li>
    {/each}
  </ul>

  <Input on:new-message={(e) => addMessage(e.detail)} />
</article>
