import { useEffect } from "react"
import { Main } from "../components/ui/Main"
import { MainTitle } from "../components/ui/MainTitle"
import { api } from "../lib/axios"

export const FirstRequest = () => {

  const fetchData = async () => {
    try {
      const response = await api.get('/react-store-products')
      const data = response.data
      console.log(data)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <Main>
      <MainTitle title="First Request" />
    </Main>
  )
}