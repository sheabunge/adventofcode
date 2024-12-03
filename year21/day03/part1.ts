// --- Day 3: Binary Diagnostic ---

import { readAllInput } from '../../utils/input'
import { arrayColumn } from '../../utils/lists'
import { invertBits, mostCommonBit } from './utils'
import type { BinaryDigit } from './utils'

const reduceToMostCommon = (report: string[]): BinaryDigit[] =>
  Array.from(report[0]).map((_, index) => mostCommonBit(arrayColumn(report, index)))

readAllInput(report => {
  const gamma = reduceToMostCommon(report)
  const epsilon = invertBits(gamma)
  const powerConsumption = parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2)
  console.log(powerConsumption)
})
