import React,{useState,useEffect} from 'react'

function MousePositionHooks() {

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    
    const logPosition = (e) =>{
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() =>{
        console.log("useEffect called")
        window.addEventListener("MouseMove", logPosition)
    })
    return (
        <div>
            x - {x} , y - {y}
        </div>
    )
}

export default MousePositionHooks
