import { parseNumberList } from '../../utils/lists'
import { readAllInput } from '../../utils/input'

export const isSafe = (report: number[]): boolean => {
  let isDecreasing = true
  let isIncreasing = true

  for (let i = 0; i < report.length - 1; i++) {
    const [first, second] = [report[i], report[i + 1]]

    if (isDecreasing && first < second) {
      isDecreasing = false
    }

    if (isIncreasing && first > second) {
      isIncreasing = false
    }

    const difference = Math.abs(first - second)

    if ((!isIncreasing && !isDecreasing) || difference < 1 || difference > 3) {
      return false
    }
  }

  return true
}

readAllInput(reports => {

  const safe = reports
    .map(parseNumberList)
    .filter(report => isSafe(report))

  console.log(`${safe.length} are safe`)
})
