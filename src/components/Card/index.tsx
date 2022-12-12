import React, { useEffect } from "react"
import { useRouter } from "next/router"

import * as Avatar from "@radix-ui/react-avatar"
import * as Toast from "@radix-ui/react-toast"
import ToastComponent from "../Toast"

export default function Card() {
  const [username, setUsername] = React.useState<string>("")
  const [isToastOpen, setIsToastOpen] = React.useState<boolean>(false)
  const [toastType, setToastType] = React.useState<"success" | "error">("success")
  const router = useRouter()

  useEffect(() => {
    setUsername("")
  }, [])

  return (
    <div className="col-center gap-5 px-4 py-10 rounded-xl shadow-2xl shadow-slate-800">
      <div className="col-center">
        <Avatar.Root
          className={"w-40 h-40 bg-gray-200 rounded-full overflow-hidden"}
        >
          {username !== "" && (
            <Avatar.Image
              src={`https://github.com/${username}.png`}
              alt={"Avatar Image"}
              className={"cover w-full h-full"}
            />
          )}
          <Avatar.Fallback
            className={"w-full h-full bg-white text-black text-2xl col-center"}
            delayMs={500}
          >
            Not Found
          </Avatar.Fallback>
        </Avatar.Root>
      </div>

      <label defaultValue={username} />
      <input
        type="text"
        placeholder="Digite seu usuário do GitHub."
        value={username}
        onChange={event => {
          // Onde ta o valor?
          const value = event?.target?.value
          // Trocar o valor da variavel
          // através do React e avise quem precisa
          setUsername(value)
        }}
        className="text-black px-3 py-2 rounded-lg"
      />

      <Toast.Provider>
        <button
          className="hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500 bg-blue-500 w-full py-2 rounded-2xl active:bg-blue-800"
          onClick={event => {
            console.log("Submit")
            // Não atualizar a página
            event.preventDefault()
            // Usuário não pode ser undefined
            if (username === "") {
              setToastType("error")
              setIsToastOpen(true)
              return
            }
            // Redirecionar para a página home
            // passando o username como parâmetro
            setToastType("success")
            setIsToastOpen(true)
          }}
        >
          <span>Entrar</span>
        </button>
        <ToastComponent
          open={isToastOpen}
          setOpen={setIsToastOpen}
          username={username}
          type={toastType}
        />
        <Toast.Viewport />
      </Toast.Provider>
    </div>
  )
}
