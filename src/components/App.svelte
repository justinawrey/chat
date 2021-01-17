<script>
  import Name from "./Name.svelte";
  import ChatBox from "./ChatBox.svelte";
</script>

<Name />
<ChatBox />

<style>
  :global(#name-input) {
    margin-right: 2rem;
  }
</style>
