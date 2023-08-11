import { describe, expect, test } from 'vitest'
import { applyOperation } from '../src/functions/calculator/helpers/apply-operation'
import { OPERATIONS_CONFIG } from '../src/types/app-types'

describe('applyOperation()', () => {
  const config = OPERATIONS_CONFIG
  test('convertToNotation - normal number', () => {
    const testCases = [
      { operator: 'unknown', left: 5, right: 5, output: 0 },
      { operator: config[0].action, left: 3, right: 5, output: 8 },
      { operator: config[1].action, left: 8, right: 5, output: 3 },
      { operator: config[2].action, left: 3, right: 5, output: 15 },
      { operator: config[3].action, left: 8, right: 2, output: 4 },

      { operator: config[4].action, left: 2, right: 3, output: 8 },
    ]
    testCases.forEach(({ operator, left, right, output }) => {
      const result = applyOperation(operator, right, left)
      expect(result).toBe(output)
    })
  })

  test('convertToNotation - error catches', () => {
    expect(() => applyOperation(config[3].action, 0, 0)).toThrowError()
  })
})
