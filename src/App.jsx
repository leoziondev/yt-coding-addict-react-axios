import { Container } from "./components/ui/Container"
import { Interceptors } from "./pages/06-interceptors"

export const App = () => {

  return (
    <Container>
      <h1 className="text-4xl text-indigo-500 font-bold text-center py-8">Axios <span className="text-slate-800">Tutorial</span></h1>
      <Interceptors />
    </Container>
  )
}
