import {
  setupKeyboardActions,
  setupKeyboardDigits,
  setupKeyboardOperations,
} from './functions/setup-keyboard'
import {
  setupActions,
  setupDigits,
  setupOperations,
} from './functions/setup-keypad'
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
setupKeyboardDigits(document)
setupKeyboardActions(document)
setupKeyboardOperations(document)
setupToggleMode(document.querySelectorAll('[data-toggle]')!)
setupDigits(document.querySelectorAll('[data-digit]')!)
setupActions(document.querySelectorAll('[data-action]')!)
setupOperations(document.querySelectorAll('[data-operation]')!)
