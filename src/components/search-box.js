import React from 'react'
import { useSearchBox } from 'react-instantsearch-hooks-web'
import { Input } from 'antd'

const { Search } = Input

const SearchBox = ({ toggleResults }) => {
  const { refine } = useSearchBox()

  return (
    <Search
      placeholder="Search"
      allowClear
      onChange={e => refine(e.target.value)}
      onFocus={toggleResults}
      onBlur={toggleResults}
    />
  )
}

export default SearchBox
