import React from 'react'
import ArticleCard from '../Cards/ArticleCard'

export default function ArticleContainer() {
    return (
        <div className='w-[70%] md:w-[85%] mx-auto 
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                    gap-6 py-2'>

            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
        </div>
    )
}
