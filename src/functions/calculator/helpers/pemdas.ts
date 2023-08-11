import { OPERATIONS_CONFIG } from '../../../types/app-types'
import { applyOperation } from './apply-operation'

export function PEMDAS(expressionString: string): number {
  const operandString = expressionString.replace(/[^0-9]$/, '')
  const values: number[] = []
  const OPERATION_LABELS: string[] = []

  const operators = {
    [OPERATIONS_CONFIG[0].action]: 1,
    [OPERATIONS_CONFIG[1].action]: 1,
    [OPERATIONS_CONFIG[2].action]: 2,
    [OPERATIONS_CONFIG[3].action]: 2,
    [OPERATIONS_CONFIG[4].action]: 3,
  }

  try {
    let i = 0
    while (i < operandString.length) {
      if (!isNaN(Number(operandString[i])) || operandString[i] === '.') {
        let valStr = ''
        while (
          i < operandString.length &&
          (!isNaN(Number(operandString[i])) || operandString[i] === '.')
        ) {
          valStr += operandString[i]
          i++
        }
        values.push(parseFloat(valStr))
        continue
      } else if (operators.hasOwnProperty(operandString[i] as string)) {
        while (
          OPERATION_LABELS.length !== 0 &&
          operators[operandString[i] as string] <=
            operators[OPERATION_LABELS[OPERATION_LABELS.length - 1]]
        ) {
          values.push(
            applyOperation(
              OPERATION_LABELS.pop() as string,
              values.pop() as number,
              values.pop() as number
            )
          )
        }
        OPERATION_LABELS.push(operandString[i] as string)
      } else {
        throw new Error(`Unexpected character encountered: ${operandString[i]}`)
      }
      i++
    }

    while (OPERATION_LABELS.length !== 0) {
      values.push(
        applyOperation(
          OPERATION_LABELS.pop() as string,
          values.pop() as number,
          values.pop() as number
        )
      )
    }

    return values[values.length - 1]
  } catch (error) {
    throw new Error(error as string)
  }
}
