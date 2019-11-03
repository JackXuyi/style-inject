export type StringInsertAt = 'top' | string

export type FunInsertAt = () => HTMLStyleElement

export interface Option {
  insertAt?: StringInsertAt | FunInsertAt
}
