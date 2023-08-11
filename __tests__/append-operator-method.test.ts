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

  // test.skip('appends operator to currentOperand if it is not empty', () => {
  //   calculator.appendDigit('5')
  //   calculator.appendOperator(OPERATION_LABELS.SUBTRACT_OPERATION_LABEL)
  //   expect(calculator.currentOperand).toBe('')
  //   expect(calculator.previousOperand).toBe('5-')
  //   expect(calculator.result).toBe('5')
  //   expect(calculator.operation).toMatchObject(OPERATIONS_CONFIG[4])
  //   expect(mockOperandEl).toMatchObject({ innerText: '5 - ' })
  //   expect(mockResultEl).toMatchObject({ innerText: '5' })
  // })

  // test('appends operator to currentOperand if there are multiple sequences', () => {
  //   calculator.appendDigit('5')
  //   calculator.appendOperator(OPERATION_LABELS.SUBTRACT_OPERATION_LABEL)
  //   expect(calculator.currentOperand).toBe('')
  //   expect(calculator.previousOperand).toBe('5-')
  //   expect(calculator.result).toBe('5')
  //   expect(calculator.operation).toMatchObject(OPERATIONS_CONFIG[4])
  //   expect(mockOperandEl).toMatchObject({ innerText: '5 - ' })
  //   expect(mockResultEl).toMatchObject({ innerText: '5' })

  //   // calculator.appendDigit('10')
  //   // expect(calculator.currentOperand).toBe('10')
  //   // expect(calculator.previousOperand).toBe('5-')
  //   // expect(calculator.result).toBe('-5')
  //   // expect(mockOperandEl).toMatchObject({ innerText: '5 - 10' })
  //   // expect(mockResultEl).toMatchObject({ innerText: '-5' })

  //   // calculator.appendOperator(OPERATION_LABELS.ADD_OPERATION_LABEL)
  //   // expect(calculator.currentOperand).toBe('')
  //   // expect(calculator.previousOperand).toBe('-5+')
  //   // expect(calculator.result).toBe('-5')
  //   // expect(mockOperandEl).toMatchObject({ innerText: '5 - 10 +' })
  //   // expect(mockResultEl).toMatchObject({ innerText: '-5' })

  //   // calculator.appendDigit('7')
  //   // expect(calculator.currentOperand).toBe('7')
  //   // expect(calculator.previousOperand).toBe('-5+')
  //   // expect(calculator.result).toBe('2')

  //   // expect(calculator.currentOperand).toBe('')
  //   // expect(calculator.previousOperand).toBe('5-')
  //   // expect(calculator.result).toBe('5')
  //   // expect(calculator.operation).toMatchObject(OPERATIONS_CONFIG[4])
  //   // expect(mockOperandEl).toMatchObject({ innerText: '5 - ' })
  //   // expect(mockResultEl).toMatchObject({ innerText: '5' })
  // })

  // test('appends operator to currentOperand with existing sequence', () => {
  //   calculator.appendDigit('5')
  //   expect(calculator.currentOperand).toBe('5')
  //   calculator.appendOperator(OPERATION_LABELS.ADD_OPERATION_LABEL)
  //   expect(calculator.currentOperand).toBe('')
  //   expect(calculator.previousOperand).toBe('5+')
  //   expect(calculator.operation).toMatchObject(OPERATIONS_CONFIG[0])

  //   calculator.appendDigit('10')
  //   expect(calculator.currentOperand).toBe('10')
  //   calculator.appendOperator(OPERATION_LABELS.ADD_OPERATION_LABEL)
  //   expect(calculator.currentOperand).toBe('')
  //   expect(calculator.previousOperand).toBe('5+10')
  //   expect(calculator.operation).toMatchObject(OPERATIONS_CONFIG[0])
  // })
})
