'use client'

import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export interface Column<T> {
  key: keyof T | string
  header: string
  render?: (value: any, row: T) => ReactNode
}

export interface TableProps<T> {
  columns: Column<T>[]
  rows: T[]
  className?: string
}

export const Table = <T extends Record<string, any>>({ columns, rows, className }: TableProps<T>) => {
  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            {columns.map(column => (
              <th key={column.key.toString()} className="py-3 px-4 text-left font-semibold text-foreground">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn('border-b border-border', rowIndex % 2 === 0 ? 'bg-muted/30' : 'bg-background')}
            >
              {columns.map(column => (
                <td key={column.key.toString()} className="py-3 px-4 text-foreground">
                  {column.render ? column.render(row[column.key as keyof T], row) : row[column.key as keyof T]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
