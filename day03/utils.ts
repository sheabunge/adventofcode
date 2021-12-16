export type BinaryDigit = '0' | '1'

export type BinaryWord = ArrayLike<BinaryDigit>

export const invertBit = (bit: BinaryDigit) => bit === '0' ? '1' : '0'

export const invertBits = (bits: BinaryWord) => Array.from(bits).map(invertBit).join('')

export const arrayColumn = <U>(list: Array<ArrayLike<U>>, index: number) => list.map(row => row[index])

export const mostCommonBit = (bits: string[]) => bits.filter(bit => bit === '0').length > bits.length / 2 ? '0' : '1'
