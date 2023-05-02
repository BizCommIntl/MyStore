import { useContext } from 'react'
import { GLOBAL_data } from '../App'
import { useMyContextHook } from '../AppCtxMain'



export const ChildA = () => {
    const { Id, Title } = useContext(GLOBAL_data)
    const { _id, _title, updateInfo } = useMyContextHook()
    return (
        <>
            <div style={{border:'2px solid red'}}>
                <h2>Child- A Insider *********************</h2>
                <button onClick={()=>updateInfo('ID')}>change ID</button>
                <button onClick={()=>updateInfo('Title')}>change Title</button>

                <p>ID:{Id}</p>
                <p>Title:{Title}</p>
                <hr />
                
                Values imported from "My Custom Hook" replacing =  "useContext Hook"
                <p>Ctx ID:{_id}</p>
                <p>Ctx Title:{_title}</p>

                
            </div>
        </>
    )
}
