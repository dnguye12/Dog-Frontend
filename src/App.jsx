import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, fab, far);

import { Routes, Route } from "react-router-dom"
import RecommendBreedPage from "./routes/recommend-breed/RecommendBreedPage"
import HomePage from "./routes/home/HomePage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recommend-breed/*" element={<RecommendBreedPage />} />
    </Routes>
  )
}

export default App
