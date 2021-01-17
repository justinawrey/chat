<script>
  import { afterUpdate, beforeUpdate } from "svelte";

  import { channel } from "../pusher.js";
  import Input from "./Input.svelte";

  let scrollArea;
  let messages = [];
  let atBottom;
  let lastReadId;

  function addMessage(message) {
    messages = [...messages, message];
  }

  function jumpToBottom() {
    scrollArea.scrollTop = scrollArea.scrollHeight;
  }

  beforeUpdate(() => {
    if (!scrollArea) return;
    atBottom =
      Math.abs(
        scrollArea.scrollHeight - scrollArea.offsetHeight - scrollArea.scrollTop
      ) <= 5;
  });

  afterUpdate(() => {
    if (atBottom) jumpToBottom();
  });

  channel.bind("my-event", addMessage);
</script>

<article>
  <ul bind:this={scrollArea}>
    {#each messages as { text, sender, id } (id)}
      <li>
        <b>{sender}: </b>
        {text}
      </li>
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
    flex-direction: column;
    overflow-y: auto;
    border: 1px solid lightgrey;
    border-bottom: 0;
  }

  span {
    display: flex;
    justify-content: space-between;
  }
</style>
