import { beforeEach, describe, expect, test } from 'vitest'
import { Calculator } from '../src/functions/calculator/calculator-class'
import { OPERATION_ACTIONS } from '../src/types/app-types'

describe('Calculator method: delete()', () => {
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

  test('deletes the last digit when multiple digits are present', () => {
    calculator.appendDigit('1')
    calculator.appendDigit('6')
    expect(calculator.result).toBe('16')
    expect(mockOperandEl).toMatchObject({ innerText: '16' })
    expect(mockResultEl).toMatchObject({ innerText: '16' })

    calculator.delete()
    expect(calculator.result).toBe('1')
    expect(mockOperandEl).toMatchObject({ innerText: '1' })
    expect(mockResultEl).toMatchObject({ innerText: '1' })
  })

  test('deletes the last digit if it contains a decimal "0.2"', () => {
    calculator.appendDigit('2')
    expect(calculator.result).toBe('2')
    calculator.appendOperator(OPERATION_ACTIONS.ADD_OPERATION)
    calculator.appendDigit('.')
    calculator.appendDigit('3')
    expect(calculator.result).toBe('2.3')
    calculator.delete()
    expect(calculator.result).toBe('2')
    calculator.delete()
    expect(calculator.result).toBe('2')
    expect(mockOperandEl).toMatchObject({ innerText: '2+' })
    expect(mockResultEl).toMatchObject({ innerText: '2' })
  })

  test('deletes the last character of currentOperand when it is an operator "2 +"', () => {
    calculator.appendDigit('2')
    expect(calculator.result).toBe('2')
    calculator.appendOperator(OPERATION_ACTIONS.ADD_OPERATION)
    expect(mockOperandEl).toMatchObject({ innerText: '2+' })
    expect(mockResultEl).toMatchObject({ innerText: '2' })
    calculator.delete()
    expect(mockOperandEl).toMatchObject({ innerText: '2' })
    expect(mockResultEl).toMatchObject({ innerText: '2' })
  })

  test('deletes the last character of currentOperand when it affects the calculation "2 + 20"', () => {
    calculator.appendDigit('2')
    expect(calculator.result).toBe('2')
    calculator.appendOperator(OPERATION_ACTIONS.ADD_OPERATION)
    calculator.appendDigit('2')
    calculator.appendDigit('0')
    expect(calculator.result).toBe('22')
    expect(mockOperandEl).toMatchObject({ innerText: '2+20' })
    expect(mockResultEl).toMatchObject({ innerText: '22' })

    calculator.delete()
    expect(calculator.result).toBe('4')
    expect(mockOperandEl).toMatchObject({ innerText: '2+2' })
    expect(mockResultEl).toMatchObject({ innerText: '4' })
  })

  test('clears the calculator when currentOperand is 1', () => {
    calculator.appendDigit('1')
    expect(calculator.result).toBe('1')
    expect(mockOperandEl).toMatchObject({ innerText: '1' })
    expect(mockResultEl).toMatchObject({ innerText: '1' })
    calculator.delete()
    expect(calculator.result).toBe('0')
    expect(mockOperandEl).toMatchObject({ innerText: '' })
    expect(mockResultEl).toMatchObject({ innerText: '0' })
  })
})
