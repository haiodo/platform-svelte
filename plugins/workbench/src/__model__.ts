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

import { Ref, MODEL_DOMAIN, StringProperty, Space } from '@anticrm/core'
import { Builder, extendIds } from '@anticrm/model'
import { IntlString } from '@anticrm/platform-i18n'

import core from '@anticrm/platform-core/src/__model__'
import presentation from '@anticrm/presentation/src/__model__'

import _workbench, { Perspective } from '.'

const workbench = extendIds(_workbench, {
  component: {
  },
  perspective: {
    Default: '' as Ref<Perspective>
  },
  space: {
    General: '' as Ref<Space>,
    Random: '' as Ref<Space>
  }
})

export function model (S: Builder) {
  S.createClass(workbench.class.Perspective, core.class.Doc, {
    label: S.attr(core.class.String, {}),
    icon: S.attr(core.class.Type, {}),
    component: S.attr(core.class.Type, {})
  }, MODEL_DOMAIN)

  S.createDocument(workbench.class.Perspective, {
    label: 'Default' as StringProperty,
    icon: workbench.icon.DefaultPerspective,
    component: workbench.component.DefaultPerspective
  }, workbench.perspective.Default)

  S.createDocument(core.class.Space, {
  }, workbench.space.General)

  S.mixin(workbench.space.General, presentation.mixin.UXObject, {
    label: 'Общее' as IntlString
  })

  S.createDocument(core.class.Space, {
  }, workbench.space.Random)

  S.mixin(workbench.space.Random, presentation.mixin.UXObject, {
    label: 'Всякое' as IntlString
  })

}
