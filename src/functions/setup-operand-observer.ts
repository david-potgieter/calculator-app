export function setupOperandObserver(divElement: HTMLDivElement) {
  const truncateString = (input: string, maxLength: number = 18) => {
    if (input.length <= maxLength) return input
    const visibleLength: number = maxLength - 3
    return `...${input.slice(-visibleLength)}`
  }

  const observerCallback = (
    mutationsList: MutationRecord[],
    _observer: MutationObserver
  ): void => {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const targetElement = mutation.target as HTMLElement
        const currentOperand = targetElement.innerText
        const truncatedOperand = truncateString(currentOperand)
        if (currentOperand !== truncatedOperand) {
          ;(mutation.target as HTMLElement).innerText = truncateString(
            targetElement.innerText
          )
        }
      }
    }
  }

  const config: MutationObserverInit = { childList: true, subtree: true }

  const observer = new MutationObserver(observerCallback)
  observer.observe(divElement, config)
}
