import { displayHTML } from './layout/display'
import { keyPadHTML } from './layout/keypad'
import { modeToggleHTML, setupToggleMode } from './layout/toggle-mode'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${modeToggleHTML}
    ${displayHTML}
    ${keyPadHTML}
`
setupToggleMode(document.querySelectorAll('[data-toggle]')!)
