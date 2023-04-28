'use client'

/* eslint-disable @next/next/no-img-element */
import React, { ChangeEvent, useState } from 'react'
import { classNames } from '@/libs/Utils'
import Badge from '../reusable/Badge'
import { UserDataProps } from '@/libs/Types'
import { GenericFilterHook } from '@/libs/hooks'

export interface dataProps {
  title: string
  href: string
}

export interface GenericFilterProps {
  title?: string
  subtitle?: string
  data: UserDataProps[]
  pagination: string[]
  className?: string
}

function GenericFilter({
  title,
  pagination,
  className,
  data,
}: GenericFilterProps) {
  const { filteredList } = GenericFilterHook({ data })
  const [dataList, setDataList] = useState(filteredList)
  const [activeTab, setActiveTab] = useState(pagination[0])

  const handleChange = (value: string) => {
    let char = ''
    const input = dataList.map((item) => {
      const industries = item.industries.filter((industry) => {
        const i = industry.title.toLowerCase().includes(value.toLowerCase())
        char = item.char as string
        return i
      })
      return { char, industries }
    })
    const filterByTitle = input.filter((item) => item.industries.length > 0)
    if (value !== '') {
      setDataList(filterByTitle)
    } else {
      setDataList(filteredList)
    }
  }
  const handleClickBtn = (selected: string) => {
    const first = selected.split('-')[0]
    const last = selected.split('-')[1]

    const firstIndex = filteredList.findIndex(
      (item) => item.char.toLowerCase().toUpperCase() === first,
    )
    const lastIndex = filteredList.findIndex(
      (item) => item.char.toLowerCase().toUpperCase() === last,
    )

    const filteredIndustries = filteredList.slice(firstIndex, lastIndex + 1)
    if (firstIndex == -1 || lastIndex == -1) {
      setDataList(filteredList)
    } else setDataList(filteredIndustries)
    setActiveTab(selected)
  }

  return (
    <div className={className}>
      <div className="">
        <h1 className="text-xl font-light text-blue-400">{title}</h1>
      </div>
      <div className="md:grid md:grid-cols-2 flex flex-col-reverse items-center justify-between w-full">
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-1 w-full">
          {pagination.map((list, index) => {
            return (
              <button
                key={index}
                className={classNames(
                  activeTab === list
                    ? 'bg-darkprimary text-white'
                    : 'bg-darktx text-white',
                  'border py-1.5 rounded-full font-bold myfont sm:text-lg letterspac',
                )}
                onClick={() => handleClickBtn(list)}
              >
                {list}
              </button>
            )
          })}
        </div>
        <div className="mb-2 md:mb-0 flex items-center justify-end w-full">
          <input
            type="search"
            placeholder="Search topics ..."
            className={
              'bg-transparent ml-0 md:ml-2 xl:ml-0 w-full lg:w-full xl:w-auto md:w-auto border-2 rounded-full border-gray-400 outline-none py-[6px] px-5 focus:border-darkprimary'
            }
            onChange={(value: ChangeEvent<HTMLInputElement>) =>
              handleChange(value.target.value)
            }
          />
        </div>
      </div>
      <hr className="border-1 border-gray-300 mt-2" />
      <div>
        {dataList.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-1">
            {dataList.map((item) => {
              return (
                <div key={item.char}>
                  <h1 className="font-bold text-5xl pt-6 myfont text-[#4d6172]">
                    {item.char}
                  </h1>
                  <hr className="border my-4" />
                  <div className="flex items-center flex-wrap gap-1">
                    {item.industries.map((item, index) => (
                      <Badge key={index} title={item.title} link={item.href} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="w-full flex items-center justify-center h-[400px] md:h-[600px]">
            <div className="text-center w-[400px]">
              <img
                src={
                  'https://cdn.iconscout.com/icon/premium/png-128-thumb/internet-error-4060254-3371373.png'
                }
                alt=""
                className="m-auto"
              />
              <h1 className="font-bold text-3xl py-4 mt-2">No results</h1>
              <p className="px-10 text-lg font-[Jost]">
                No results containing all your search terms were found.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GenericFilter
