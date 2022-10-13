import { FirstRequest } from "./pages/01-first-request"

export const App = () => {

  return (
    <div className="bg-slate-50 w-full min-h-screen">
      <h1 className="text-4xl text-indigo-500 font-bold text-center py-8">Axios <span className="text-slate-800">Tutorial</span></h1>
      <FirstRequest />
    </div>
  )
}
