import React from 'react'
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
        <h1>404 Not Found</h1>
        <p>sorry,the page you are looking for doesnot exist</p>
        <button onClick={()=>navigate("/")}>Take me Back</button>
    </div>
  )
}

export default NotFound;