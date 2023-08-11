import {
  addHTML,
  divideHTML,
  equalHTML,
  exponentHTML,
  multiplyHTML,
  subtractHTML,
} from '../icons/icons'
import { ACTIONS, OPERATION_LABELS } from '../types/app-types'

export const keyPadHTML = `
<div class="keypad-container">
    <div class="keypad-grid">
        <button data-action="${ACTIONS.CLEAR_ACTION}" class="keypad-button keypad-button-action" type="button">AC</button>
        <button data-action="${ACTIONS.DELETE_ACTION}" class="keypad-button keypad-button-action" type="button">C</button>
        <button data-operation="${OPERATION_LABELS.EXPONENT_OPERATION_LABEL}" class="keypad-button keypad-button-operator" type="button">${exponentHTML}</button>
        <button data-operation="${OPERATION_LABELS.DIVIDE_OPERATION_LABEL}" class="keypad-button keypad-button-operator" type="button">${divideHTML}</button>
        <button data-digit class="keypad-button keypad-button-number" type="button">7</button>
        <button data-digit class="keypad-button keypad-button-number" type="button">8</button>
        <button data-digit class="keypad-button keypad-button-number" type="button">9</button>
        <button data-operation="${OPERATION_LABELS.MULTIPLY_OPERATION_LABEL}" class="keypad-button keypad-button-operator" type="button">${multiplyHTML}</button>
        <button data-digit class="keypad-button keypad-button-number" type="button">4</button>
        <button data-digit class="keypad-button keypad-button-number" type="button">5</button>
        <button data-digit class="keypad-button keypad-button-number" type="button">6</button>
        <button data-operation="${OPERATION_LABELS.SUBTRACT_OPERATION_LABEL}" class="keypad-button keypad-button-operator" type="button">${subtractHTML}</button>
        <button data-digit class="keypad-button keypad-button-number" type="button">1</button>
        <button data-digit class="keypad-button keypad-button-number" type="button">2</button>
        <button data-digit class="keypad-button keypad-button-number" type="button">3</button>
        <button data-operation="${OPERATION_LABELS.ADD_OPERATION_LABEL}" class="keypad-button keypad-button-operator" type="button">${addHTML}</button>
        <button class="keypad-button keypad-button-placeholder" />
        <button data-digit class="keypad-button keypad-button-number" type="button">0</button>
        <button data-digit class="keypad-button keypad-button-number" type="button">.</button>
        <button data-operation="${OPERATION_LABELS.EQUAL_OPERATION}" class="keypad-button keypad-button-operator" type="button">${equalHTML}</button>
    </div>
</div>
`
