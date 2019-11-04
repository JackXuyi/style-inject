export type StringInsertAt = 'top' | string

export type InsertAtType = 'ID' | 'CLASS' | 'TAG' | 'GLOABL'

export interface Option {
  insertAt?: StringInsertAt
  type?: InsertAtType
}
