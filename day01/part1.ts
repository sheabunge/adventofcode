import { readAllInput } from '../utils'

readAllInput(lines => {
  let [prev, ...depths] = lines.map(Number)
  let increaseCount = 0

  for (const depth of depths) {
    if (depth > prev) {
      increaseCount++
    }
    prev = depth
  }

  console.log(increaseCount)
})
