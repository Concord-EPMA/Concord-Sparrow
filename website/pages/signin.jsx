import { useEffect, useState } from "react"
import tw, { styled, css } from "twin.macro"
import Link from "next/link"
import { useRouter } from "next/router"
import MarketingContainer from "@layouts/MarketingContainer"
import { Input, Button, LoadingCircle, StyledLink } from "@components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address!")
    .required("No email provided!")
    .min(6, "Email should be between 5 and 50 characters")
    .max(50),
  password: yup.string().required("No password provided!"),
})

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      router.push("/")
    }, 1000)
  }

  return (
    <MarketingContainer title="Log in" footer noHeaderNav>
      <main
        tw="min-h-screen max-w-screen-sm w-full
          mx-auto px-4 pb-28 md:(px-8) flex
          flex-col items-center justify-center"
      >
        <h1 tw="text-3xl sm:text-5xl  text-center pt-10 mb-8 pb-0">Log In</h1>
        <form
          tw="space-y-5 text-left
              px-2 sm:px-16
              pt-5 pb-16
              w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Input
              type="email"
              placeholder="email Address"
              aria-label="email address"
              autoComplete="email"
              autoCapitalize="none"
              maxLength="50"
              {...register("email")}
              error={errors?.email}
              noLabel
              required
            />
            <small tw="text-red-700">{errors?.email?.message}</small>
          </div>
          <div>
            <Input
              type="password"
              placeholder="password"
              aria-label="password"
              autoCapitalize="none"
              {...register("password")}
              error={errors?.password}
              noLabel
              required
            />
            <small tw="text-red-700">{errors?.password?.message}</small>
          </div>
          <Button
            type="submit"
            tw="flex items-center justify-center"
            disabled={isLoading}
            isLarge
          >
            {isLoading ? <LoadingCircle /> : "Continue with Email"}
          </Button>
          <div tw="flex flex-col items-center justify-center">
            Don't have an account?
            <Link href="/signup" passHref>
              <StyledLink arrow="right" variant="blue" underline>
                Sign up
              </StyledLink>
            </Link>
          </div>
        </form>
      </main>
    </MarketingContainer>
  )
}

Login.theme = "light"
