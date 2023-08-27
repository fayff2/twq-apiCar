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
    <h1 className="text-center text-4xl my-20 mx-auto  bg-slate-950 w-fit text-white">The Rick and Morty API</h1>
<div className='flex flex-wrap justify-center items-center gap-5'> 

{show.map((item,id)=>(
<div className='' key={id}>
  
    <Link to={`/ShowD/${item.id}`}>
<img src={item.image} alt=""/>
</Link>

</div>
))}

</div>
</>
   
  )
}
