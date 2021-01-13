import React, { useEffect, useState } from 'react'
import { loadOkrList } from '../../actions'
import {useDispatch, useSelector} from 'react-redux'
import Filter from '../../components/Filter/Filter'
import ListRenderer from '../../components/ListRenderer/ListRenderer'

const HomePage = () => {
    const [filter, setfilter] = useState(null)
    const OkrList = useSelector(state => state.OkrList.data || [])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadOkrList())
    }, [])

    const filterChange = (value) => {
        setfilter(value === '-Select-' ? null : value)
    }

    return (
        <div>
            <Filter filterChange={filterChange}></Filter>
            <ListRenderer OkrList={OkrList} filter={filter}></ListRenderer>
        </div>
    )
}

export default HomePage
