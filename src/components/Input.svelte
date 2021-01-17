<script>
  import { createEventDispatcher } from "svelte";
  import { v4 } from "uuid";
  import api from "../api.js";

  const dispatch = createEventDispatcher();

  let text;
  function sendMessage(e) {
    if (e.key !== "Enter" || !text) {
      return;
    }

    // generate uuid for own messages on client and send up
    // to server to fan out, so own message ids are recognized
    // globally
    let id = v4();
    dispatch("new-message", { text, id });
    api.sendMessage(text, id);

    text = "";
  }
</script>

<input
  type="text"
  placeholder="Aa"
  bind:value={text}
  on:keypress={sendMessage}
/>
