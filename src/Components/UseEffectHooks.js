import React,{useEffect,useState} from 'react'

function UseEffectHooks() {

    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    const [timer,setTimer] = useState(0)
    // useEffect(() => {
    //     document.title=`${count}`
    //     console.log(`document updated`)
    // },[])

    const tick = () =>{
        setTimer(prevTimer => prevTimer +1)
    }

    useEffect(() => {
        const interval = setInterval(tick , 1000);
      return() =>{
          clearInterval(interval)
      }
    },[])

    return (
        <div>
            {timer}
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Change Title - {count}</button>
        </div>
    )
}

export default UseEffectHooks
