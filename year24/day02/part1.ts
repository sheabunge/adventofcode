import { readAllInput } from '../../utils'

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
    .map(line => line.split(' ').map(it => parseInt(it, 10)))
    .filter(report => isSafe(report))

  console.log(`${safe.length} are safe`)
})
