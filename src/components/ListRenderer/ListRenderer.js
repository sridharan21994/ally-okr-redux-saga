import React, { useEffect, useState } from 'react'
import Accordion from '../Accordian/Accordian'

const ListRenderer = ({OkrList = [], filter = null}) => {
    const [ParentList, setParentList] = useState([])
    const [ChildList, setChildList] = useState([])

    const transformData = (input) => {
        const parent = [];
        const child = {};
        input.forEach(element => {
            if (element['parent_objective_id']) {
                child[element['parent_objective_id']] = child[element['parent_objective_id']] || []
                child[element['parent_objective_id']].push(element)
            } else {
                parent.push(element)
            }
        });
        setChildList(child)
        setParentList(parent)
    }

    useEffect(() => {
        transformData(OkrList)
    }, [OkrList])

    const Item = ({el,index}) => {
        return (<div>
            <Accordion title={el.title}>
                {ChildList[el.id] && ChildList[el.id].map(el => <p key={el.id}>{el.title}</p>)}
            </Accordion>
        </div>)
    }

    const ListItem = ({el, index}) => {
        return (filter ? el['category']===filter ? <Item el={el} index={index} /> : null : <Item el={el} index={index} />)
    }

    return (
        <div>
            {ParentList.map((el,index) => <ListItem key={el.id} index={index} el={el} />)}
        </div>
    )
}

export default ListRenderer
