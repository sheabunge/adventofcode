// --- Day 3: Binary Diagnostic ---

import { readAllInput } from '../../utils'
import { arrayColumn, invertBit, mostCommonBit } from './utils'

const reduceToMostCommon = (report: string[], invert = false) => {
  for (let index = 0; report.length > 1 && index < report[0].length; index++) {
    const mostCommon = mostCommonBit(arrayColumn(report, index))
    report = report.filter(row => row[index] === (invert ? invertBit(mostCommon) : mostCommon))
  }
  return report[0]
}

const reduceToLeastCommon = (report: string[]) => reduceToMostCommon(report, true)

readAllInput(report => {
  const oxygenGeneratorRating = reduceToMostCommon(report)
  const c02ScrubberRating = reduceToLeastCommon(report)

  console.log('oxygen generator rating:', oxygenGeneratorRating, parseInt(oxygenGeneratorRating, 2))
  console.log('CO2 scrubber rating:', c02ScrubberRating, parseInt(c02ScrubberRating, 2))

  console.log(parseInt(oxygenGeneratorRating, 2) * parseInt(c02ScrubberRating, 2))
})
