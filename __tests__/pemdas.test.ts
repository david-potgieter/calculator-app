import { describe, expect, test } from 'vitest'
import { PEMDAS } from '../src/functions/calculator/helpers/pemdas'

describe('convertToNotation()', () => {
  test('convertToNotation - normal number', () => {
    const testCases = [
      { input: '9', output: 9 },
      { input: '5^2', output: 25 },
      { input: '2+3^2', output: 11 },
      { input: '2+3*4', output: 14 },
      { input: '8+12/4', output: 11 },
      { input: '6/2*3', output: 9 },
      { input: '6*2/3', output: 4 },
      { input: '5-3+2', output: 4 },
      { input: '5+3-2', output: 6 },
      { input: '3+5*2-6/2', output: 10 },
      { input: '3^2+4^2', output: 25 },
      { input: '123123123123123^300', output: Infinity },
    ]
    testCases.forEach(({ input, output }) => {
      const result = PEMDAS(input)
      expect(result).toBe(output)
    })
  })
  test('convertToNotation - incomplete operands', () => {
    const testCases = [
      { input: ' ', output: undefined },
      { input: '12+', output: 12 },
      { input: '12+ ', output: NaN },
    ]
    testCases.forEach(({ input, output }) => {
      const result = PEMDAS(input)
      expect(result).toBe(output)
    })
  })
  test('convertToNotation - error catches', () => {
    expect(() => PEMDAS('12K ')).toThrowError()
  })
})
