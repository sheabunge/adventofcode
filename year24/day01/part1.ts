import { parseNumberList, sumOf } from '../../utils/lists'
import { readAllInput } from '../../utils/input'

readAllInput(lines => {
  const list1: number[] = []
  const list2: number[] = []
  const distances: number[] = []

  for (const line of lines) {
    const [location1, location2] = parseNumberList(line, 2)
    list1.push(location1)
    list2.push(location2)
  }

  list1.sort()
  list2.sort()

  for (let i = 0; i < list1.length; i++) {
    distances.push(Math.abs(list1[i] - list2[i]))
  }

  console.log(`total distance is ${sumOf(distances)}`)
})
