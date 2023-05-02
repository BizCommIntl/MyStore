import { useContext } from 'react'
import { GLOBAL_data } from '../App'
import { AppCtx } from '../AppCtxMain'


export const ChildB = () => {
    const { Id, Title } = useContext(GLOBAL_data)
    const { _id, _title } = useContext(AppCtx)


    return (
        <>
            <div style={{ border: '2px solid blue' }}>
                <h2>Child- B Insider *********************</h2>
                <p>ID:{Id}</p>
                <p>Title:{Title}</p>
                <hr />

                Values imported from Starndard "useContext Hook"
                <p>Ctx ID:{_id}</p>
                <p>Ctx Title:{_title}</p>

            </div>
        </>
    )
}
