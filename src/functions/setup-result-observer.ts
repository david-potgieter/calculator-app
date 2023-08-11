export function setupResultObserver(divElement: HTMLDivElement) {
  const getFontSize = (length: number) => {
    if (length <= 10) {
      return '3rem'
    } else if (length <= 15) {
      return '2rem'
    } else {
      return '1.2rem'
    }
  }

  const observerCallback = (
    mutationsList: MutationRecord[],
    _observer: MutationObserver
  ): void => {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        let length = (mutation.target as HTMLElement).textContent?.length || 0
        ;(mutation.target as HTMLElement).style.fontSize = getFontSize(length)
      }
    }
  }

  const config: MutationObserverInit = { childList: true, subtree: true }

  const observer = new MutationObserver(observerCallback)
  observer.observe(divElement, config)
}
