import { parseNumberList } from '../../utils/lists'
import { readAllInput } from '../../utils/input'
import { isSafe } from './part1'

const ORDINAL = ['first', 'second', 'third', 'fourth', 'fifth']

readAllInput(reports => {
  const safe = reports
    .map(parseNumberList)
    .filter(report => {
      if (isSafe(report)) {
        console.log(report.join(' '), '\tSafe without removing any level.')
        return true
      }

      for (let dampenIndex = 0; dampenIndex < report.length; dampenIndex++) {
        if (isSafe(report.filter((_, i) => i !== dampenIndex))) {
          console.log(report.join(' '), `\tSafe by removing the ${ORDINAL[dampenIndex]} level, ${report[dampenIndex]}.`)
          return true
        }
      }

      console.log(report.join(' '), '\tUnsafe regardless of which level is removed')
      return false
    })

  console.log(`\n${safe.length} are safe`)
})
