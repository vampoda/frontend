import { useState  } from "react";


interface MenuItemProps{
  
    item:any
    onSelect:(content:string)=>void

}





const MenuItem:React.FC<MenuItemProps>=({item,onSelect})=>{

const [expanded,setExpanded]=useState(false)

return <>
<div

className="ml-4"
>

<div
className="cursor-pointer p-2 bg-gray-200 rounded-md"

onClick={() => {
    if (item.children) setExpanded(!expanded)
    else onSelect(item.content)
  }}

>

          {item.title} {item.children && (expanded ? "▼" : "▶")}
 
</div>
{expanded &&
        item.children &&
        item.children.map((child: any) => (
          <MenuItem key={child.id} item={child} onSelect={onSelect} />
        ))}
    </div>

</>


}
export default MenuItem;