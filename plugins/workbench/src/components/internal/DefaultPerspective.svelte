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
  import Projects from './Projects.svelte'
</script>

<div class="workbench-perspective">
  <div class="projects">
    <Projects />
  </div>
  <div class="main">
    <div class="main-content">
      <!-- <widget :_class="type" :space="space" :component="component" @open="open" /> -->
    </div>
    <div class="input-control">
      <!-- <InputControl @message="message" /> -->
    </div>
  </div>

  <aside>
    <!-- <DetailsForm v-if="details" :_class="details._class" :_id="details._id" @done="done" /> -->
  </aside>
</div>

<style lang="scss">

.workbench-perspective {
  display: flex;
  height: 100%;
}

.projects {
  padding: 1em;
  width: 20em;

  border-right: 1px solid var(--theme-separator-color);
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;

  .main-content {
    flex-grow: 2;
  }

  .input-control {
    padding: 1em;
    max-height: 400px;
  }
}

aside {
  background-color: var(--theme-nav-color);
  border-left: 1px solid var(--theme-separator-color);
}
</style>

