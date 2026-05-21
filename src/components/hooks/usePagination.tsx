import {useCallback, useState} from "react"

interface UsePaginationProps {
  total: number // total number of pages
  initialPage?: number // starting page
}

export const usePagination = ({total, initialPage = 1}: UsePaginationProps) => {
  const [active, setActive] = useState(initialPage)

  const setPage = useCallback(
    (page: number) => {
      const next = Math.max(1, Math.min(page, total))
      setActive(next)
    },
    [total]
  )

  const next = useCallback(() => {
    setPage(active + 1)
  }, [active, setPage])

  const previous = useCallback(() => {
    setPage(active - 1)
  }, [active, setPage])

  return {
    active,
    setPage,
    next,
    previous,
    totalPages: total,
    isFirst: active === 1,
    isLast: active === total,
  }
}
