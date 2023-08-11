import { Operand } from '../../../types/app-types'

export function formatDecimalInput(input: string, currentStack: Operand[]) {
  const prev = currentStack[currentStack.length - 1]
  if (input === '.' && (!prev || prev?.type !== 'digit')) return '0.'
  return input
}
