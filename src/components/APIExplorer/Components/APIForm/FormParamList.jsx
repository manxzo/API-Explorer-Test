const FormParamList = ({ bodyParams, queryParams, removeParam, method }) => {
    return (
      <div>
        {queryParams.length > 0 && (
          <div>
            <h3>Query Parameters</h3>
            <ul>
              {queryParams.map((param,index) => (
                <li key={index}>
                  <span>{param.key}: {param.value}</span>
                  <button onClick={() => removeParam(param)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        )}
  
        {bodyParams.length > 0 && (
          <div>
            <h3>Body Parameters</h3>
            {method==="GET"?<h4>Body Parameters Invalid for GET</h4>:<></>}
            <ul>
              {bodyParams.map((param,index) => (
                <li key={index}>
                  <span>{param.key}: {param.value}</span>
                  <button onClick={() => removeParam(param)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default FormParamList;