import { createInterface } from 'readline'
import { createReadStream } from 'fs'
import { dirname, resolve } from 'path'
import { argv } from 'process'

const USE_EXAMPLE = false

export const readInput = (each: (line: string) => void, final?: () => void) => {
  createInterface({
    input: createReadStream(resolve(dirname(argv[1]), `${USE_EXAMPLE ? 'example' : 'input'}.txt`)),
    crlfDelay: Infinity
  })
    .on('line', each)
    .on('close', () => final && final())
}

export const readAllInput = (listener: (lines: string[]) => void) => {
  const lines: string[] = []

  readInput(
    line => lines.push(line),
    () => listener(lines)
  )
}
