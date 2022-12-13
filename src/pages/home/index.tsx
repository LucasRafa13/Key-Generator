import * as Avatar from "@radix-ui/react-avatar"
import * as Checkbox from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons"
import * as Slider from "@radix-ui/react-slider"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import {
  Button,
  ButtonOutline,
  ConfigCard,
  ContainerHome,
  ContainerRange
} from "./home.styles"

interface CheckboxRootProps {
  label: string
  id: string
  value: boolean
  setValue: any
}

const caracteresEspeciaisArr = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  ":",
  ";",
  '"',
  "'",
  "<",
  ">",
  ",",
  ".",
  "?",
  "/"
]
const letrasMaiusculasArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]
const letrasMinusculasArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]
const numerosArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

export default function Home() {
  const router = useRouter()

  const [caracteresEspeciais, setCaracteresEspeciais] = useState(false)
  const [letrasMaiusculas, setLetrasMaiusculas] = useState(false)
  const [numeros, setNumeros] = useState(false)
  const [tamanho, setTamanho] = useState([4])
  const [user, setUser] = useState("")
  const [senha, setSenha] = useState("aaa")

  useEffect(() => {
    setUser(localStorage.username)
  }, [])

  useEffect(() => {
    if (localStorage.username === undefined) router.push("/")
  }, [])

  const sort = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const gerarSenha = () => {
    let senha = ""
    let caracteres = ""

    if (caracteresEspeciais) caracteres += caracteresEspeciaisArr.join("")
    if (letrasMaiusculas) caracteres += letrasMaiusculasArr.join("")
    if (numeros) caracteres += numerosArr.join("")
    caracteres += letrasMinusculasArr.join("")

    for (let i = 0; i < tamanho[0]; i++) {
      senha += caracteres[sort(0, caracteres.length - 1)]
    }

    setSenha(senha)
  }

  const sair = () => {
    localStorage.removeItem("username")
    router.push("/")
  }

  const CheckboxRoot = ({ id, label, setValue, value }: CheckboxRootProps) => {
    return (
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <Checkbox.Root
          className="CheckboxRoot"
          defaultChecked={value}
          id={id}
          value={value ? "true" : "false"}
          onCheckedChange={e => setValue(e)}
        >
          <Checkbox.Indicator className="CheckboxIndicator">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className="Label" htmlFor={id}>
          {label}
        </label>
      </div>
    )
  }

  return (
    <>
      <ConfigCard>
        <h1 className={`text-2xl font-bold`}>Configurações</h1>

        <CheckboxRoot
          id="checkbox1"
          label="Caracteres especiais"
          setValue={setCaracteresEspeciais}
          value={caracteresEspeciais}
        />
        <CheckboxRoot
          id="checkbox2"
          label="Letras maiúsculas"
          value={letrasMaiusculas}
          setValue={setLetrasMaiusculas}
        />
        <CheckboxRoot
          id="checkbox3"
          label="Números"
          value={numeros}
          setValue={setNumeros}
        />

        <ContainerRange>
          <Slider.Root
            className="SliderRoot"
            defaultValue={tamanho}
            max={128}
            step={4}
            value={tamanho}
            onValueChange={value => setTamanho(value)}
            aria-label="Volume"
          >
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" />
          </Slider.Root>
          <span className="span">{tamanho[0]}</span>
        </ContainerRange>
        <Button onClick={gerarSenha}>Gerar senha</Button>
        <ButtonOutline onClick={sair}>Sair</ButtonOutline>
      </ConfigCard>
      <ContainerHome>
        <Avatar.Root className="AvatarRoot">
          <Avatar.Image
            className="AvatarImage"
            src={`https://github.com/${user}.png`}
            alt="Colm Tuite"
          />
          <Avatar.Fallback className="AvatarFallback" delayMs={600}>
            {user}
          </Avatar.Fallback>
        </Avatar.Root>
        <h1 className={`text-2xl font-bold`}>Sua senha é:</h1>
        <h1 className={`text-2xl font-bold`}>{senha}</h1>
      </ContainerHome>
    </>
  )
}
