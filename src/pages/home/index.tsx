import * as Avatar from '@radix-ui/react-avatar'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import * as Slider from '@radix-ui/react-slider'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface CheckboxRootProps {
  label: string
  id: string
  value: boolean
  setValue: any
}

const specialCharactersArray = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '+',
  '-',
  '=',
  '{',
  '}',
  '[',
  ']',
  '|',
  ':',
  ';',
  '"',
  "'",
  '<',
  '>',
  ',',
  '.',
  '?',
  '/'
]
const letterUpperCaseArr = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]
const letterLowerCaseArr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
const numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

export default function Home () {
  const router = useRouter()

  const [specialCharacters, setSpecialCharacters] = useState(false)
  const [uppercaseLetters, setUpercaseLetters] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [lenght, setLenght] = useState([4])
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    setUser(localStorage.username)
  }, [])

  useEffect(() => {
    // if (localStorage.username === undefined)
    localStorage.username === undefined && router.push('/')

    localStorage.username !== router.query.username &&
      router.push(`/home?username=${localStorage.username}`)
  }, [router])

  const sort = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const generatorPassword = () => {
    let password = ''
    let characters = ''

    if (specialCharacters) characters += specialCharactersArray.join('')


    if (uppercaseLetters) characters += letterUpperCaseArr.join('')
    if (numbers) characters += numberArray.join('')

                characters += letterLowerCaseArr.join('')

    for (let i = 0; i < lenght[0]; i++) {
      password += characters[sort(0, characters.length - 1)]
    }

    setPassword(password)
  }

  const sair = () => {
    localStorage.removeItem('username')
    router.push('/')
  }

  const CheckboxRoot = ({ id, label, setValue, value }: CheckboxRootProps) => {
    return (
      <div className="flex-center-items mb-5">
        <Checkbox.Root
          className="flex-center h-6 w-6 rounded-[4px] bg-white drop-shadow-custom hover:bg-checkboxHover focus:drop-shadow-checkboxFocus"
          defaultChecked={value}
          id={id}
          value={value ? 'true' : 'false'}
          onCheckedChange={(e) => setValue(e)}
        >
          <Checkbox.Indicator className="text-violet11">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className="select-none pl-4 text-base text-black" htmlFor={id}>
          {label}
        </label>
      </div>
    )
  }

  return (
    <>
      <div className="col fixed top-1/2 left-[2%] w-[400px] -translate-y-1/2 rounded-xl bg-white p-5 text-black drop-shadow-custom md:relative md:mb-8">
        <h1 className={'mb-5 text-center  text-2xl font-bold text-black'}>
          Configurações
        </h1>

        <CheckboxRoot
          id="checkbox1"
          label="Caracteres especiais"
          setValue={setSpecialCharacters}
          value={specialCharacters}
        />
        <CheckboxRoot
          id="checkbox2"
          label="Letras maiúsculas"
          value={uppercaseLetters}
          setValue={setUpercaseLetters}
        />
        <CheckboxRoot
          id="checkbox3"
          label="Números"
          value={numbers}
          setValue={setNumbers}
        />

        <div className="flex-center-items justify-start">
        <Slider.Root
          className="SliderRoot flex-center-items relative h-5 w-64 touch-none touch-none select-none"
                 defaultValue={lenght}
max={128}
          step={4}
          value={lenght}
          onValueChange={(value) => setLenght(value)}
          aria-label="Volume"
        >
          <Slider.Track className="relative h-1 grow rounded-full bg-violet8">
          <Slider.Range className="absolute h-full rounded-full bg-violet11" />
        </Slider.Track>
        <Slider.Thumb className="block h-5 w-5 rounded-xl bg-violet11 drop-shadow-custom hover:bg-violet3 focus:outline-none focus:drop-shadow-checkboxFocus" />
        </Slider.Root>
        <span className="ml-3">{lenght[0]}</span>
        </div>
        <button
          className="mt-8 rounded-xl bg-violet11 p-3 text-base font-semibold text-white"
          onClick={generatorPassword}
        >
          Gerar senha
        </button>
        <button
          className="mt-8 rounded-xl border-2 border-violet11 bg-transparent p-3 text-base font-semibold text-violet11"
          onClick={sair}
        >
          Sair
        </button>
      </div>
      <div className="col-center">
        <Avatar.Root className="flex-center h-36 w-36 select-none overflow-hidden rounded-full bg-blackA3 align-middle">
          {user && (
            <Avatar.Image
              className="cover rounded-inherit h-full w-full"
              src={`https://github.com/${user}.png`}
              alt="Colm Tuite"
            />
          )}
          <Avatar.Fallback className="AvatarFallback" delayMs={600}>
            {user}
          </Avatar.Fallback>
        </Avatar.Root>
        <h1 className={'mb-5 text-2xl font-bold text-black'}>Sua senha é:</h1>
        <h1 className={'mb-5 text-2xl font-bold text-black'}>{password}</h1>
      </div>
    </>
  )
}
