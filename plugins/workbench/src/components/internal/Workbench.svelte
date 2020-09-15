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
  import { Ref, Doc } from '@anticrm/core'
  import workbench, { Perspective } from '../..'
  import { find, getUIService } from '../../utils'
  import { getContext } from 'svelte'

  import Component from '@anticrm/platform-ui/src/components/Component.svelte'
  import PerspectiveNav from './PerspectiveNav.svelte'

  let perspectives: Perspective[] = []
  let current: Ref<Doc>

  const location = getUIService().getLocation()
  location.subscribe(loc => {
    current = loc.pathname.split('/')[2] as Ref<Doc>
  })

  find(workbench.class.Perspective, {}).then(p => { 
    perspectives = p 
  })

  $: component = perspectives.find(h => h._id === current)?.component
</script>

<div id="workbench">
 
  <nav>
    <PerspectiveNav { current } { perspectives }/>
  </nav>

  <main>
    { #if component}
      <Component is={ component }/>
    { /if}
  </main>

  <!-- <Spotlight /> -->
</div>

<style lang="scss">
  #workbench {
    display: flex;
    height: 100%;
  }
  
  nav {
    width: 48px;
    background-color: var(--theme-bg-color);
  }

  main {
    background-color: var(--theme-content-bg-color);
    width: 100%;
  }

</style>
