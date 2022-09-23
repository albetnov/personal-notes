import { useCallback, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function useTopBar () {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('title') || '')

  const setKeywordHandler = useCallback(
    (value) => {
      setSearch(value)
      setSearchParams({ title: value })
    },
    [setSearchParams]
  )

  return useMemo(
    () => ({
      search,
      setKeywordHandler
    }),
    [search, setKeywordHandler]
  )
}
