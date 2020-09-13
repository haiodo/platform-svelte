//
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
//

import { createPlatform } from '@anticrm/platform'

import ui from '@anticrm/platform-ui'

import ErrorPage from './components/ErrorPage.svelte'

const platform = createPlatform()

platform.addLocation(ui, () => import(/* webpackChunkName: "platform-ui" */ '@anticrm/platform-ui/src/plugin'))

async function boot (): Promise<void> {
  const uiService = await platform.getPlugin(ui.id)
  uiService.createApp(document.body)
}

boot().catch(err => {
  new ErrorPage({ target: document.body, props: { error: err.message } })
})
