export type BinaryDigit = '0' | '1'

export type BinaryWord = BinaryDigit[]

export const invertBit = (bit: BinaryDigit): BinaryDigit =>
  bit === '0' ? '1' : '0'

export const invertBits = (bits: BinaryWord): BinaryWord =>
  Array.from(bits).map(invertBit)

export const mostCommonBit = (bits: string[]): BinaryDigit =>
  bits.filter(bit => bit === '0').length > bits.length / 2 ? '0' : '1'
