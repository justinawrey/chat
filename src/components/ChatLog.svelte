<script>
  import { chatStream } from "../globals";
</script>

<ul>
  {#each $chatStream as chat}
    <li>{chat}</li>
  {/each}
</ul>
