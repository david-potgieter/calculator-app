import { Operand, Operation } from '../../types/app-types'
import { cleanupAndFlatten } from './helpers/cleanup-and-flatten'
import { convertToNotation } from './helpers/convert-to-notation'
import { formatDecimalInput } from './helpers/format-decimal-input'
import { PEMDAS } from './helpers/pemdas'
import { selectOperator } from './helpers/which-operator'

export class Calculator {
  result: string
  operandArr: Operand[] = []
  operandEl: HTMLDivElement
  resultEl: HTMLDivElement

  constructor(operandEl: HTMLDivElement, resultEl: HTMLDivElement) {
    this.result = '0'
    this.operandArr = []
    this.operandEl = operandEl
    this.resultEl = resultEl
    this.clear()
  }

  appendDigit(digit: string) {
    this.operandArr.push({
      type: 'digit',
      value: formatDecimalInput(digit, this.operandArr),
    })
    this.operandEl?.classList?.remove('display-current-operand_result')
    this.calculateResult()
    this.updateDisplays()
  }

  appendOperator(operation: string) {
    const operator = selectOperator(operation) as Operation
    if (this.operandArr.length === 0) return
    this.operandArr.push({ type: 'operator', value: operator.action })
    this.updateDisplays()
    this.calculateResult()
  }

  clear() {
    this.result = '0'
    this.operandArr = []
    this.updateDisplays()
  }

  delete() {
    if (this.operandArr.length > 1) {
      this.operandArr.pop()
      this.calculateResult()
      this.updateDisplays()
    } else {
      this.clear()
    }
  }

  calculateResult() {
    try {
      const input = cleanupAndFlatten(this.operandArr)
      const output = PEMDAS(input)
      this.result = output.toString()
    } catch (error) {
      this.operandArr = [{ type: 'error', value: 'ERR' }]
      this.resultEl.innerText = '0'
    }
  }

  equals() {
    this.operandArr = []
    this.operandEl.innerText = ''
    this.resultEl?.classList?.add('display-current-operand_result')
    this.resultEl?.style?.setProperty('font-size', '3rem')
  }

  updateDisplays() {
    const operandText = cleanupAndFlatten(this.operandArr)
    const displayText = convertToNotation(this.result)
    this.operandEl.innerText = operandText
    this.resultEl.innerText = displayText
  }
}
