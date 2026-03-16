import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import ContactUsPage from "./pages/ContactUsPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </>
  )
}

export default App
