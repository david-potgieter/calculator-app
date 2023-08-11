import { describe, expect, test } from 'vitest'
import { convertToNotation } from '../src/functions/calculator/helpers/convert-to-notation'

describe('convertToNotation()', () => {
  test('convertToNotation - normal number', () => {
    const result = convertToNotation('123456')
    expect(result).toBe('123,456')
  })

  test('convertToNotation - infinity', () => {
    const result = convertToNotation('Infinity')
    expect(result).toBe('∞')
  })

  test('convertToNotation - number with e notation', () => {
    const result = convertToNotation('1.23e5')
    expect(result).toBe('1.23e5')
  })

  test('convertToNotation - long number', () => {
    const result = convertToNotation(
      '382067498623987338383983298328978732938729873723987329873298723987'
    )
    expect(result).toBe('3.8206749862398732e65')
  })
})
