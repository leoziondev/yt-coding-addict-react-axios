import { useState } from "react"
import { Main } from "../components/ui/Main"
import { MainTitle } from "../components/ui/MainTitle"
import { api } from "../lib/axios"

export const PostRequest = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await api.post('/axios-tutorial-post', {
        name,
        email
      })

      console.log(res.data)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <Main>      
      <section className="max-w-md mx-auto bg-white shadow rounded-md p-8">
        <MainTitle title="Post Request" />
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold text-sm tracking-wide">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-slate-50 border border-slate-100 rounded-md py-2 px-4 mt-1"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="email" className="font-semibold text-sm tracking-wide">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-50 border border-slate-100 rounded-md py-2 px-4 mt-1"
            />
          </div>
          <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-sm rounded-md py-2 px-4">
            Login
          </button>
          </div>
        </form>
      </section>
    </Main>
  )
}