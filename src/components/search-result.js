import React from 'react'
import { Link } from 'gatsby'
import { useInstantSearch, Index } from 'react-instantsearch-hooks-web'
import { List, Avatar } from 'antd'

const { Item } = List
const { Meta } = Item

const ScopedResults = () => {
  const { scopedResults } = useInstantSearch()

  const hits = scopedResults
    .map(({ results }) => results.hits)
    .filter(Boolean)
    .flat()

  return (
    <List
      style={{
        background: '#FFFFFF',
        position: 'absolute',
        right: 0,
        width: '710px',
        zIndex: 150,
      }}
      bordered
      dataSource={hits}
      renderItem={hit => (
        <Item key={hit.slug}>
          <Meta
            avatar={<Avatar src={hit.imageUrl} />}
            title={
              <Link
                to={hit.slug}
                dangerouslySetInnerHTML={{
                  __html: hit._highlightResult.title.value,
                }}
              />
            }
            description={
              <p
                dangerouslySetInnerHTML={{
                  __html: hit._snippetResult.body.value,
                }}
              />
            }
          />
        </Item>
      )}
    />
  )
}

const SearchResult = ({ show }) => {
  return (
    show && (
      <div>
        <Index indexName="news">
          <ScopedResults />
        </Index>
        <Index indexName="events">
          <ScopedResults />
        </Index>
        <Index indexName="directors">
          <ScopedResults />
        </Index>
        <Index indexName="trustees">
          <ScopedResults />
        </Index>
        <Index indexName="managers">
          <ScopedResults />
        </Index>
      </div>
    )
  )
}

export default SearchResult
