import { useEffect } from "react";
const APICodePreview = ({ fullConfig, setCode, code }) => {
  const { apiConfig, bodyParams, queryParams } = fullConfig;

  useEffect(() => {
    const { endpoint, method, apiKey, apiKeyHeader, contentType } = apiConfig;
    const searchParams = new URLSearchParams();

    queryParams.forEach(({ key, value }) => searchParams.append(key, value));
    if (!apiKeyHeader && apiKey) {
      searchParams.append("api_key", apiKey);
    }

    const headers = {
      "Content-Type": contentType,
    };
    if (apiKey && apiKeyHeader) {
      headers.Authorization = `Bearer ${apiKey}`;
    }
    const body = {};
    if (method !== "GET" && bodyParams.length > 0) {
      for (const param of bodyParams) {
        const { key, value } = param;
        try {
          body[key] = JSON.parse(value);
        } catch {
          body[key] = value;
        }
      }
    }
    const url =
      queryParams.length > 0 ? `${endpoint}?${searchParams}` : endpoint;
    const generatedCode = `fetch('${url}', {
        method: '${method}',
        headers: ${JSON.stringify(headers, null, 2)},
        ${JSON.stringify(body)!=="{}" ? `body: JSON.stringify(${JSON.stringify(body, null, 2)})` : ""}
      })`;
    setCode(generatedCode);
  }, [fullConfig]);

  const handleInputChange = (event) => {
    setCode(event.target.value);
  };
  return (
    <div >
      <label htmlFor="preview">Code:</label>
      <input
        id="preview"
        name="preview"
        value={code}
        onChange={handleInputChange}
        className="code-preview"
      ></input>
    </div>
  );
};
export default APICodePreview;
