import { useEffect } from "react"
import { Main } from "../components/ui/Main"
import { MainTitle } from "../components/ui/MainTitle"
import { api } from "../lib/axios"

export const GlobalInstance = () => {

  const fetchData = async () => {
    try {
      const prods = await api.get('/react-store-products')
      const randomUser = await api.get('https://randomuser.me/api')
      console.log(prods)
      console.log(randomUser)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Main>
      <MainTitle title="Global Instance" />
    </Main>
  )
}