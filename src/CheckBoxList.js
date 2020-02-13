import React, {useContext} from 'react'
import {ChecklistContext} from './context'

// const CheckBox = (props) =>{
//     const c = useContext(ChecklistContext);
//     return (
//         <label>
//             <input type='checkbox' value={props.id} checked={} />
//         </label>
//     )
// }


export default function CheckBoxList() {
    const c = useContext(ChecklistContext);
    const handleChange = (e) => {
        // console.log(e.target.checked)
        return c.actions.handleCheck(e.target.value, e.target.checked)
    
    }
    return(
        c.checklist.map((i) =>(
            <label>
                <input value={i.id} type="checkbox" checked={i.checked} onChange={handleChange}/>
                {i.title}
            </label>
        ))

    )
}