import APINavbar from "./Components/APINavbar/APINavbar";
import APIRawResults from "./Components/APIResults/APIRawResults";
import APIAIResults from "./Components/APIResults/APIAIResults"
import APIForm from "./Components/APIForm/APIForm";
import { Route, Routes } from "react-router";
import { useState } from "react";

const APIExplorer = () => {
const [result,setResult] = useState();
  return (
    <div>
      <APINavbar />
      <Routes>
        <Route path="/query" element={<APIForm setResult={setResult}/>} />
        <Route path="/result/raw" element={<APIRawResults result={result}/>} />
        <Route path="/result/ai" element={<APIAIResults />} />
        <Route index element={<APIForm />} />
      </Routes>
    </div>
  );
};

export default APIExplorer;
