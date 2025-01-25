import { useState } from "react";

const DeepSeekAPIForm = (props) => {
  const [key, setKey] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setDeepseekAPIKey(key);
    setKey("");
  };
  const handleRemove = (event)=>{
    event.preventDefault();
    setKey("");
    props.setDeepseekAPIKey(key);
    
  }
  const handleInputChange = (event) => {
    setKey(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="deepseekkey"></label>
        <input
          id="deepseekkey"
          name="deepseekkey"
          value={key}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Change Key</button>
        <button onClick={handleRemove}>Remove Key</button>
      </form>
    </div>
  );
};
export default DeepSeekAPIForm;
