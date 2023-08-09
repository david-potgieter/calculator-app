import { moonHTML, sunHTML } from '../icons/icons'

export const modeToggleHTML = `
<div class="toggle-container">
  <div class="toggle-buttons-container">
    <button data-toggle="mode-off" class="toggle-button toggle-button_off" type="button">${sunHTML}</button>
    <button data-toggle="mode-on" class="toggle-button toggle-button_on" type="button">${moonHTML}</button>
  </div>
</div>
`

export function setupToggleMode(toggles: NodeListOf<Element>) {
  toggles.forEach((button) => {
    button.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement
      const modeSelected = target?.getAttribute('data-toggle')
      const isDark = document.body.classList.contains('dark_mode')
      switch (true) {
        case modeSelected === 'mode-on' && !isDark:
          document.body.classList.add('dark_mode')
          break
        case modeSelected === 'mode-off' && isDark:
          document.body.classList.remove('dark_mode')
          break
        default:
          break
      }
    })
  })
}
