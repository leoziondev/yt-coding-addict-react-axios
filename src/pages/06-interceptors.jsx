import { useEffect } from "react"
import { Main } from "../components/ui/Main"
import { MainTitle } from "../components/ui/MainTitle"
import authFetch from "../lib/interceptors"

export const Interceptors = () => {

  const fetchData = async () => {
    try {
      const res = await authFetch('/react-store-productss')
      console.log(res)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Main>
      <MainTitle title="Interceptors" />
    </Main>
  )
}