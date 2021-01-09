<script>
  import api from "../api";

  let message;
  function sendMessage(e) {
    if (e.key !== "Enter") {
      return;
    }

    message = "";
    api.sendMessage();
  }
</script>

<input type="text" bind:value={message} on:keypress={sendMessage} />
