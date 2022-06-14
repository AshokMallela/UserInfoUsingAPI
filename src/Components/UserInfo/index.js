import axios from "axios"
import { useEffect, useState } from "react"

import "./index.css"
const UserInfo = (props) => {
    const { id } = props
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
            .then((res) => {
                console.log(res.data.data)
                setData(res.data.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [id])

    return (
        <div className="card1">
            <div>
                <p>Name: {data.first_name} {data.last_name}</p>
                <p>Email: {data.email}</p>
            </div>

            <div>
                <p>Avatar:</p>
                <img src={data.avatar} alt={data.id} />
            </div>

        </div>
    )
}

export default UserInfo