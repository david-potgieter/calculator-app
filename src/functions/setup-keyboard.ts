import { ICalculator, OPERATION_ACTIONS } from '../types/app-types'
import { onlyDigits } from './calculator/helpers/only-digits'
import { selectOperator } from './calculator/helpers/which-operator'

export function setupKeyboard(document: Document, calculator: ICalculator) {
  const allowedActions = ['Delete', 'Backspace']
  const equalOperators = [
    'Enter',
    'NumpadEnter',
    OPERATION_ACTIONS.EQUAL_OPERATION,
  ]

  const allowedOperators: string[] = [
    OPERATION_ACTIONS.ADD_OPERATION,
    OPERATION_ACTIONS.SUBTRACT_OPERATION,
    OPERATION_ACTIONS.MULTIPLY_OPERATION,
    OPERATION_ACTIONS.DIVIDE_OPERATION,
    OPERATION_ACTIONS.EXPONENT_OPERATION,
  ]

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    event.preventDefault()
    switch (true) {
      case onlyDigits(event.key):
        calculator.appendDigit(event.key)
        break

      case allowedActions.includes(event.code):
        if (event.code === 'Delete') calculator.clear()
        if (event.code === 'Backspace') calculator.delete()
        break

      case equalOperators.includes(event.key):
        calculator.equals()
        break

      case allowedOperators.includes(event.key):
        const operation = selectOperator(event.key)
        if (!operation) return

        calculator.appendOperator(operation.action)
        break

      default:
        break
    }
  })
}
