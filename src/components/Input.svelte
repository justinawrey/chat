<script>
  import api from "../api";

  let message;
  function sendMessage(e) {
    if (e.key !== "Enter" || !message) {
      return;
    }

    api.sendMessage(message);
    message = "";
  }
</script>

<input type="text" bind:value={message} on:keypress={sendMessage} />
