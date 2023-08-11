import { MODE } from '../types/app-types'

export function setupToggleMode(toggles: NodeListOf<Element>) {
  toggles.forEach((button) => {
    button.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement
      const modeSelected = target?.getAttribute('data-toggle')
      const isDark = document.body.classList.contains('dark_mode')
      switch (true) {
        case modeSelected === MODE.MODE_ON && !isDark:
          document.body.classList.add('dark_mode')
          break
        case modeSelected === MODE.MODE_OFF && isDark:
          document.body.classList.remove('dark_mode')
          break
        default:
          break
      }
    })
  })
}
