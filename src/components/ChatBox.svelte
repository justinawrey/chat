<script>
  import { channel } from "../pusher.js";
  import Input from "./Input.svelte";

  function addMessage(message) {
    messages = [...messages, message];
  }

  let messages = [];
  channel.bind("my-event", ({ message }) => addMessage(message));
</script>

<ul>
  {#each messages as message}
    <li>{message}</li>
  {/each}
</ul>

<Input on:new-message={(e) => addMessage(e.detail)} />
