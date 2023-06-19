import Header from '@/(components)/layouts/Header'
import Product from '@/(components)/product/Product'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()
  return (
    <div className="h-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Products Page</h1>
        </div>
      </header>
      <main className='h-full bg-white'>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* <!-- Your content --> */}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((item, i) => <Product item={item} key={item.id} />)}
          </div>
        </div>
      </main>
    </div>

  )
}
