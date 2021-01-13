import React, { useState } from 'react'
import styles from './styles.module.scss'

const options = ['-Select-', 'Company', 'Sales', 'Marketing', 'Finance', 'People', 'Product', 'Management', 'Engineering', 'Administration', 'Customer Success', 'Design']

const Filter = ({filterChange}) => {
    const [Value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
        filterChange(e.target.value)
    }

    return (
        <div className={styles.wrap}>
          <span>Filter by: </span>
          <select value={Value} onChange={onChange} className={styles.select}>
              {options.map(el => <option key={el} value={el}>{el}</option>)}
          </select>
        </div>
      )
}

export default Filter
