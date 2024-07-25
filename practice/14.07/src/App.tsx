import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import TodoDetail from "./pages/TodoDetail"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<TodoDetail/>}/>

    </Routes>
  )
}

export default App