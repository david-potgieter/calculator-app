import { beforeEach, describe, expect, test } from 'vitest'
import { Calculator } from '../src/functions/calculator/calculator-class'
import { OPERATION_ACTIONS } from '../src/types/app-types'

describe('Calculator method: appendOperator()', () => {
  let calculator: Calculator
  const mockOperandEl: HTMLDivElement = {
    textContent: '',
  } as unknown as HTMLDivElement
  const mockResultEl: HTMLDivElement = {
    textContent: '',
  } as unknown as HTMLDivElement
  beforeEach(() => {
    calculator = new Calculator(mockOperandEl, mockResultEl)
  })

  test('sets operator correctly', () => {
    calculator.appendOperator(OPERATION_ACTIONS.ADD_OPERATION)
    expect(calculator.operandArr).toMatchObject([])
    expect(mockOperandEl).toMatchObject({ innerText: '' })
    expect(mockResultEl).toMatchObject({ innerText: '0' })
  })
})
