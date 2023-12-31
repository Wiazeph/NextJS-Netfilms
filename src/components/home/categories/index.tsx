import React from 'react'
import Link from 'next/link'

type Props = {
  categories: {
    id: any
    name: string
  }[]
}

const Categories = (props: Props) => {
  return (
    <section className="Categories -mt-6 sm:-mt-7 md:-mt-8">
      <div className="flex gap-2 sm:gap-4 md:gap-6 overflow-x-auto scroll-bar">
        {props.categories.map((category) => (
          <Link
            key={category.id}
            href={`/${category.id}`}
            className="Category px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-14 flex items-center justify-center bg-black/70 font-bold border border-[#333] rounded-md shadow-xl hover:bg-black hover:scale-105 transition-all"
          >
            <div className={`${category.name} w-max`}>{category.name}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories
