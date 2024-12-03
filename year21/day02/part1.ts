import { readInput } from '../../utils/input'

let depth = 0
let position = 0

console.log('command\tamount\tdepth\tposition')

readInput(
  line => {
    const [command, amountText] = line.split(' ')
    const amount = Number(amountText)

    if (command === 'forward') {
      position += amount
    } else if (command === 'down') {
      depth += amount
    } else if (command === 'up') {
      depth -= amount
    }

    console.log(`${command}\t${amount}\t${depth}\t${position}`)
  },
  () => {
    console.log(depth * position)
  }
)
