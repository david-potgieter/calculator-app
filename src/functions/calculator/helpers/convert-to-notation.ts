export function convertToNotation(text: string) {
  const maxCnt = 60
  if (text.includes('e') || text === 'Infinity')
    return text === 'Infinity' ? '∞' : text
  if (text.length < maxCnt) return parseFloat(text).toLocaleString()
  const num = parseFloat(text)
  const firstNonZero = text.search(/[1-9]/)
  const exponent = text.length - firstNonZero - 1
  const baseNum = num / Math.pow(10, exponent)
  const maxBaseLength = maxCnt - (exponent.toString().length + 1)
  const baseNumStr = Number(baseNum.toPrecision(maxBaseLength - 1)).toString()

  return `${baseNumStr}e${exponent}`
}
