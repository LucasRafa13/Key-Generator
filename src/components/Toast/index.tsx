import * as Toast from "@radix-ui/react-toast";
import cx from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface ToastProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  type: "error" | "success";
}

export default function ToastComponent(props: ToastProps) {
  const { open, setOpen, username, type } = props;

  const title =
    type === "success"
      ? `Você está tentando entrar com o usuário: ${username}`
      : "Username inválido ...";

  const subTitle =
    type === "success" ? (
      <Link href={`https://github.com/${username}`}>
        Você pode clicar aqui para ver seu perfil.
      </Link>
    ) : (
      "Por favor, informe um username válido"
    );

  const saveUsername = (event: any) => {
    event.preventDefault();
    localStorage.setItem("username", username);
    router.push(`/home?username=${username}`);
  };

  const router = useRouter();

  return (
    <Toast.Root
      open={open}
      onOpenChange={setOpen}
      className={cx(
        "z-50 fixed bottom-4 inset-x-4 w-auto md:top-4 md:right-4 md:left-auto md:bottom-auto md:w-full md:max-w-sm shadow-lg rounded-lg",
        "bg-white dark:bg-gray-800",
        "radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right",
        "radix-state-closed:animate-toast-hide",
        "radix-swipe-end:animate-toast-swipe-out",
        "translate-x-radix-toast-swipe-move-x",
        "radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]",
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
      )}
    >
      <div className="flex">
        <div className="w-0 flex-1 flex items-center pl-5 py-4">
          <div className="w-full radix col gap-4">
            <Toast.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {title}
            </Toast.Title>
            <Toast.Description
              className={`mt-1 text-sm text-gray-700 ${
                type === "success" && "text-blue-500"
              }`}
            >
              {subTitle}
            </Toast.Description>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col px-3 py-2 space-y-1">
            {type === "success" && (
              <div className="h-0 flex-1 flex">
                <Toast.Action
                  altText="view now"
                  className="w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-purple-600 dark:text-purple-500 hover:bg-gray-50 dark:hover:bg-gray-900 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  onClick={(e) => saveUsername(e)}
                >
                  Entrar
                </Toast.Action>
              </div>
            )}
            <div className="h-0 flex-1 flex">
              <Toast.Close className="w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                Fechar
              </Toast.Close>
            </div>
          </div>
        </div>
      </div>
    </Toast.Root>
  );
}
