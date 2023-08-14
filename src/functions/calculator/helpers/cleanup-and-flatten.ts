import { Operand } from '../../../types/app-types'

export function cleanupAndFlatten(operands: Operand[]) {
  return operands
    .map((item) => item.value)
    .join('')
    .replace(/(\d*\.?)(\d*)\.*(\d*)/g, '$1$2$3')
}
