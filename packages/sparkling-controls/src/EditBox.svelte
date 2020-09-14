<script lang="ts">
  export let value: string;
  export let name: string;
  export let placeholder: string;
  export let type: string;
</script>

<style lang="scss">
  .edit-box {
    border: 1px solid var(--theme-separator-color);
    border-radius: 0.5em;
    padding: 0.5em 0.75em;
    background-color: var(--theme-nav-color);
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: var(--theme-highlight-color);
    }
  }
</style>

<input {name} {placeholder} {type} {value} class="edit-box" />
