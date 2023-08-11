export enum MODE {
  MODE_ON = 'mode-on',
  MODE_OFF = 'mode-off',
}

export enum OPERATION_ACTIONS {
  ADD_OPERATION = '+',
  SUBTRACT_OPERATION = '-',
  MULTIPLY_OPERATION = '*',
  DIVIDE_OPERATION = '/',
  EXPONENT_OPERATION = '^',
  EQUAL_OPERATION = '=',
}

export enum OPERATION_LABELS {
  ADD_OPERATION_LABEL = 'Plus',
  DIVIDE_OPERATION_LABEL = 'Slash',
  EQUAL_OPERATION = 'Equal',
  ENTER_OPERATION = 'Enter',
  EXPONENT_OPERATION_LABEL = '^',
  MULTIPLY_OPERATION_LABEL = 'Asterisk',
  SUBTRACT_OPERATION_LABEL = 'Minus',
}

export enum ACTIONS {
  CLEAR_ACTION = 'clear',
  DELETE_ACTION = 'delete',
}
export type Operand = { type: string; value: string }
export type Operation = { action: string; label: string }

export interface ICalculator {
  result: string
  operandArr: Operand[]
  operandEl: HTMLDivElement
  resultEl: HTMLDivElement
  appendDigit(digit: string): void
  clear(): void
  calculateResult(operation: string): void
  delete(): void
  equals(): void
  appendOperator(operation: string): void
  updateDisplays(): void
}

export const OPERATIONS_CONFIG = [
  {
    action: OPERATION_ACTIONS.ADD_OPERATION,
    label: OPERATION_LABELS.ADD_OPERATION_LABEL,
  },
  {
    action: OPERATION_ACTIONS.SUBTRACT_OPERATION,
    label: OPERATION_LABELS.SUBTRACT_OPERATION_LABEL,
  },
  {
    action: OPERATION_ACTIONS.MULTIPLY_OPERATION,
    label: OPERATION_LABELS.MULTIPLY_OPERATION_LABEL,
  },
  {
    action: OPERATION_ACTIONS.DIVIDE_OPERATION,
    label: OPERATION_LABELS.DIVIDE_OPERATION_LABEL,
  },
  {
    action: OPERATION_ACTIONS.EXPONENT_OPERATION,
    label: OPERATION_LABELS.EXPONENT_OPERATION_LABEL,
  },
  {
    action: OPERATION_ACTIONS.EQUAL_OPERATION,
    label: OPERATION_LABELS.EQUAL_OPERATION,
  },
]
