<script>
  import { channel } from "../pusher.js";
  import Input from "./Input.svelte";

  let scrollArea;
  let messages = [];
  $: messageTexts = messages.map(({ text }) => text);

  function addMessage(message) {
    messages = [...messages, message];
  }

  function jumpToBottom() {
    scrollArea.scrollTop = 0;
  }

  channel.bind("my-event", addMessage);
</script>

<article>
  <ul bind:this={scrollArea}>
    {#each messageTexts as text}
      <li>{text}</li>
    {/each}
  </ul>

  <Input on:new-message={(e) => addMessage(e.detail)} />

  {#if false}
    <span>
      You have unread messages
      <button on:click={jumpToBottom}>Jump to bottom</button>
    </span>
  {/if}
</article>

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
    border: 1px solid lightgrey;
    border-bottom: 0;
  }

  span {
    display: flex;
    justify-content: space-between;
  }
</style>
