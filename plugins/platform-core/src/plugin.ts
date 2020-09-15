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

import type { Platform } from '@anticrm/platform'
import { Ref, Class, Doc, AnyLayout, Domain, Model, MODEL_DOMAIN, CoreProtocol, Tx, Space } from '@anticrm/core'

import type { CoreService } from '.'
import rpcService from './rpc'

import { writable, derived } from 'svelte/store'

/*!
 * Anticrm Platform™ Workbench Plugin
 * © 2020 Anticrm Platform Contributors. All Rights Reserved.
 * Licensed under the Eclipse Public License, Version 2.0
 */
export default async (platform: Platform): Promise<CoreService> => {

  let space: Space | null = null
  const spaceWritable = writable<Space | null>(space)
  const spaceReadable = derived(spaceWritable, space => space)

  const rpc = rpcService(platform)

  const coreProtocol: CoreProtocol = {
    find: (_class: Ref<Class<Doc>>, query: AnyLayout): Promise<Doc[]> => rpc.request('find', _class, query),
    findOne: (_class: Ref<Class<Doc>>, query: AnyLayout): Promise<Doc | undefined> => rpc.request('findOne', _class, query),
    tx: (tx: Tx): Promise<void> => rpc.request('tx', tx),
    loadDomain: (domain: string): Promise<Doc[]> => rpc.request('loadDomain', domain),
  }

  const model = new Model(MODEL_DOMAIN)
  model.loadModel(await coreProtocol.loadDomain(MODEL_DOMAIN))

  const domains = new Map<string, Domain>()
  domains.set(MODEL_DOMAIN, model)

  function find<T extends Doc> (_class: Ref<Class<T>>, query: AnyLayout): Promise<T[]> {
    const domainName = model.getDomain(_class)
    const domain = domains.get(domainName)
    if (domain) {
      return domain.find(_class, query)
    }
    throw new Error('domain not found: ' + domainName)
  }

  return {
    getSpace () { return spaceReadable },
    setSpace (_space: Space | null) { spaceWritable.set(space = _space) },
    find
  }

}
