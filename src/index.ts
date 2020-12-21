import { container } from './container'
import 'router-slot'
import './ui/components/index'
import './ui/cesalberca-blog'
import './ui/theme/theming'
import { TYPES } from './types'
import { Persistence } from './application/state/persistence'

const storage = container.get<Persistence>(TYPES.PERSISTENCE)
storage.setFirstValue()
storage.start().subscribe()
