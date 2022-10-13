import { useState } from "react"
import { Main } from "../components/ui/Main"
import { MainTitle } from "../components/ui/MainTitle"
import { api } from "../lib/axios"

export const Headers = () => {
  const [joke, setJoke] = useState('random dad joke')

  const fetchDadJoke = async () => {
    try {
      const { data } = await api.get('https://icanhazdadjoke.com/')
      setJoke(data.joke)
    } catch (error) {
      console.log(error.response)
    }
  }
  return (
    <Main>
      <MainTitle title="Headers" />
      <section className="text-center py-12">
        <button
          onClick={fetchDadJoke}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-sm rounded-md py-2 px-4">
          Random joke
        </button>
        <p className="mt-4 text-slate-600">{joke}</p>
      </section>
    </Main>
  )
}