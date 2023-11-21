
import { useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

function Contact() {
  const [data, setData] = useState([])
  let api = 'https://jsonplaceholder.typicode.com/todos'

  let getAPIData = () => {
    axios
      .get(api)
      .then((res) => {

        setData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data)

  return (
    <div className='hz'>
      <Button onClick={getAPIData} variant="contained">
        get data
      </Button>
      {/* {data.map((e, i) => <div>
        <h3>{e.id}</h3>
        <h4>{e.title}</h4>
        <h5>{e.body}</h5>
        
      </div> )} */}
      {
        data.map((e)=>{
          const {id,title,body}=e;
          return(
            <div className='ham'>
            <h1>{id}</h1>
            <h3>{title}</h3>
            </div>
          )

        })
      }
    </div>
  )
}



export default Contact;