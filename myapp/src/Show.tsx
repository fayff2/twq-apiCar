import React from 'react'
import { Link } from 'react-router-dom';


type Ishow ={
    id:number;
    image:string;
}

export default function Show() {
    const [show , setShow]= React.useState<Ishow[]>([]);

    React.useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then((res)=>res.json())
        .then((data)=> setShow(data.results))
    },[]);

  return (
<>

{show.map((item,id)=>(
<div key={id}>
    <Link to={`details/${item.id}`}>
<img src={item.image} alt="" />
</Link>
</div>
))}
</>
   
  )
}
