import { Container } from '../../container'

export default ({}, inject: (key: string, value: any) => void) => {
  inject('container', Container.instance())
}
