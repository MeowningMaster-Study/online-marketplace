import addFormats from 'ajv-formats'
import Ajv, { Schema } from 'ajv'
import { Static, TAnySchema } from '@sinclair/typebox'

export const ajv = addFormats(new Ajv({}), [
	'date-time',
	'time',
	'date',
	'email',
	'hostname',
	'ipv4',
	'ipv6',
	'uri',
	'uri-reference',
	'uuid',
	'uri-template',
	'json-pointer',
	'relative-json-pointer',
	'regex',
])

export function validate<T extends TAnySchema>(data: unknown, schema: T) {
	if (!ajv.validate(schema as Schema, data)) {
		throw ajv.errorsText()
	}
	return data as Static<T>
}
