import { Container } from "./components/ui/Container"
import { FirstRequest } from "./pages/01-first-request"
import { Headers } from "./pages/02-headers"

export const App = () => {

  return (
    <Container>
      <h1 className="text-4xl text-indigo-500 font-bold text-center py-8">Axios <span className="text-slate-800">Tutorial</span></h1>
      <Headers />
    </Container>
  )
}
