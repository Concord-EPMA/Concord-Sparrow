import { useEffect, useState } from "react"
import tw from "twin.macro"
import Link from "next/link"
import { ExternalLink, Button, Img } from "@components"
import MarketingContainer from "@layouts/MarketingContainer"

const PageLink = ({ link, text }) => {
  return (
    <ExternalLink href={link}>
      <span tw="text-brand-darker">{text}</span>
    </ExternalLink>
  )
}

export default function Home() {
  return (
    <MarketingContainer headerBorder footer>
      <main tw="min-h-[38rem] mb-40">
        <section tw="max-w-screen-md mx-auto px-10 text-left mt-10 break-words">
          <h1 tw="text-4xl sm:text-6xl mt-20 pb-5 font-normal">
            Microanalytical <br />
            Laboratory
          </h1>
          <div tw="flex flex-col  mt-4">
            <div tw="flex flex-col sm:(flex-row space-x-3)">
              <div tw="relative rounded-full w-16 h-16">
                <Img
                  src="/static/Stephen-Kuehn.jpeg"
                  alt="professor"
                  layout="fill"
                  tw="rounded-full"
                  objectFit="cover"
                />
              </div>
              <div tw="flex flex-col max-w-sm space-y-3">
                <p tw=" ">
                  Dr. Stephen C. Kuehn Associate Professor Director, Electron Microprobe
                  Facility Science, Room 106
                </p>
                <p>(304) 384-6322</p>
                <PageLink text="sckuehn@concord.edu" link="mailto: sckuehn@concord.edu" />
                <p>
                  Concord University PO Box 1000, Campus Box F20 1000 Vermillion St
                  Athens, WV 24712-1000
                </p>
              </div>
            </div>
          </div>
          <div tw="flex flex-col mt-16">
            <h2 className="h2" tw="font-normal my-3">
              Welcome to the Microanalytical Laboratory
            </h2>
            <article tw="space-y-3 max-w-prose">
              <p>
                The Concord University Microanalytical Laboratory houses two major
                instruments: an {" "}
                <PageLink
                  text="ARL-SEMQ electron microprobe"
                  link="https://www.concord.edu/Academics/College-of-Natural-Sciences,-Mathematics,-and-Heal/Department-of-Physical-Science/Labs/Electron-Microprobe-Lab.aspx"
                />
                {" "} and a {" "}
                <PageLink text="Horiba XGT-5000 micro-X-ray fluorescence (XRF) analytical microscope" link="https://www.concord.edu/Academics/College-of-Natural-Sciences,-Mathematics,-and-Heal/Department-of-Physical-Science/Labs/Micro-XRF.aspx" />
                . Both instruments are highly useful tools for teaching and research
                because they have multidisciplinary applications and can acquire precise
                quantitative chemical and spatial information from solid materials. The
                combination of the two instruments substantially expands the range of
                applications which the microanalytical facility can address.
              </p>
              <p>
                The electron microprobe is housed in the Department of Physical Sciences
                (chemistry, geology, physics) in a dedicated 500 ft2 ground-floor
                laboratory. This instrument is the only electron microprobe in West
                Virginia and is Concord University's most significant piece of major
                research instrumentation.
              </p>
              <p>
                The XRF is housed in a separate laboratory on the third floor and is
                capable of qualitatively mapping the elemental composition of solid
                materials from areas as large as 10 cm x 10 cm with a resolution of
                0.01-0.1 mm. Using transmitted X-ray imaging on the XRF, internal
                structures and defects may also be studied.
              </p>
              <p>
                The combination of two instruments provides users the opportunity to
                analyze and image chemical variations on both large and small scales.
                Regions of interest identified using the XRF may be subsequently studied
                on the electron microprobe to obtain detailed quantitative analysis and
                high-resolution imaging. The XRF also provides the capability to study
                samples that are unstable under the high-vacuum conditions of the electron
                microprobe or which are easily damaged by the electron beam.
              </p>
              <p>
                One frequent application of electron microprobe is {" "}
                <PageLink
                  text="tephrochronology"
                  link="https://www.concord.edu/Academics/College-of-Natural-Sciences,-Mathematics,-and-Heal/Department-of-Physical-Science/Labs/Tephra-Lab.aspx"
                /> 
                {" "}
                , the use of volcanic ash and pumice (tephra) as a tool for dating and
                correlation. Tephrochronology is employed globally with numerous
                interdisciplinary applications including: environmental and climate
                change, archaeology, Earth surface processes, ecology, animal and plant
                evolution, earthquake hazards & neotectonics, volcanic hazards, and even
                medicine.
              </p>
              <p>
                The electron microprobe and micro-XRF instruments are complimented by a {" "}
                <PageLink
                  text="sample preparation facility"
                  link="https://www.concord.edu/Academics/College-of-Natural-Sciences,-Mathematics,-and-Heal/Department-of-Physical-Science/Labs/Supporting-Equipment.aspx"
                />
                , which contains sieves, rock saws, thin section grinders, and other
                equipment. Additional Concord University analytical equipment available
                for use includes: an atomic force microscope (AFM), polarizing light
                (petrographic) microscopes, Raman spectrometer, gas chromatograph-mass
                spectrometer (GC-MS), gas chromatograph (GC), high performance liquid
                chromatograph (HPLC), Fourier transform infrared spectrometer (FTIR),
                supercritical fluid extraction equipment, a fluorimeter, and UV/Vis
                spectroscopy.{" "}
              </p>
              <p>
                The microanalytical facility is open to academic users from all
                departments of Concord University as well as to visitors from other
                schools, universities, government agencies, non-profit organizations, and
                businesses.
              </p>
              <p>
                We welcome new users and new applications. If you are interested in using
                our facilities, or would like additional information, please feel free to
                contact us.
              </p>
            </article>
          </div>
        </section>
      </main>
    </MarketingContainer>
  )
}
// Home.theme = "light"
