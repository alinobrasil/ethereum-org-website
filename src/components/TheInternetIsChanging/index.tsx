import { Fragment } from "react"
import { useTranslation } from "next-i18next"
import { FaCheck } from "react-icons/fa"

import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTag,
} from "../ui/section"

type Item = {
  oldLabel: string
  newLabel: string
  explanation: (string | React.ReactNode)[]
}

// TODO: Extract strings for intl
// TODO: Clean up and finalize copy; currently WIP
const items: Item[] = [
  {
    oldLabel: "Discriminatory",
    newLabel: "Equal Access",
    explanation: [
      "Not everyone has the same opportunities or ability to use certain resources, services, or information.",
      "Some people might have more or better access, while others are left out or given less.",
      "Anyone in the world should be able to participate as a user, observer or developer, on a maximally equal access. Participation should be permissionless and open to everyone.",
      "Ethereum protocol is designed to be fair and impartial. It only focuses on whether the process is valid, not who’s behind it.",
    ],
  },
  {
    oldLabel: "Censored",
    newLabel: "Censorship Resistant",
    explanation: [
      "Services decide who gets to speak or participate online, which can silence voices unfairly.",
      "It also means you can lose access to your following or communities without any say or way to appeal.",
      "Nobody should be able to stop anyone from using Ethereum apps or doing what they want. Bad actors should be addressed at a different layer.",
    ],
  },
  {
    oldLabel: "Opaque",
    newLabel: "Transparent",
    explanation: [
      "Anyone should be able to check whether Ethereum and its apps are working correctly and are following the rules their creators claim the apps have, even if you don't trust the creators.",
    ],
  },
  {
    oldLabel: "Centralized",
    newLabel: "Decentralized",
    explanation: [
      "Centralization gives too much power to one group, which can lead to censorship or control over users.",
      "It also creates a single point of failure, making the system more vulnerable to hacks or outages.",
      "Ethereum is not owned or controlled by any particular entity, even the Ethereum source code is not produced by a single company.",
      "Ethereum exists thanks to thousands of independent individuals around the world working together for Ethereum’s independence.",
    ],
  },
  {
    oldLabel: "Monopolistic",
    newLabel: "Distributed",
    explanation: [
      "Some companies and individuals have grown so strong they control most of the resources, gaining significant power over others.",
      "This allows them to influence decisions and outcomes to their benefit while limiting opportunities for others.",
    ],
  },
  {
    oldLabel: "Coercive",
    newLabel: "Opt-in",
    explanation: [
      "Current monopolies try to capture and trap you inside a walled ecosystem.",
      "Ethereum community builds tools that do their task but otherwise freely integrate with a wider open ecosystem instead.",
    ],
  },
]

const TheInternetIsChanging = () => {
  const { t } = useTranslation("page-index")
  return (
    <Section id="values">
      <SectionContent className="flex flex-col items-center">
        <SectionTag>{t("page-index:page-index-values-tag")}</SectionTag>
        <SectionHeader>
          {t("page-index:page-index-values-header")}
        </SectionHeader>
        <p className="text-lg text-body-medium">
          {t("page-index:page-index-values-description")}
        </p>
      </SectionContent>
      {/* // TODO: Add tooltip popups */}
      <div className="mt-19 overflow-hidden rounded-2xl">
        <div className="group/new flex max-w-full overflow-hidden bg-accent-a-low-contrast">
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="group-hover/new:animate-pause flex animate-scroll-left items-center space-x-10 py-6 ps-10"
              >
                {items.map(({ newLabel }) => (
                  <Fragment key={newLabel}>
                    <button className="flex h-fit items-center gap-x-1 text-nowrap rounded-full bg-blue-200/20 px-4 py-1 font-bold uppercase text-accent-a dark:bg-blue-400/20">
                      <FaCheck className="text-success" /> {newLabel}
                    </button>
                    <div className="h-1.5 min-w-1.5 rounded-full bg-accent-a" />
                  </Fragment>
                ))}
              </div>
            ))}
        </div>
        <div className="group/old flex max-w-full overflow-hidden bg-background-highlight">
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="group-hover/old:animate-pause flex animate-scroll-right items-center space-x-10 py-6 pe-10"
              >
                {items.map(({ oldLabel }) => (
                  <Fragment key={oldLabel}>
                    <button className="h-fit text-nowrap rounded-full bg-gray-200/20 px-4 py-1 font-bold uppercase text-disabled dark:bg-gray-950">
                      {oldLabel}
                    </button>
                    <div className="h-1.5 min-w-1.5 rounded-full bg-accent-a"></div>
                  </Fragment>
                ))}
              </div>
            ))}
        </div>
      </div>
    </Section>
  )
}

export default TheInternetIsChanging
