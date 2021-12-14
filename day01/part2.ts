import { readAllInput } from '../utils'

readAllInput(lines => {
  let increaseCount = 0
  const depths = lines.map(Number)

  const calcWindow = (index: number) =>
    depths[index - 2] + depths[index - 1] + depths[index]

  console.log(calcWindow(0), '(N/A - no previous sum)')

  for (let i = 3; i < depths.length; i++) {
    const current = calcWindow(i)
    const previous = calcWindow(i - 1)

    console.log(current, current > previous ? '(increased) *' : (current < previous ? '(decreased)' : '(no change)'))

    if (current > previous) {
      increaseCount++
    }
  }

  console.log(increaseCount)
})
