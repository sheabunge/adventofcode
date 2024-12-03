// --- Day 3: Binary Diagnostic ---

import { readAllInput } from '../../utils'
import { arrayColumn, invertBits, mostCommonBit } from './utils'

const reduceToMostCommon = (report: string[]) =>
  Array.from(report[0]).map((_, index) => mostCommonBit(arrayColumn(report, index))).join('')

readAllInput(report => {
  const gamma = reduceToMostCommon(report)
  const epsilon = invertBits(gamma)
  const powerConsumption = parseInt(gamma, 2) * parseInt(epsilon, 2)
  console.log(powerConsumption)
})
