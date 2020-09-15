<script lang="ts">
  import { Platform } from "@anticrm/platform";
  import { getContext } from "svelte";

  import ui, { AnyComponent } from "@anticrm/platform-ui";
  import Spinner from "./internal/Spinner.svelte";
  import Icon from "./Icon.svelte";

  export let is: AnyComponent;

  const platform = getContext("platform") as Platform
  $: component = platform.getResource(is)
</script>

{#await component}
  <Spinner />
{:then ctor}
  <svelte:component this={ctor} />
{:catch}
  <Icon icon={ui.icon.Error} clazz="icon-2x" />
{/await}
