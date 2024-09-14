import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Create from "./pages/Create"
import View from "./pages/View"

export default function Home() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path="create" element={<Create />}/>
        <Route path="view/bookId " element={<View />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
 