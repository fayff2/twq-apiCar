import React from 'react'
import { useParams , Link } from 'react-router-dom';

type Ishow ={
    id:number;
    name:string;
    image:string;
    gender:string;
    status:string;
    species:string;


}
export default function ShowD() {
    const [show ,setShow]= React.useState<Ishow[]>([]);
    const {id} = useParams();

    React.useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res)=>res.json())
        .then((data)=>console.log(setShow([data])))
    },[id]);

  return (
<div className='min-h-screen py-6 flex flex-col justify-center items-center sm:py-12'>

{show.map((item,id)=>(
<div key={id}>
  <img src={item.image} alt="" className='mb-4'/>
<p>Name: {item.name}</p>
<p> Gender: {item.gender}</p>
<p>Status: {item.status}</p>
<p>species:{item.species}</p>
<div className="mt-5">
<Link to="/">
 <a className="bg-transparent hover:bg-slate-950 text-slate-950 font-semibold hover:text-white py-2 px-4 border border-stone-800 hover:border-transparent rounded">
Back
</a> </Link>
</div>

</div>

))}
</div>
   
  )
}
