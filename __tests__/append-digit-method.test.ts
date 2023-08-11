import { beforeEach, describe, expect, test } from 'vitest'
import { Calculator } from '../src/functions/calculator/calculator-class'

describe('Calculator method: appendDigit()', () => {
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

  test('appends digits correctly', () => {
    calculator.appendDigit('6')
    expect(calculator.operandArr).toMatchObject([{ type: 'digit', value: '6' }])
    expect(mockOperandEl).toMatchObject({ innerText: '6' })
    expect(mockResultEl).toMatchObject({ innerText: '6' })
  })

  test('appends digits with starting decimals correctly', () => {
    calculator.appendDigit('.')
    expect(calculator.operandArr).toMatchObject([
      { type: 'digit', value: '0.' },
    ])
    expect(mockOperandEl).toMatchObject({ innerText: '0.' })
    expect(mockResultEl).toMatchObject({ innerText: '0' })
  })
  test('appends digits with sequence of decimals correctly', () => {
    calculator.appendDigit('2')
    calculator.appendDigit('.')
    calculator.appendDigit('5')
    calculator.appendDigit('3')
    calculator.appendDigit('.')
    calculator.appendDigit('3')
    expect(mockOperandEl).toMatchObject({ innerText: '2.533' })
    expect(mockResultEl).toMatchObject({ innerText: '2.533' })
  })

  // test('does not append a period if leftOperand already contains one', () => {
  //   calculator.appendDigit('5')
  //   calculator.appendDigit('.')
  //   calculator.appendDigit('.')
  //   calculator.appendDigit('6')
  //   expect(calculator.leftOperand).toBe('5.6')
  //   expect(mockOperandEl).toMatchObject({ innerText: '5.6' })
  //   expect(mockResultEl).toMatchObject({ innerText: '5.6' })
  // })

  // test('appends a digit correctly if an operator was set', () => {
  //   calculator.appendDigit('9')
  //   expect(calculator.leftOperand).toBe('9')
  //   calculator.appendOperator(OPERATION_LABELS.MULTIPLY_OPERATION_LABEL)
  //   expect(mockOperandEl).toMatchObject({ innerText: '9 *' })
  //   expect(mockResultEl).toMatchObject({ innerText: '9' })

  //   calculator.appendDigit('2')
  //   expect(calculator.rightOperand).toBe('2')
  //   expect(mockOperandEl).toMatchObject({ innerText: '9 * 2' })
  //   expect(mockResultEl).toMatchObject({ innerText: '18' })

  //   calculator.appendOperator(OPERATION_LABELS.SUBTRACT_OPERATION_LABEL)
  //   expect(calculator.leftOperand).toBe('18 -')
  //   expect(mockOperandEl).toMatchObject({ innerText: '9 * 2 -' })
  //   expect(mockResultEl).toMatchObject({ innerText: '18' })
  // })

  // test('appends "0." to leftOperand if it is empty and a period is appended', () => {
  //   calculator.appendDigit('.')
  //   expect(calculator.leftOperand).toBe('0.')
  //   expect(mockOperandEl).toMatchObject({ innerText: '0.' })
  //   expect(mockResultEl).toMatchObject({ innerText: '0.' })
  // })
})
