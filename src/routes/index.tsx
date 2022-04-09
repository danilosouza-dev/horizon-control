import { Navigate, Route, Routes } from "react-router-dom";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<p>Pagina inicial</p>}/>
      <Route path="*"element={<Navigate to="/pagina-inicial"/>} />
    </Routes>
  )
}