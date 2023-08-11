import { OPERATIONS_CONFIG } from '../../../types/app-types'

export function applyOperation(operation: string, b: number, a: number) {
  switch (operation) {
    case OPERATIONS_CONFIG[0].action:
      return a + b
    case OPERATIONS_CONFIG[1].action:
      return a - b
    case OPERATIONS_CONFIG[2].action:
      return a * b
    case OPERATIONS_CONFIG[3].action:
      if (b !== 0) return a / b
      else throw new Error('Division by zero')
    case OPERATIONS_CONFIG[4].action:
      return a ** b
    default:
      return 0
  }
}
