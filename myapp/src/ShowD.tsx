import React from 'react'
import { useParams } from 'react-router-dom';

type Ishow ={
    id:number;
    name:string;


}
export default function ShowD() {
    const [show , setShow]= React.useState<Ishow[]>([]);
    const {id} = useParams();

    React.useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res)=>res.json())
        .then((data)=> setShow([data.results]))
    },[id]);

  return (
<>

{show.map((item,id)=>(
<div key={id}>
<img src={item.name} alt="" />
</div>

))}
</>
   
  )
}
