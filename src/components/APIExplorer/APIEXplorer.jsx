import APINavbar from "./Components/APINavbar";
import APIRawResults from "./Components/APIRawResults";
import APIAIResults from "./Components/APIAIResults";
import APIForm from "./Components/APIForm";
import { Route, Routes } from "react-router";
// Change the APIExplorer component to:
const APIExplorer = () => {
  return (
    <div>
      <APINavbar />
      <Routes>
        <Route path="/query" element={<APIForm />} />
        <Route path="/result/raw" element={<APIRawResults />} />
        <Route path="/result/ai" element={<APIAIResults />} />
        <Route index element={<APIForm />} />
      </Routes>
    </div>
  );
};

export default APIExplorer;
