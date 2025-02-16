import React from 'react'

interface ToastProps{

id:number;
message:string;
type?:"success"|"error"|"warning"|"info";
duration?:number;
onClose:(id:number)=>void
}

const iconMap={
    success:""
}


const Toast = () => {
  return (
    <div>Toast</div>
  )
}

export default Toast