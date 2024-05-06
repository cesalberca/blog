import type { FC, PropsWithChildren } from 'react'

export const TalkSection: FC<PropsWithChildren<{ title: string; description?: string }>> = ({
  title,
  description,
  children,
}) => {
  return (
    <section>
      <h3>
        <strong>{title}</strong>
      </h3>
      {description !== undefined ? <p>{description}</p> : children}
    </section>
  )
}
