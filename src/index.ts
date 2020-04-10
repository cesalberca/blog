import { container } from './container.js'
import '/web_modules/router-slot.js'
import './ui/components/index.js'
import './ui/cesalberca-blog.js'
import './ui/theme/theming.js'
import './ui/pages/index.js'
import { TYPES } from './types.js'
import { Storage } from './application/state/storage.js'

const storage = container.get<Storage>(TYPES.STORAGE)
storage.setFirstValue()
storage.start().subscribe()
