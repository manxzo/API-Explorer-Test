import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import fetchAiResponse from "./services/fetchAiResponse";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import DeepSeekAPIForm from "./components/DeepSeekAPIKey/DeepSeekAPIForm";
import APIExplorer from "./components/APIExplorer/APIEXplorer";
import APIForm from "./components/APIExplorer/Components/APIForm";
import APIRawResults from "./components/APIExplorer/Components/APIRawResults";
import APIAIResults from "./components/APIExplorer/Components/APIAIResults";

function App() {
  const [deepseekAPIkey, setDeepseekAPIkey] = useState("");
  const [test, setTest] = useState("");
  const [error, setError] = useState("");
  const [errorMessage,setErrorMessage] = useState("")
  useEffect(()=>{
    if(error==="401"){
      setErrorMessage("Add a valid Deepseek API key!")
    }
    else{
      setErrorMessage("")
    }
  },[error])
  useEffect(() => {
    const getResponse = async () => {
      try {
        const response = await fetchAiResponse(
          "im testing my api call, respond with only one word - working",
          deepseekAPIkey,
          setError
        );
        setTest(response);
      } catch (error) {
        console.error(error);
      }
    };
    getResponse();
  }, [deepseekAPIkey]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<div><h1>Home<br/>{test}<br/>{error!==null?errorMessage:<></>}</h1></div>} />
        <Route path="/api/*" element={<APIExplorer/>}/>
        <Route
          path="/settings"
          element={<DeepSeekAPIForm setDeepseekAPIKey={setDeepseekAPIkey} />}
        />
      </Routes>
    </>
  );
}

export default App;
