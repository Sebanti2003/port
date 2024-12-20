import Intropage from "./components/Intropage";
// import New from "./pages/New";
// import Intropage from "./pages/Intropage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="p-2">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intropage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
