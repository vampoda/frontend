import { useState,useEffect,useRef } from "react";
import { useFormState } from "react-dom";

interface Image{

    id:number,
    url:string;
}
const random = ()=> Math.floor(Math.random() * 1_000_000);



const fetchImages=async (page:number):Promise<Image[]>=>{

return new Array(12).fill(0).map((_,i)=>(
    
    
    
    {
    id:random(),
    url: `https://picsum.photos/300/400?random=${page * 10 + i}`,



}))

}

interface ImageWithStatusProps{
    src:string
}

function ImageWithStatus({src}:ImageWithStatusProps){
const [status,setStatus]=useState<"loading"|"loaded"|"error">("loading")
return(
<div
className="relative w-full h-[400px] bg-gray-200"
>

{status!=="loaded"&&(
    <div className=" 
    
    w-[300px]
    h-[200px]
    animate-pulse
    text-center
    ">
          <p className="text-gray-500 text-2xl
          text-center
          
          
          ">Loading...</p>
        </div>




)}


<img src={src} alt="randomimage"
loading="lazy"
onLoad={()=>setStatus("loaded")}
onError={()=>setStatus("error")}

className={`w-full h-full object-cover transition-opacity

duration-500
${status==="loaded"?"opacity-100":"opacity-0"}

`}

/>
</div>)




}


export default function InfiniteGallery(){

    const [images,setImages]=useState<Image[]>([])

    const [page, setPage] = useState<number>(1);

const [loading,setLoading]=useState<boolean>(false)
const observeRef=useRef<HTMLDivElement|null>(null)

useEffect(()=>{
    const loadImages = async ()=> {
        setLoading(true);
        const newImages = await fetchImages(page);
        setImages((prev)=>[...prev, ...newImages]);
        setLoading(false);
      };

loadImages()

}
,[page]
)


useEffect(
    ()=>{


const observer=new IntersectionObserver(

(entries)=>{
    if(entries[0].isIntersecting){
        setPage((prev)=>prev+1)
    }
},
{rootMargin:"100px"}

)


if(observeRef.current){
    observer.observe(observeRef.current)


}


return ()=>{
    if(observeRef.current){
        observer.unobserve(observeRef.current)
    }

observer.disconnect()



}



    },[images]
)
   

return (
    <div className="">
        <div
        className="flex flex-wrap w-full gap-4"
        
        >
{images.map((img)=>(
    <div
    key={img.id}>

<ImageWithStatus

src={img.url}
></ImageWithStatus>

    </div>
))}


        </div>
<div
ref={observeRef}
className="w-full text-center py-4"


>


{loading ? <p>loading more images...</p>:<p>
    
    scroll down for more images
    </p>}

</div>





    </div>
)



}

