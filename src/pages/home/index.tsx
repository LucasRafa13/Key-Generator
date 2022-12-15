import * as Avatar from '@radix-ui/react-avatar'
import * as Slider from '@radix-ui/react-slider'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { CheckboxRoot } from '../../components/Checkbox'
import { generatorPassword } from '../../utils/generatorPassword'

export default function Home() {
	const router = useRouter()

	const [specialCharacters, setSpecialCharacters] = useState(false)
	const [uppercaseLetters, setUppercaseLetters] = useState(false)
	const [numbers, setNumbers] = useState(false)
	const [length, setLength] = useState([4])
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		setUser(localStorage.username)
	}, [])

	useEffect(() => {
		localStorage.username === undefined && router.push('/')

		localStorage.username !== router.query.username &&
			router.push(`/home?username=${localStorage.username}`)
	}, [router])

	const sair = () => {
		localStorage.removeItem('username')
		router.push('/')
	}

	return (
		<div className='h-full flex-center-items gap-10 md:flex-col'>
			<div className='h-full rounded-xl bg-white p-5 text-black drop-shadow-custom w-[350px] md:w-full md:h-fit'>
				<h1 className={'mb-5 text-center  text-2xl font-bold text-black'}>
					Configurações
				</h1>
				<div>
					<CheckboxRoot
						id='checkbox1'
						label='Caracteres especiais'
						setValue={setSpecialCharacters}
						value={specialCharacters}
					/>
					<CheckboxRoot
						id='checkbox2'
						label='Letras maiúsculas'
						value={uppercaseLetters}
						setValue={setUppercaseLetters}
					/>
					<CheckboxRoot
						id='checkbox3'
						label='Números'
						value={numbers}
						setValue={setNumbers}
					/>
				</div>

				<div className='flex-center-items justify-start'>
					<Slider.Root
						className='SliderRoot flex-center-items relative h-5 w-64 touch-none touch-none select-none'
						defaultValue={length}
						max={128}
						step={4}
						value={length}
						onValueChange={(value) => setLength(value)}
						aria-label='Volume'
					>
						<Slider.Track className='relative h-1 grow rounded-full bg-violet8'>
							<Slider.Range className='absolute h-full rounded-full bg-violet11' />
						</Slider.Track>
						<Slider.Thumb className='block h-5 w-5 rounded-xl bg-violet11 drop-shadow-custom hover:bg-violet3 focus:outline-none focus:drop-shadow-checkboxFocus' />
					</Slider.Root>
					<span className='ml-3'>{length[0]}</span>
				</div>
				<div className='flex gap-4'>
					<button
						className='mt-8 rounded-xl bg-violet11 p-3 text-base font-semibold text-white w-full'
						onClick={() =>
							generatorPassword(
								specialCharacters,
								uppercaseLetters,
								numbers,
								length,
								setPassword
							)
						}
					>
						Gerar senha
					</button>
					<button
						className='mt-8 rounded-xl border-2 border-violet11 bg-transparent p-3 text-base font-semibold text-violet11 w-full'
						onClick={sair}
					>
						Sair
					</button>
				</div>
			</div>
			<div className='col-center gap-5 w-full'>
				<Avatar.Root className='flex-center h-52 w-52 select-none overflow-hidden rounded-full bg-blackA3 align-middle'>
					{user && (
						<Avatar.Image
							className='cover rounded-inherit h-full w-full'
							src={`https://github.com/${user}.png`}
							alt='Colm Tuite'
						/>
					)}
					<Avatar.Fallback
						className='h-full w-full'
						delayMs={600}
					>
						{user}
					</Avatar.Fallback>
				</Avatar.Root>
				<div className='text-center'>
					<h1 className={'mb-5 text-2xl font-bold text-black'}>Sua senha é:</h1>
					<h1 className={'mb-5 text-2xl font-bold text-black break-all'}>
						{password}
					</h1>
				</div>
			</div>
		</div>
	)
}
