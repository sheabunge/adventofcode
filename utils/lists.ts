export const parseNumberList = (input: string, limit?: number): number[] =>
  input.split(/\s+/, limit).map(it => parseInt(it, 10))

export const sumOf = (numbers: number[]): number =>
  numbers.reduce((total, number) => total + number, 0)
