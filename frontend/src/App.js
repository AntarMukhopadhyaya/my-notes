import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "antd/dist/antd.css";
import NoteCreate from "./NoteCreate";
import NoteEdit from "./NoteEdit";
import NoteShow from "./NoteShow";
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<NoteCreate />} />
        <Route path="/note/edit/:id" element={<NoteEdit />} />
        <Route path="/note/:id" element={<NoteShow />} />
       
      </Routes>
    </Router>
  );
}

export default App;
