import { useEffect, useState } from "react"
import tw, { styled, css } from "twin.macro"
import Link from "next/link"
import MarketingContainer from "@layouts/MarketingContainer"
import { Input, Button, LoadingCircle, StyledLink } from "@components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useRouter } from "next/router"

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required!")
    .min(6, "Email should be between 5 and 50 characters")
    .max(50),
  password: yup
    .string()
    .required("No password provided!")
    .min(5, "Please use a longer password!")
    .matches(/^(?=.{6,})/, "Must Contain 6 Characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])/, "Must Contain One Uppercase, One Lowercase")
    .matches(/^(?=.*[!@#\$%\^&\*])/, "Must Contain One Special Case Character"),
})

export default function SignUp() {
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
    <MarketingContainer title="Sign up" footer noHeaderNav>
      <main
        tw="min-h-screen max-w-screen-sm w-full
          mx-auto px-4 pb-28 md:(px-8) flex
          flex-col items-center justify-center"
      >
        <h1 tw="text-3xl sm:text-5xl  text-center pt-10 mb-8 pb-0">Create an account</h1>

        <form
          tw="space-y-5 text-left
              px-2 sm:px-16
              pt-5 pb-16
              w-full
              "
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
            disabled={!!isLoading}
            isLarge
          >
            {isLoading ? <LoadingCircle /> : "Create Account"}
          </Button>
          <div tw="flex flex-col items-center justify-center">
            Already have an account?
            <Link href="/signin" passHref>
              <StyledLink arrow="right" variant="blue" underline>
                Signin
              </StyledLink>
            </Link>
          </div>
        </form>
      </main>
    </MarketingContainer>
  )
}

SignUp.theme = "light"
