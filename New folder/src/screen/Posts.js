import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Posts(){
    const [datalist,setdatalist]=useState([])
    let api="https://jsonplaceholder.typicode.com/photos"


    let navigate=useNavigate()
    
    let getdata=()=>{
        axios.get(api)
        .then((res)=>{
            console.log(res)
            setdatalist([...res.data])
        })
        .catch((err)=>{
            console.log(err)
        })
       
        


    }
    useEffect(()=>{
       getdata()
          },[])

          const movetosinglepost=(i)=>{
            navigate(`/SinglePost/${i}`)

          }
    return(
        <>
        <h1>Home</h1>
    
       {
       datalist.map((x,i)=>{
        return(
            <div key={i} className="bor" onClick={()=>movetosinglepost(x.id)} >
        <p>{x.title}</p>
        <img src={x.thumbnailUrl} width="100px" alt="" />
        </div>)
       })
       }


        </>
    )
}
export default Posts