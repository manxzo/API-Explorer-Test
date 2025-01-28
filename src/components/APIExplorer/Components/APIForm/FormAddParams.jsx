import { useState, useEffect } from "react";

const FormAddParams = ({ addParam, method }) => {
  //Parameter to Add
  const [param, setParam] = useState({ key: "", value: "", location: "Query" });
  //Dynamically forces the location to Query if method is GET as GET method does not require body
  useEffect(() => {
    if (method === "GET") {
      setParam((prev) => ({ ...prev, location: "Query" }));
    }
  }, [method]);
 //Handles Change in the Parameter form and enforces no whitespace to prevent errors
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setParam((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));
  };
  //Adds the new Parameter to the Parameter List
  const handleSubmit = (event) => {
    event.preventDefault();
    addParam(param);
    setParam({ key: "", value: "", location: "Query" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Parameters:</h3>

      <div>
        <label htmlFor="key">Key:</label>
        <input
          id="key"
          name="key"
          value={param.key}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="value">Value:</label>
        <input
          id="value"
          name="value"
          value={param.value}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="location">Location:</label>
        <select
          id="location"
          name="location"
          value={param.location}
          onChange={handleInputChange}
          disabled={method === "GET"}
        >
          <option value="Query">Query</option>
          <option value="Body" disabled={method === "GET"}>
            Body
          </option>
        </select>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};
export default FormAddParams;
