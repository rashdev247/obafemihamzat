/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-cycle */
import {useEffect, useState} from "react"
// import PaginationArrowIcon from "./PaginationArrowIcon"
import IconArrowBackMobile from "../IconComponents/IconArrowBackMobile"
import IconArrowNextMobile from "../IconComponents/IconArrowNextMobile"
import { usePagination } from "../hooks/usePagination"
import PaginationArrowIcon from "../PaginationArrowIcon"




type PaginationProps = {
  totalItems: number
  itemsPerPage: number
  isReport?: boolean
  patientIdFromSearch?: number | undefined
  handlePagination?: ({from, to}: {from: number; to: number}) => void
  firstPage?: number
}

const CustomPagination = ({
  itemsPerPage,
  totalItems,
  handlePagination,
  patientIdFromSearch,
  isReport,
  firstPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const pagination = usePagination({total: totalPages, initialPage: 1})
  const [fromPages, setFromPages] = useState(1)
  const [toPages, setToPages] = useState(
    totalItems > itemsPerPage ? itemsPerPage : totalItems
  )
  const ismobile = false

  const updatePagination = (from: number, to: number) => {
    setFromPages(from)
    setToPages(to)

    handlePagination?.({
      from: from <= 1 ? 0 : from - 1,
      to: from === 1 ? itemsPerPage : to,
    })
  }

  useEffect(() => {
    if (patientIdFromSearch) {
      setFromPages(1)
      setToPages(totalItems > itemsPerPage ? itemsPerPage : totalItems)
      if (pagination.active > 1) {
        const newFromPages = fromPages - itemsPerPage
        const newToPages = fromPages - 1
        pagination.previous()
        updatePagination(newFromPages, newToPages)
      }
    }
  }, [patientIdFromSearch])

  const nextPage = () => {
    if (pagination.active < totalPages) {
      const newFromPages = fromPages + itemsPerPage
      const newToPages = Math.min(newFromPages + itemsPerPage - 1, totalItems)
      pagination.next()
      updatePagination(newFromPages, newToPages)
    }
  }

  const previousPage = () => {
    if (pagination.active > 1) {
      const newFromPages = fromPages - itemsPerPage
      const newToPages = fromPages - 1
      pagination.previous()
      updatePagination(newFromPages, newToPages)
    }
  }

  useEffect(() => {
    const newToPages = Math.min(fromPages + itemsPerPage - 1, totalItems)
    setToPages(newToPages)
  }, [fromPages, totalItems, itemsPerPage])

  useEffect(() => {
    if ((firstPage ?? 0) < 1) {
      setFromPages(1)
    }
  }, [firstPage])

  if (!totalItems) return null

  return (
    <div className="flex gap-4 items-center font-semibold">
      <div className="flex gap-2 items-center">
        {/* Mobile Arrows */}
        {ismobile && (
          <div className="flex items-center">
            <IconArrowBackMobile
              onclick={previousPage}
              fill={pagination.active === 1 ? "#DFE2E9" : "#051438"}
            />
          </div>
        )}

        {/* Page Range Display */}
        {isReport ? (
          <>
            <div className="flex items-center text-[16px] text-[#677597]">
              <p>{fromPages}</p>
              <span className="mx-1">-</span>
              <p>{toPages}</p>
            </div>
            <p className="text-[#051438] text-[16px]">of</p>
            <p className="text-[16px] text-[#677597]">{totalItems}</p>
          </>
        ) : (
          <>
            <div
              className={`flex items-center font-medium ${
                ismobile
                  ? "text-[14px] text-[#051438]"
                  : "text-[18px] text-[#58627A] font-semibold"
              }`}
            >
              <span>{fromPages}</span>
              <span className="mx-1">-</span>
              <span>{toPages}</span>
            </div>
            <span
              className={`${
                ismobile
                  ? "text-[14px] text-[#051438]"
                  : "text-[18px] text-[#A6AFC2] font-semibold"
              }`}
            >
              of
            </span>
            <span
              className={`${
                ismobile
                  ? "text-[14px] text-[#051438]"
                  : "text-[18px] text-[#58627A] font-semibold"
              }`}
            >
              {totalItems}
            </span>
          </>
        )}

        {/* Mobile Forward Arrow */}
        {ismobile && (
          <div className="flex items-center">
            <IconArrowNextMobile
              onclick={nextPage}
              fill={pagination.active === totalPages ? "#DFE2E9" : "#051438"}
            />
          </div>
        )}
      </div>

      {/* Desktop Arrows */}
      {!ismobile && (
        <div
          className={`flex gap-3 ${
            patientIdFromSearch && totalItems <= 9 ? "pointer-events-none" : ""
          }`}
        >
          <PaginationArrowIcon
            onClick={previousPage}
            direction="left"
            disabled={pagination.active === 1}
          />
          <PaginationArrowIcon
            onClick={nextPage}
            direction="right"
            disabled={pagination.active === totalPages}
          />
        </div>
      )}
    </div>
  )
}

export default CustomPagination