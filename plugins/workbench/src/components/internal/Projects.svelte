<!--
// Copyright © 2020 Anticrm Platform Contributors.
// 
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// 
// See the License for the specific language governing permissions and
// limitations under the License.
-->

<script lang="ts">
  import { Ref, Space, Doc } from '@anticrm/core'
  import { find, getUIService } from '../../utils'

  import LinkTo from '@anticrm/platform-ui/src/components/LinkTo.svelte'

  let location: string[]

  const locationStore = getUIService().getLocation()
  locationStore.subscribe(loc => {
    location = loc.pathname.split('/')
  })

  $: space = location[3] as Ref<Space>

</script>

<div class="caption-3">Пространства</div>
<div class="project" class:selected={!space}>
  <LinkTo href={'/' + location[1] + '/' + location[2]}>Все</LinkTo>
</div>
<!-- <div v-for="s in spaces" :key="s._id" class="project" :class:selected={s._id === space}>
  <a href="#" @click.prevent="$emit('navigate', s._id)">#{s.label}</a>
</div> -->

<!-- <div class="caption-3">Тип</div>
<div class="project">
  <a href="#" @click.prevent="$emit('update:type', undefined)">Все</a>
</div>
<div v-for="type in types" :key="type._id" class="project">
  <a href="#" @click.prevent="$emit('update:type', type.itemClass)">{type.label}</a>
</div> -->

<style lang="scss">

.project {
  font-family: Raleway;
  padding: 0.5em;

  &.selected {
    // color: var(--theme-content-bg-color);
    background-color: var(--theme-content-color-dark);
  }

  a {
    text-decoration: none;
  }
}
</style>