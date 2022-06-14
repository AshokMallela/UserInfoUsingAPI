import { useEffect, useState } from "react"
import './App.css';
import axios from 'axios';
import Button from './Components/Button';
import UserInfo from "./Components/UserInfo";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners"
function App() {
  const [total, setTotal] = useState(0)
  const [load, setLoad] = useState(0)
  const [y, setY] = useState(0)
  let b = []

  if (total > 0) {
    for (let i = 1; i <= total; i++) {
      b.push(i)
    }
  }
  useEffect(() => {
    axios.get("https://reqres.in/api/users")
      .then(res => {
        setTotal(res.data.total)
        setLoad(1)
      })
      .catch(e => {
        console.log(e)
      })
  })

  const serUserId = (id) => {
    setY(id)
  }

  return (
    <div className="App">
      <h1 className="App-header">UserInfo</h1>
      {load === 0 ?
        <div>

          <BounceLoader />
          <BarLoader />
          <BeatLoader />
        </div>
        : <div>
          <div>
            {y !== 0 ? <UserInfo id={y} /> : <div><p>Hey User, Please click any button</p></div>}
          </div>
          <div className="button-container">
            {
              total > 0 ? b.map((each, i) => <Button value={each} key={i} userCall={serUserId} />) : null
            }
          </div>
        </div>}




    </div>
  );
}

export default App;
