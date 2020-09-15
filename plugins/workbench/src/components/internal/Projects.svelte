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
  import { findCast, getUIService } from '../../utils'
  import core from '@anticrm/platform-core'
  import presentation, { UXObject } from '@anticrm/presentation'

  import LinkTo from '@anticrm/platform-ui/src/components/LinkTo.svelte'

  let location: string[]

  const locationStore = getUIService().getLocation()
  locationStore.subscribe(loc => {
    location = loc.pathname.split('/')
  })

  $: space = location[3] as Ref<Space>

  let spaces: UXObject[] = []
  
  findCast(core.class.Space, {}, presentation.mixin.UXObject).then(docs => {spaces = docs})

</script>

<div class="caption-3">Пространства</div>
<div class="project" class:selected={!space}>
  <LinkTo href={'/' + location[1] + '/' + location[2]}><b>Все</b></LinkTo>
</div>
{ #each spaces as s (s._id) }
  <div class="project" class:selected={s._id === space}>
    <LinkTo href={'/' + location[1] + '/' + location[2] + '/' + s._id}>#{s.label}</LinkTo>
  </div>
{ /each }

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