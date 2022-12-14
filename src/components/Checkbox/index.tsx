import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

interface CheckboxRootProps {
	label: string
	id: string
	value: boolean
	setValue: any
}

export const CheckboxRoot = ({
	id,
	label,
	setValue,
	value,
}: CheckboxRootProps) => {
	return (
		<div className='flex-center-items mb-5'>
			<Checkbox.Root
				className='flex-center h-6 w-6 rounded-[4px] bg-white drop-shadow-custom hover:bg-checkboxHover focus:drop-shadow-checkboxFocus'
				defaultChecked={value}
				id={id}
				value={value ? 'true' : 'false'}
				onCheckedChange={(e) => setValue(e)}
			>
				<Checkbox.Indicator className='text-violet11'>
					<CheckIcon />
				</Checkbox.Indicator>
			</Checkbox.Root>
			<label
				className='select-none pl-4 text-base text-black'
				htmlFor={id}
			>
				{label}
			</label>
		</div>
	)
}
