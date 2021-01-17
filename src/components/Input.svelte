<script>
  import { createEventDispatcher } from "svelte";
  import api from "../api.js";

  const dispatch = createEventDispatcher();

  let message;
  function sendMessage(e) {
    if (e.key !== "Enter" || !message) {
      return;
    }

    dispatch("new-message", message);
    api.sendMessage(message);
    message = "";
  }
</script>

<input type="text" bind:value={message} on:keypress={sendMessage} />
