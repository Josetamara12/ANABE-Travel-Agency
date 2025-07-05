'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const username = formData.get("correo") as string
    const password = formData.get("contraseña") as string

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    })

    setLoading(false)

    if (result?.ok) {
      router.push("/dashboard")
    } else {
      alert("Login incorrecto. Porfavor revisa tus credenciales.")
    }
  } 

  return (
    <form className={cn("flex flex-col gap-6", className)} 
    {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Ingresa en tu cuenta</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Ingresa tu correo electronico para iniciar sesion.
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="correo">Correo</Label>
          <Input id="correo" type="correo" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="contraseña">Contraseña</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Olvidaste tu contraseña?
            </a>
          </div>
          <Input id="contraseña" type="contraseña" required />
        </div>
        <Button type="submit" className="w-full">
          Ingresar
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            O continua con
          </span>
        </div>
         <Button variant="outline" className="w-full" onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
          Iniciar con Google
        </Button>

        <Button variant="outline" className="w-full" onClick={() => signIn("github", { callbackUrl: "/dashboard" })}>
          Iniciar con GitHub
        </Button>
      </div>

      <div className="text-center text-sm">
        No tienes cuenta?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  )
}
