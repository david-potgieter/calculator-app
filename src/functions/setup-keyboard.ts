export function setupKeyboardDigits(document: Document) {
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (
      event.code.includes('Digit') ||
      event.code.includes('Numpad') ||
      event.code.includes('Period')
    ) {
      console.log(event.key, event.code)
    }
  })
}

export function setupKeyboardActions(document: Document) {
  const allowedActions = ['Delete', 'Backspace']
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (allowedActions.includes(event.code)) {
      console.log(event.key, event.code)
    }
  })
}

export function setupKeyboardOperations(document: Document) {
  const allowedActions = [
    'Equal',
    'Enter',
    'Minus',
    'Slash',
    'Asterisk',
    'Plus',
  ]
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (allowedActions.includes(event.code)) {
      console.log(event.key, event.code)
    }
  })
}
