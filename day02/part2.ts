import { readInput } from '../utils'

let depth = 0
let position = 0
let aim = 0

console.log('command\tamount\taim\tdepth\tposition')

readInput(
  line => {
    const [command, amountText] = line.split(' ')
    const amount = Number(amountText)

    if (command === 'forward') {
      position += amount
      depth += aim * amount
    } else if (command === 'down') {
      aim += amount
    } else if (command === 'up') {
      aim -= amount
    }

    console.log(`${command}\t${amount}\t${aim}\t${depth}\t${position}`)
  },
  () => {
    console.log(depth * position)
  }
)

