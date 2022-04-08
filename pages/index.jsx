import { useEffect, useState } from "react"
import tw from "twin.macro"
import Link from "next/link"
import { Button, StyledLink } from "@components"
import MarketingContainer from "@layouts/MarketingContainer"

const basicOperations = [
  {operation: "Create", link: "create"},
  {operation: "Read", link: "read"},
  {operation: "Update", link: "update"},
  {operation: "Delete", link: "delete"}
]
const bgs = [
  tw`bg-gradient-to-r from-yellow-600 to-red-600`,
  tw`bg-gradient-to-r from-blue-700 via-blue-800 to-gray-700`,
  tw`bg-gradient-to-r from-amber-600 to-amber-500`,
  tw`bg-gradient-to-r from-green-500 to-green-600`,
]
export default function Home() {
  return (
    <MarketingContainer headerBorder footer>
      <main tw="min-h-[38rem]">
        <section tw="max-w-screen-lg mx-auto px-10 text-center mt-10">
          <h1 tw="text-4xl sm:text-6xl mt-20 pb-5">Homepage</h1>
          <div tw="grid gap-2 grid-cols-2">
            {basicOperations.map((el, i)=>(
              <Link key={el.link} href={el.link} passHref>
                <a>
                  <div css={[tw`text-white rounded`,bgs[i]]}>
                    {el.operation}
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </MarketingContainer>
  )
}
// Home.theme = "light"
