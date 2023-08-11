import { beforeEach, describe, expect, test } from 'vitest'
import { Calculator } from '../src/functions/calculator/calculator-class'
import { OPERATION_ACTIONS } from '../src/types/app-types'

describe('Calculator()', () => {
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

  test('Basic calculator flow test', () => {
    calculator.appendDigit('6')
    calculator.appendOperator(OPERATION_ACTIONS.ADD_OPERATION)
    calculator.appendDigit('3')
    calculator.appendOperator(OPERATION_ACTIONS.EXPONENT_OPERATION)
    calculator.appendDigit('2')
    expect(calculator.result).toBe('15')
    expect(mockOperandEl).toMatchObject({ innerText: '6+3^2' })
    expect(mockResultEl).toMatchObject({ innerText: '15' })
  })
  test('Calculator with long numbers', () => {
    calculator.appendDigit('630982389074297642')
    calculator.appendOperator(OPERATION_ACTIONS.MULTIPLY_OPERATION)
    calculator.appendDigit('338320742')
    calculator.appendOperator(OPERATION_ACTIONS.EXPONENT_OPERATION)
    calculator.appendDigit('2')
    expect(calculator.result).toBe('7.222282757611206e+34')
    expect(mockOperandEl).toMatchObject({
      innerText: '630982389074297642*338320742^2',
    })
    expect(mockResultEl).toMatchObject({ innerText: '7.222282757611206e+34' })
    calculator.equals()
    expect(mockResultEl).toMatchObject({ innerText: '7.222282757611206e+34' })
  })
  test('Throw an error', () => {
    calculator.appendDigit('12K ')
    expect(calculator.operandArr).toMatchObject([
      { type: 'error', value: 'ERR' },
    ])
  })
})
