import { useEffect } from "react";

export const Message = () =>{

    useEffect(()=>{
        console.log("Component mount");

        return ()=>{
            console.log("Component Unmount");
        }
    },[])

    return (
        <>
        <h6>
            Este usuario ya existe
        </h6>
        </>

    );

};