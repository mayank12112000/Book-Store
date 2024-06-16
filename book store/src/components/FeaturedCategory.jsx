import React from 'react'
import "./featuredCategory.css"

export default function FeaturedCategory({category}) {
  console.log(category)
  return (
    <div className='featured-category'>
        <main className='text'>
            <b>{category.name}</b>
            <p>{category.description}</p>
        </main>
    </div>
  )
}
