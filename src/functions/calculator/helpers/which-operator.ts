import {
  OPERATION_ACTIONS,
  OPERATION_LABELS,
  OPERATIONS_CONFIG,
} from '../../../types/app-types'

export function selectOperator(operation: string) {
  switch (operation) {
    case OPERATION_ACTIONS.ADD_OPERATION:
    case OPERATION_LABELS.ADD_OPERATION_LABEL:
      return OPERATIONS_CONFIG[0]
    case OPERATION_ACTIONS.SUBTRACT_OPERATION:
    case OPERATION_LABELS.SUBTRACT_OPERATION_LABEL:
      return OPERATIONS_CONFIG[1]
    case OPERATION_ACTIONS.MULTIPLY_OPERATION:
    case OPERATION_LABELS.MULTIPLY_OPERATION_LABEL:
      return OPERATIONS_CONFIG[2]
    case OPERATION_ACTIONS.DIVIDE_OPERATION:
    case OPERATION_LABELS.DIVIDE_OPERATION_LABEL:
      return OPERATIONS_CONFIG[3]
    case OPERATION_ACTIONS.EXPONENT_OPERATION:
    case OPERATION_LABELS.EXPONENT_OPERATION_LABEL:
      return OPERATIONS_CONFIG[4]
    case OPERATION_ACTIONS.EQUAL_OPERATION:
    case OPERATION_LABELS.ENTER_OPERATION:
    case OPERATION_LABELS.EQUAL_OPERATION:
      return OPERATIONS_CONFIG[5]
    default:
      return undefined
  }
}
