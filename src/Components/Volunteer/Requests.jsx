import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Requests = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        const res = await axios.get("/transport/get")
        setData(res.data.data)
        console.log(res.data.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const onAccept = async(d) => {
        await axios.put('/transport/update/'+localStorage.getItem('id')+"/"+d._id)         
          
    }

    return (
        <div style={{width: '80vw', margin: '100px auto', display: 'flex', justifyContent: 'center' }}>
            {
                data.map((d) => {
                    return <div class="card" style={{width: "18rem",margin:'10px'}}>
                        <img src={d?.donationRequestId?.imageURL} class="card-img-top" alt="..." />
                        <div class="card-body">
                            
                            <p class="card-text">{d?.donationRequestId?.address}</p>
                            <button onClick={()=>{onAccept(d)}} class="btn btn-primary">Accept</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
