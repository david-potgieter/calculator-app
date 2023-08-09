import {
  addHTML,
  divideHTML,
  equalHTML,
  exponentHTML,
  multiplyHTML,
  subtractHTML,
} from '../icons/icons'

export const keyPadHTML = `
<div class="keypad-container">
    <div class="keypad-grid">
        <button class="keypad-button keypad-button-action" type="button">AC</button>
        <button class="keypad-button keypad-button-action" type="button">C</button>
        <button class="keypad-button keypad-button-action" type="button">${exponentHTML}</button>
        <button class="keypad-button keypad-button-operator" type="button">${divideHTML}</button>
        <button class="keypad-button keypad-button-number" type="button">7</button>
        <button class="keypad-button keypad-button-number" type="button">8</button>
        <button class="keypad-button keypad-button-number" type="button">9</button>
        <button class="keypad-button keypad-button-operator" type="button">${multiplyHTML}</button>
        <button class="keypad-button keypad-button-number" type="button">4</button>
        <button class="keypad-button keypad-button-number" type="button">5</button>
        <button class="keypad-button keypad-button-number" type="button">6</button>
        <button class="keypad-button keypad-button-operator" type="button">${subtractHTML}</button>
        <button class="keypad-button keypad-button-number" type="button">1</button>
        <button class="keypad-button keypad-button-number" type="button">2</button>
        <button class="keypad-button keypad-button-number" type="button">3</button>
        <button class="keypad-button keypad-button-operator" type="button">${addHTML}</button>
        <button class="keypad-button keypad-button-placeholder" />
        <button class="keypad-button keypad-button-number" type="button">0</button>
        <button class="keypad-button keypad-button-number" type="button">.</button>
        <button class="keypad-button keypad-button-operator" type="button">${equalHTML}</button>
    </div>
</div>
`

export function setupKeypadButtons(buttons: NodeListOf<Element>) {
  console.log('buttons', buttons)
}
