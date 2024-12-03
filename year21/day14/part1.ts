import { DEBUG } from '../../constants'
import { readAllInput } from '../../utils/input'

const STEPS = 40

const countElements = <T>(items: T[]) => {
  const counts = new Map<T, number>()

  items.forEach(item => {
    counts.set(item, (counts.get(item) ?? 0) + 1)
  })

  return counts
}

readAllInput(lines => {
  const [template, _, ...ruleStrings] = lines
  console.log(`Template:\t\t${template}`)

  const rules = new Map(ruleStrings.map(rule => <[string, string]> rule.split(' -> ', 2)))
  let pairs = template

  for (let step = 1; step <= STEPS; step++) {
    let result = ''

    for (let i = 0; i < pairs.length - 1; i++) {
      const pair = pairs[i] + pairs[i + 1]
      result += pairs[i] + (rules.get(pair) ?? '')
    }

    result += pairs[pairs.length - 1]
    if (DEBUG) {
      console.log(`After step ${step}:\t${result}`)
    } else {
      console.log(`step ${step} completed`)
    }
    pairs = result
  }

  console.log('counting elements')

  const counts = countElements(Array.from(pairs))
  console.log(counts)

  let mostCommonQuantity = undefined
  let leastCommonQuantity = undefined

  for (const [_item, count] of Array.from(counts)) {
    if (mostCommonQuantity === undefined || mostCommonQuantity < count) {
      mostCommonQuantity = count
    }

    if (leastCommonQuantity === undefined || leastCommonQuantity > count) {
      leastCommonQuantity = count
    }
  }

  if (mostCommonQuantity && leastCommonQuantity) {
    console.log(mostCommonQuantity - leastCommonQuantity)
  }
})
