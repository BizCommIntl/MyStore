import React, { createContext, useContext, useReducer, useState } from 'react'
import { GLOBAL_data } from './App'


const initialState = { _id: 'VID', _title: 'VTitle' }
const reducer = (state, action) => {
    console.log('In reducer function: ', state, action)
    alert('In reducer function: \naction.type '+ action.type + '   action.payload ' + action.payload)
    if (action.type === 'ID') return ({ ...state, _id: action.payload })
    if (action.type === 'Title') return ({ ...state, _title: action.payload })

    return (state)
}



export const AppCtx = createContext()
export const AppCtxProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const updateInfo = (info) => {
        console.log('In updateInfo to dispatch function: ', info)
        alert('In reducer function: \n updateInfo ' +info)
        let type = '', payload = ''

        if (info === 'ID') { type = info; payload = 'VID-' + new Date().toLocaleString() }
        if (info === 'Title') { type = info; payload = 'VTitle-' + new Date().toLocaleString() }
        return dispatch({
            type: type,
            payload: payload
        })
    }

    return (
        // <AppCtx.Provider value={{_id:'VID', _title:'VTitle'}}>{children}</AppCtx.Provider>
        <AppCtx.Provider value={{ ...state, updateInfo }}>{children}</AppCtx.Provider>
    )
}

// My Global Custom Hook
export const useMyContextHook = () => {
    return (useContext(AppCtx))
}

// export default function CtxMain() {
//     const { Id, Title } = useContext(GLOBAL_data)
//     const [Info, setInfo] = useState({ Id: 'id-new', Title: 'title-new' })
//     return (
//         <>
//             <p> ===============     Start:  Context is changed here       ==========================</p>
//             <input type="text" value={Info.Id} name="" id="id" onChange={(e) => setInfo({ ...Info, Id: e.target.value })} />
//             <input type="text" value={Info.Title} name="" id="title" onChange={(e) => setInfo({ ...Info, Title: e.target.value })} />

//             <button onClick={() => {Id=Info.Id; Title=Info.Title} }>Set new Values</button>
//             <p> ===============     End:  Context is changed here       ==========================</p>
//         </>
//     )
// }