import { parseNumberList, sumOf } from '../../utils/lists'
import { readAllInput } from '../../utils/input'

readAllInput(lines => {
  const leftList: number[] = []
  const rightList: number[] = []
  const similarity: number[] = []

  for (const line of lines) {
    const [location1, location2] = parseNumberList(line, 2)
    leftList.push(location1)
    rightList.push(location2)
  }

  for (let i = 0; i < leftList.length; i++) {
    similarity.push(leftList[i] * rightList.filter(number => number === leftList[i]).length)
  }

  console.log(`total similarity score is ${sumOf(similarity)}`)
})
