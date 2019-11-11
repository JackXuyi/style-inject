type StringInsertAt = 'top' | string

type InsertAtType = 'ID' | 'CLASS' | 'TAG' | 'GLOABL'

interface Option {
  insertAt?: StringInsertAt
  type?: InsertAtType
}

declare function inject(css: string, option: Option): void

export default inject
