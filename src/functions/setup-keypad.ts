export function setupDigits(buttons: NodeListOf<Element>) {
  buttons.forEach((button) => {
    button.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement
      const number = target.innerText
      console.log(number)
    })
  })
}

export function setupActions(buttons: NodeListOf<Element>) {
  buttons.forEach((button) => {
    button.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement
      const action = target.getAttribute('data-action')
      console.log(action)
    })
  })
}

export function setupOperations(buttons: NodeListOf<Element>) {
  buttons.forEach((button) => {
    button.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement
      const action = target.getAttribute('data-operation')
      console.log(action)
    })
  })
}
