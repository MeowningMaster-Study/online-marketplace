'use client'

import { HTMLAttributes } from 'react'
import { submit } from './submit'
import { useForm } from '@mantine/form'
import { Button, TextInput } from '@mantine/core'
import { Credentials } from '@/logic/security/credentials'
import { isUserError } from '@/utilities/user-error'
import { notifications } from '@mantine/notifications'
import { useRouter } from 'next/navigation'

export function LoginForm(props: HTMLAttributes<HTMLDivElement>) {
	const form = useForm<Credentials>({
		initialValues: {
			login: '',
			password: '',
		},
	})

	const router = useRouter()

	async function submitFrontend(values: Credentials) {
		const result = await submit(values)
		if (isUserError(result)) {
			notifications.show({
				message: result.error,
				color: 'red',
			})
			return
		}
		router.push('/')
	}

	return (
		<form
			onSubmit={form.onSubmit(submitFrontend)}
			className={`flex flex-col gap-4 ${props.className}`}
		>
			<TextInput
				required
				label='Login'
				placeholder='meowningmaster'
				{...form.getInputProps('login')}
			/>
			<TextInput
				required
				label='Password'
				type='password'
				{...form.getInputProps('password')}
			/>
			<div className='flex justify-end'>
				<Button type='submit'>Log in</Button>
			</div>
		</form>
	)
}
