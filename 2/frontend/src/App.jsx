import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    async function getData() {
      axios.get('/api/jokes')
        .then((response) => {
          setJokes(response.data)
        })
        .catch((err) => {
          console.log(err);

        })

    }
    getData()
  })

  return (
    <>
      <h1>Jokes</h1>
      <p>Jokes:{jokes.length}</p>

      {
        jokes.map((j, i) => {
          return (

            <div key={j.id} >
              <h3>{j.title}</h3>

            </div>
          )
        })
      }
    </>
  )
}

export default App


// NOTES
// AXIOS(production level features)
// 1.HNADLE WEB REQUEST
// 2.Loading
// 3. to add some thing in api response
// 4. no res.json needed direct  .data

// CORS (CROSS ORIGIN RESOURCE SHARING) 
// 1. Safety feature 
// 2. different https, http or domain, try to acess api 
// 3. it rejects all those request from different protocal or domain.
// 
// 4. can be use at backend and whitelist particular website.
// 5. but keep in mind the url exluding path  

// other way to solve cors!!!!!
// Proxies
// create react app proxy -> package.json ->"proxy":"http://localhost:3000" 
// vite-> config.js-> server:{"proxy":{ '/api':"http://localhost:3000"} }
// server will thought it coming from this same origin