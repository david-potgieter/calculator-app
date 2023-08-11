import { ACTIONS, ICalculator, OPERATION_LABELS } from '../types/app-types'

export function setupDigits(
  buttons: NodeListOf<Element>,
  calculator: ICalculator
) {
  buttons.forEach((button) => {
    button.addEventListener('click', (event: Event) => {
      const { innerText } = event.target as HTMLElement
      calculator.appendDigit(innerText)
    })
  })
}

export function setupActions(
  buttons: NodeListOf<Element>,
  calculator: ICalculator
) {
  buttons.forEach((button) => {
    button.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement
      const action = target.getAttribute('data-action')
      if (action === ACTIONS.CLEAR_ACTION) calculator.clear()
      if (action === ACTIONS.DELETE_ACTION) calculator.delete()
    })
  })
}

export function setupOperations(
  buttons: NodeListOf<Element>,
  calculator: ICalculator
) {
  buttons.forEach((button) => {
    button.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement
      const action = target.getAttribute('data-operation') as string
      if (action === OPERATION_LABELS.EQUAL_OPERATION) {
        calculator.equals()
      } else {
        calculator.appendOperator(action)
      }
    })
  })
}
