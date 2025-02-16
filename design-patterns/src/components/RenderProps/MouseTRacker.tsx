import { useState } from "react";
const MouseTracker=({render,}:{render:(position:{x:number;y:number})=>JSX.Element})=>{
    const [position, setPosition] = useState({ x: 0, y: 0 });

return (
    <div
    onMouseMove={(e)=>setPosition({x:e.clientX,y:e.clientY})}
style={{height:"300px",border:"1px solid black"}}>
{render(position)}



    </div>
)





}


export default MouseTracker;