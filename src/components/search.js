import React, { useState, useMemo } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-hooks-web'
import SearchBox from './search-box'
import SearchResult from './search-result'
import useDebounce from '../hooks/use-debounce'

const Search = ({ ...props }) => {
  const [showResults, setShowResults] = useState(false)
  const debouncedShowResults = useDebounce(showResults, 400)

  const searchClient = useMemo(
    () => algoliasearch('6KT8JUCIJ2', 'f77367b43fa2fa0dd94b0711ac38a61e'),
    []
  )

  return (
    <div {...props}>
      <InstantSearch searchClient={searchClient} indexName="events">
        <SearchBox toggleResults={() => setShowResults(!showResults)} />
        <SearchResult show={debouncedShowResults} />
      </InstantSearch>
    </div>
  )
}

export default Search
