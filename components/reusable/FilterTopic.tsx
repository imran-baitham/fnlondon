import { NavItem } from '@/libs/Types'
import React from 'react'
import Badge from './Badge'

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
        <h1 className="font-medium">FILTER BY TOPIC</h1>
        <span className="text-darktx text-sm font-medium">See All</span>
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
