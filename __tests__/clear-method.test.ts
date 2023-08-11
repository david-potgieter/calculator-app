import { beforeEach, describe, expect, test } from 'vitest'
import { Calculator } from '../src/functions/calculator/calculator-class'

describe('Calculator method: clear()', () => {
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

  test('resets all calculator values to their initial state when the clear method is invoked', () => {
    calculator.appendDigit('2')
    calculator.appendDigit('3')
    calculator.appendDigit('0')
    expect(calculator.result).toBe('230')
    expect(mockOperandEl).toMatchObject({ innerText: '230' })
    expect(mockResultEl).toMatchObject({ innerText: '230' })

    calculator.clear()
    expect(calculator.result).toBe('0')
    expect(mockOperandEl).toMatchObject({ innerText: '' })
    expect(mockResultEl).toMatchObject({ innerText: '0' })
  })

  // test('resets all calculator values to their initial state when the clear method is invoked', () => {
  //   calculator.currentOperand = ''
  //   calculator.result = '0'
  //   calculator.clear()
  //   expect(calculator.currentOperand).toBe('')
  //   expect(calculator.result).toBe('0')
  // })
})
