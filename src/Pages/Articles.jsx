import React, { useEffect, useState } from "react";
import ArticleCard from "../Components/Cards/ArticleCard";
import SectionHeader from "../Components/SectionHeader";
import { FaBookOpen } from "react-icons/fa";
import axios from "axios";
import PaginationBox from '../Components/PaginationBox'


export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [currentDatas, setCurrentDatas] = useState([])



    async function gettingDatas() {
        const { data } = await axios.get(`http://localhost:8000/api/articles`)
        setArticles(data)
    }
    useEffect(() => {
        gettingDatas()
    }, [])

    return (
        <div className="mt-30">
            <SectionHeader title={'همه ی مقالات'} description={'تمامی مقاله های هلرن'} icon={<FaBookOpen />} />
            <div className="w-[70%] md:w-[85%] mx-auto 
                                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                                gap-6 py-2">

                {
                    currentDatas.length && currentDatas.map(article => {
                        return <ArticleCard key={article.id} {...article} />
                    })
                }
            </div>
            <PaginationBox items={articles} itemsPerPage={4} setCurrentDatas={setCurrentDatas} />

        </div>
    );
}
