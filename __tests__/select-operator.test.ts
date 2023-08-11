import { describe, expect, test } from 'vitest'
import { selectOperator } from '../src/functions/calculator/helpers/which-operator'
import {
  OPERATIONS_CONFIG,
  OPERATION_ACTIONS,
  OPERATION_LABELS,
} from '../src/types/app-types'

describe('applyOperation()', () => {
  const config = OPERATIONS_CONFIG
  const actions = OPERATION_ACTIONS
  const labels = OPERATION_LABELS
  test('selectOperator - correct selection', () => {
    const testCases = [
      { operator: actions.ADD_OPERATION, output: config[0] },
      { operator: labels.ADD_OPERATION_LABEL, output: config[0] },
      { operator: actions.SUBTRACT_OPERATION, output: config[1] },
      { operator: labels.SUBTRACT_OPERATION_LABEL, output: config[1] },
      { operator: actions.MULTIPLY_OPERATION, output: config[2] },
      { operator: labels.MULTIPLY_OPERATION_LABEL, output: config[2] },
      { operator: actions.DIVIDE_OPERATION, output: config[3] },
      { operator: labels.DIVIDE_OPERATION_LABEL, output: config[3] },
      { operator: actions.EXPONENT_OPERATION, output: config[4] },
      { operator: labels.EXPONENT_OPERATION_LABEL, output: config[4] },
      { operator: actions.EQUAL_OPERATION, output: config[5] },
      { operator: labels.ENTER_OPERATION, output: config[5] },
      { operator: labels.EQUAL_OPERATION, output: config[5] },
      { operator: 'unknown_operation', output: undefined },
    ]
    testCases.forEach(({ operator, output }) => {
      const result = selectOperator(operator)
      expect(result).toBe(output)
    })
  })
})
