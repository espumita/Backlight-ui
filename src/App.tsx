import React, { useState, useEffect } from 'react';
import type { OpenAPIObject } from "openapi3-ts";
import axios from 'axios'

function App() {
  const [open, setOpen] = useState<OpenAPIObject | undefined>(undefined)
  useEffect(() => {
    if(open != undefined) return;
    axios.get('https://localhost:44349/back/openapi.json')
    .then(result => {
      console.log(result.data)
      setOpen(result.data)
    })
    .catch(error => console.error(error))
  });
  return (
    <div>
     {JSON.stringify(open)}
    </div>
  );
}

export default App;
