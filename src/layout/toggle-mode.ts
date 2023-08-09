import { MODE } from '../config/consts'
import { moonHTML, sunHTML } from '../icons/icons'

export const modeToggleHTML = `
<div class="toggle-container">
  <div class="toggle-buttons-container">
    <button data-toggle="${MODE.MODE_OFF}" class="toggle-button toggle-button_off" type="button">${sunHTML}</button>
    <button data-toggle="${MODE.MODE_ON}" class="toggle-button toggle-button_on" type="button">${moonHTML}</button>
  </div>
</div>
`
