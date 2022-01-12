import React,{useState} from 'react'

function UseStateHooks() {
    const [items,setItems] = useState([])

    const addItems = () => {
        setItems([
            ...items,
            {
                id:items.length,
                value : Math.floor(Math.random()*10)
            }

        ])
    }
    return(
        <div>
            <button onClick={addItems}>Add</button>
            {items.map(
                item => (<li key={item.id}>{item.value}</li>)
            )}
        </div>
        
    )

}

export default UseStateHooks


// const [name, setName] = useState({ userFirstName: '', userLastName: '' })
// return (
//     <div>
//         <label>First Name</label>
//         <input type='text' value={name.userName} onChange={e => setName({ ...name, userFirstName: e.target.value })} />
//         <label>Last Name</label>
//         <input type='text' value={name.userLastName} onChange={e => setName({ ...name, userLastName: e.target.value })} />
//         <div>first Name    {name.userFirstName}</div>
//         <div>last Name {name.userLastName}</div>
//         <h2>{JSON.stringify(name)}</h2>
//     </div>
// )