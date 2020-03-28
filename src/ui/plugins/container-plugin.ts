import { container } from '../../container'

export default ({}, inject: (key: string, value: any) => void) => {
  inject('container', container)
}
