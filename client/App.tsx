import "./global.css";
import "./site.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import KeyGenerationCeremony from "./pages/KeyGenerationCeremony";

// Only production builds may be indexed; previews and dev stay out of search.
document
  .getElementById("robots-meta")
  ?.setAttribute("content", import.meta.env.PROD ? "index, follow" : "noindex, nofollow");

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/services/key-generation-ceremony" element={<KeyGenerationCeremony />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById("root")!).render(<App />);
