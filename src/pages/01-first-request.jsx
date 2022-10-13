import { useEffect } from "react"
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
    <div className="p-8">
      <h2 className="text-slate-700 font-semibold text-lg">First Request</h2>
    </div>
  )
}