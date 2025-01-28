const APIRawResults = ({result}) =>{
    return(
        <div>
          <h1>API Raw Results</h1>
            <pre>{JSON.stringify(result,null,2)}</pre>  
        </div>
        
    )
}
export default APIRawResults;