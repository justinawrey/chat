<script>
  import { createEventDispatcher } from "svelte";
  import { v4 } from "uuid";
  import name from "../stores/name.js";
  import api from "../api.js";

  const dispatch = createEventDispatcher();

  let text;
  function sendMessage(e) {
    if (e.key !== "Enter" || !text) {
      return;
    }

    // generate uuid for own messages on client and send up
    // to server to fan out, so every participant has same ids
    let id = v4();
    let sender = $name;
    dispatch("new-message", { text, sender, id });
    api.sendMessage(text, sender, id);

    text = "";
  }
</script>

<input
  type="text"
  placeholder="Aa"
  bind:value={text}
  on:keypress={sendMessage}
/>
