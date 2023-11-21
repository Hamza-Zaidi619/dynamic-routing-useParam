import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"



function SinglePost() {
    const [product,setProduct]=useState([])

    const {productId} = useParams()

    let api = `https://jsonplaceholder.typicode.com/photos/${productId}`;
      
    let getdata=()=>{
        axios.get(api)
        .then((res)=>{
            console.log(res)
            setProduct([res.data])
        })
        .catch((err)=>{
            console.log(err)
        })
       
        


    }
    useEffect(()=>{
       getdata()
          },[]);

    return (
        <>
        <h1>DetailPage</h1>
    
       {
       product.map((x,i)=>{
        return(
            <div key={i} className="bor" >
        <p>{x.title}</p>
        <img src={x.thumbnailUrl} width="100px" alt="" />
        </div>)
       })
       }


        </>
    )
    





}
export default SinglePost;