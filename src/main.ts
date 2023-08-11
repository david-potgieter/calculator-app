import { Calculator } from './functions/calculator/calculator-class'
import { setupKeyboard } from './functions/setup-keyboard'
import {
  setupActions,
  setupDigits,
  setupOperations,
} from './functions/setup-keypad'
import { setupOperandObserver } from './functions/setup-operand-observer'
import { setupResultObserver } from './functions/setup-result-observer'
import { setupToggleMode } from './functions/setup-toggle-mode'
import { displayHTML } from './layout/display'
import { keyPadHTML } from './layout/keypad'
import { modeToggleHTML } from './layout/toggle-mode'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${modeToggleHTML}
    ${displayHTML}
    ${keyPadHTML}
`

const calculator = new Calculator(
  document.querySelector<HTMLDivElement>('[data-operand]')!,
  document.querySelector<HTMLDivElement>('[data-result]')!
)

setupKeyboard(document!, calculator)
setupResultObserver(document.querySelector<HTMLDivElement>('[data-result]')!)
setupOperandObserver(document.querySelector<HTMLDivElement>('[data-operand]')!)
setupToggleMode(document.querySelectorAll('[data-toggle]')!)
setupDigits(document.querySelectorAll('[data-digit]')!, calculator)
setupActions(document.querySelectorAll('[data-action]')!, calculator)
setupOperations(document.querySelectorAll('[data-operation]')!, calculator)
