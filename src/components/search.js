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
    () => algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY),
    [],
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
