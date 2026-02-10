import React from 'react';
import ArticleBanner from '../Components/ArticleBanner';
import AddComment from '../Components/AddComment'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../../api';

const ArticleInfo = () => {

  const [articleDetails, setArticleDetails] = useState([])

  const { articleName } = useParams()

  async function gettingData() {
    const { data } = await api.get(`articles/${articleName}`)
    setArticleDetails(data)
    console.log(data);
  }

  useEffect(() => {
    gettingData()
  }, [])

  const { title, body, cover } = articleDetails

  return (
    <>
      <div className="min-h-screen ">
        <ArticleBanner title={title} body={body} cover={cover} />

        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12">
          <div className="md:w-3/4 max-w-none text-gray-800">
            <h1 className='text-5xl text-green-700 font-bold mb-12 '>{title}</h1>
            <div className="text-xl leading-12 w-220">
              {body}
            </div>
          </div>

        </div>
      </div>
      <div className='max-w-7xl mx-auto  px-3'>
      </div>
    </>
  );
};

export default ArticleInfo;