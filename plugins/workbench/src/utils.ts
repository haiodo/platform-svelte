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

import { Ref, Class, Doc, AnyLayout } from '@anticrm/core'
import { Platform } from '@anticrm/platform'
import { getContext } from 'svelte'
import core from '@anticrm/platform-core'

export function find<T extends Doc> (_class: Ref<Class<T>>, query: AnyLayout): Promise<T[]> {
  const platform = getContext('platform') as Platform

  return platform.getPlugin(core.id)
    .then(coreService => coreService.find(_class, query))
}
