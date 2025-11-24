'use client'

import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export interface Column<T> {
  key: keyof T | string
  header: string
  render?: (value: unknown, row: T) => ReactNode
}

export interface TableProps<T> {
  columns: Column<T>[]
  rows: T[]
  className?: string
}

export const Table = <T extends Record<string, unknown>>({ columns, rows, className }: TableProps<T>) => {
  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            {columns.map((column) => (
              <th key={column.key.toString()} className="py-3 px-4 text-left font-semibold text-foreground">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            const firstColKey = columns[0]?.key as keyof T | undefined
            const rowKey = String((firstColKey ? row[firstColKey] : undefined) ?? rowIndex)

            return (
              <tr
                key={rowKey}
                className={cn('border-b border-border', rowIndex % 2 === 0 ? 'bg-muted/30' : 'bg-background')}
              >
                {columns.map((column) => {
                  const value = row[column.key as keyof T]
                  const content = column.render ? column.render(value, row) : (value as unknown as ReactNode)
                  return (
                    <td key={column.key.toString()} className="py-3 px-4 text-foreground">
                      {content}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
