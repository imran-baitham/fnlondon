import { NavItem } from '@/libs/Types'
import React from 'react'
import Badge from './Badge'
import Link from 'next/link'

const categories: NavItem[] = [
  { title: 'Accountancy', href: '/' },
  { title: 'An Audience With', href: '/' },
  { title: 'Brexit', href: '/' },
  { title: 'Fintech', href: '/' },
  { title: 'Asset Management', href: '/' },
  { title: 'Investment Banking', href: '/' },
  { title: 'Legal Services', href: '/' },
  { title: 'ESG', href: '/' },
  { title: 'Politics', href: '/' },
  { title: 'SPACs', href: '/' },
  { title: 'Crypto', href: '/' },
  { title: 'Trading', href: '/' },
  { title: 'Regulation', href: '/' },
  { title: 'Private Equity', href: '/' },
  { title: 'Webcasts', href: '/' },
  { title: 'Commentary', href: '/' },
  { title: 'Newspaper', href: '/' },
  { title: 'Lists', href: '/' },
]

interface FilterTopicProps {
  className?: string
}

function FilterTopic({ className }: FilterTopicProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between">
        <h1 className="text-sm font-thin text-[#4d6172]">FILTER BY TOPIC</h1>
        <Link href={'/topics'}>
          <span className="text-darktx text-sm font-medium">See All</span>
        </Link>
      </div>

      <div className="py-3 items-center flex flex-wrap gap-1">
        {categories.map((item, index) => (
          <Badge key={index} title={item.title} link={item.href} />
        ))}
      </div>
    </div>
  )
}

export default FilterTopic
