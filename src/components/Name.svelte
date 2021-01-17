<script>
  import name from "../stores/name.js";
  let value = "";

  function chooseName(e) {
    if (e.key === "Enter" && value) {
      $name = value;
      value = "";
    }
  }
</script>

<div id="name-input">
  <p>Name: {$name}</p>
  <input
    type="text"
    placeholder="Choose name"
    bind:value
    on:keypress={chooseName}
  />
</div>

<style>
  p {
    margin: 0 0 0.5rem 0;
  }
</style>
