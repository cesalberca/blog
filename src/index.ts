import { container } from './container.js'
import '/web_modules/router-slot.js'
import './ui/components/index.js'
import './ui/cesalberca-blog.js'
import './ui/theme/theming.js'
import { TYPES } from './types.js'
import { Persistence } from './application/state/persistence.js'

const storage = container.get<Persistence>(TYPES.PERSISTENCE)
storage.setFirstValue()
storage.start().subscribe()
