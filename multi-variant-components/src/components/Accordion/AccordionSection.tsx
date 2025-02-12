import { cva } from "class-variance-authority";
import React, { ReactNode } from "react"
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const accordionSectionStyles = cva("p-4", {



    variants: {
        variant: {

            default: "bg-gray-100",
            bordered: "border-b border-gray-300"



        },

    },
    defaultVariants: {
        variant: "default"
    }

})

interface AccordionSectionProps {
    children: ReactNode;
    title: string;
    variant?: "default" | "bordered";


}











const AccordionSection = ({ children, title, variant }:
    AccordionSectionProps) => {


    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (

        <div className={twMerge(accordionSectionStyles({ variant }))}>

            <div className="flex flex-row justify-around cursor-pointer "

                onClick={() => setIsOpen(prev => !prev)}

            >
                <h2>{title}</h2>
                <span> {isOpen ? "-" : "+"}</span>

            </div>

            {isOpen && <div>
                {children}
            </div>}

        </div>
    )


}


export default AccordionSection
