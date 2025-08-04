import set from '../src/set.js'
import { strict as assert } from 'node:assert'

const obj = { key1: 'value1' }
const result = set(obj, 'key1', 'value1')
const result2 = set(obj, 'key1', 'next value')

assert.deepEqual(result, 'value1')

assert.deepEqual(result2, 'next value')

console.log('Все тесты пройдены!')
