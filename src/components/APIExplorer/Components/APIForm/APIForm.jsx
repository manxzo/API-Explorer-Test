import { useEffect, useState } from "react";
import FormAddParams from "./FormAddParams";
import FormParamList from "./FormParamList";
import APICodePreview from "./APICodePreview";
import { useNavigate } from "react-router";
import "./APIForm.css"
const APIForm = ({ setResult }) => {
  //API Base Config/Headers
  const [apiConfig, setApiConfig] = useState({
    endpoint: "",
    apiKey: "",
    apiKeyHeader: true,
    method: "GET",
    contentType: "application/json",
  });
  //API Parameters (Query/Body)
  const [paramList, setParamList] = useState([]);
  const [bodyParams, setBodyParams] = useState([]);
  const [queryParams, setQueryParams] = useState([]);
  //Compiled Data for easier conversion into preview code
  const [fullConfig, setFullConfig] = useState({
    apiConfig: apiConfig,
    bodyParams: bodyParams,
    queryParams: queryParams,
  });
  useEffect(() => {
    setFullConfig({
      apiConfig: apiConfig,
      bodyParams: bodyParams,
      queryParams: queryParams,
    });
  }, [apiConfig, bodyParams, queryParams]);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  //Handles Change in the Base Config Form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setApiConfig((prev) => ({ ...prev, [name]: value.trim() }));
  };
  let navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path);
  };

  //Filters the Parameters into query and body when the parameter list updates
  useEffect(() => {
    setBodyParams(paramList.filter((param) => param.location === "Body"));
    setQueryParams(paramList.filter((param) => param.location === "Query"));
  }, [paramList]);

  //Functions for updating the Parameter List
  const addParam = (newParam) => {
    setParamList((prev) => [...prev, newParam]);
  };
  const removeParam = (remParam) => {
    setParamList((prev) =>
      prev.filter(
        (param) =>
          param.key !== remParam.key || param.location !== remParam.location
      )
    );
  };

  const handleFetch = (event) => {
    event.preventDefault();
    setError("");
    const runCode = async () => {
      try {
        const response = await new Function("return " + code)();
        if (!response.ok) {
          setError("HTTP ERROR:", response.status);
        }
        if (response.ok) {
          const data = await response.json();
          setResult(data);
          setError("Success-view results by pressing the buttons below");
        }
      } catch (error) {
        console.error("API Error:", error.message);
        setError(error.message);
      }
    };
    runCode();
  };

  return (
    <div>
      <h1>API FORM</h1>
      <form>
        <div>
          <label htmlFor="endpoint">URL:</label>
          <input
            id="endpoint"
            name="endpoint"
            value={apiConfig.endpoint}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="apiKey">API Key:</label>
          <input
            id="apiKey"
            name="apiKey"
            value={apiConfig.apiKey}
            onChange={handleInputChange}
            type="password"
          />
          <label htmlFor="apiKeyHeader">API Key Location:</label>
          <select
            id="apiKeyHeader"
            name="apiKeyHeader"
            value={apiConfig.apiKeyHeader}
            onChange={(event) =>
              setApiConfig((prev) => ({
                ...prev,
                apiKeyHeader: event.target.value === "true",
              }))
            }
          >
            <option value={true}>Header</option>
            <option value={false}>Query Parameter</option>
          </select>
        </div>

        <div>
          <label htmlFor="method">Method:</label>
          <select
            id="method"
            name="method"
            value={apiConfig.method}
            onChange={handleInputChange}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
      </form>
      <FormAddParams addParam={addParam} method={apiConfig.method} />
      <FormParamList
        bodyParams={bodyParams}
        queryParams={queryParams}
        removeParam={removeParam}
        method={apiConfig.method}
      />
      <APICodePreview fullConfig={fullConfig} setCode={setCode} code={code} />
      <button onClick={handleFetch}>Fetch</button>
      <p>{error}</p>
      <div>
        <button onClick={() => routeChange("/api/result/raw")}>
          View RAW JSON
        </button>
        <button onClick={() => routeChange("/api/result/ai")}>
          Get AI Insights
        </button>
      </div>
    </div>
  );
};

export default APIForm;
