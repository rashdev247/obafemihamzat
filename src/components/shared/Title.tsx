import Head from "next/head"

export default function Title({text}:{text: string}) {
  return (
    <Head>
      <title>{text}</title>
    </Head>
  )
}
