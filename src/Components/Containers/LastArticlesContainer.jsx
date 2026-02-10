import React, { useEffect, useState } from 'react'
import ArticleCard from '../Cards/ArticleCard'
import axios from 'axios'
import api from "../../../api.js";

export default function LastArticlesContainer() {

    const [articles, setArticles] = useState([])


    async function gettingDatas() {
        const { data } = await api.get(`articles`)
        setArticles(data)
    }
    useEffect(() => {
        gettingDatas()
    }, [])


    return (
        <div className='w-[70%] md:w-[85%] mx-auto 
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                    gap-6 py-2'>

            {
                articles.length && articles.slice(0, 3).map(article => {
                    return <ArticleCard {...article} />
                })
            }

        </div>
    )
}
