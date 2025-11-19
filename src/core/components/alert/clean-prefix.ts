import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react'

export function stripPrefix(text: string): string {
  return text.replace(/^\s*\[![A-Za-z]+\]\s*/, '')
}

export function cleanPrefix(children: ReactNode): ReactNode {
  const array = Children.toArray(children) as ReactNode[]
  let cleanedFirst = false

  const newChildren: ReactNode[] = array.map((node): ReactNode => {
    if (!cleanedFirst && typeof node === 'string') {
      cleanedFirst = true
      return stripPrefix(node)
    }

    if (isValidElement(node)) {
      const element = node as ReactElement<{ children?: ReactNode }>
      const elementChildren = element.props.children

      if (!elementChildren) return element

      return cloneElement(element, {
        children: cleanPrefix(elementChildren),
      })
    }

    return node
  })

  return newChildren.length === 1 ? newChildren[0] : newChildren
}
