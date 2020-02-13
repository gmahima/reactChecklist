import React, {createContext, useState} from 'react';
export const ChecklistContext = createContext(null);
export function Provider(props) {
    const [checklist, setChecklist] = useState([
        {title: 'naruto', id: '0naruto'},
        {title: 'snk', id: '01snk'},
        {title: 'gekkan shoujo nozaki kun', id: '02nozaki'}
    ])
    const handleCheck = (id, val) => {
        console.log("1) "+ id + " : " + val)
        const i = checklist.findIndex(t => t.id === id);
        const newList = checklist;
        checklist[i].checked = val;
        setChecklist(checklist);
        console.log(checklist)
    }
    return(
        <ChecklistContext.Provider
            value={{
                checklist: checklist,
                actions: {
                    handleCheck: handleCheck
                }
            }}
        >{props.children}</ChecklistContext.Provider>
    )
}
