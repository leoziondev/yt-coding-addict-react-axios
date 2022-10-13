import { useEffect } from "react"
import axios from 'axios'
import { api } from "../lib/axios"

import { Main } from "../components/ui/Main"
import { MainTitle } from "../components/ui/MainTitle"

export const CustomInstance = () => {

  const fetchData = async () => {
    try {
      const prods = await api.get('/react-store-products')
      const randomUser = await axios('https://randomuser.me/api')
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
      <MainTitle title="Custom Instance" />
    </Main>
  )
}