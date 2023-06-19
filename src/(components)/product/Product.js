"use client"
import Link from 'next/link'
import React from 'react'

export default function Product({ item }) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
      </div>
      <div className="mt-4 ">
        <h3 className="text-sm text-gray-700 m-4">
          {item.title}
        </h3>

        <p className="text-sm font-medium text-gray-900">$35</p>
        <Link href={`/product/${item.id}`} className='text-lg font-bold mt-4 inline-block capitalize hover:text-red-500 '>view</Link>
      </div>
    </div>
  )
}
