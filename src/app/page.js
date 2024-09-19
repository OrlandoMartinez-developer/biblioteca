"use client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./pages/Indexndex";
import Create from "./pages/Createreate";
import View from "./pages/View";
import { useEffect, useState } from "react";
import Store from "./store/store"; // Cambié 'store' a 'Store' con la S mayúscula

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return null;
  }

  return (
    <div>
      <Store> 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="create" element={<Create />} />
            <Route path="view/:bookId" element={<View />} />
          </Routes>
        </BrowserRouter>
      </Store>
    </div>
  );
}
