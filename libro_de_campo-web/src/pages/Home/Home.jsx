import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Home.css'

import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header'

const Home = () => {

  const [articles, setArticles] = useState([])
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    const getArticles = async (req, res, next) => {
      const url = 'http://localhost:4000/api/v1/articles'
      const result = await axios.get(url)
      setArticles(result.data)
    }
    getArticles()
  }, [])

  return (
    <>
      <Header />
      <div className='home-container'>
        <div className='articles-container'>
          {articles.length === 0 && <p>Loading...</p>}
          {articles.map((article, i) => {
            return(
              <div className='article-container' key={i}>
                <h4 className='title'>{article.title}</h4>
                <p className='body'>{article.body}</p>
                <p className='date'>{article.date}</p>
                <div className='buttons'>
                  <button className='button button-edit' onClick={() => setUpdate(true)}>Editar</button>
                  <button className='button button-delete'>Eliminar</button>
                </div>
              </div>
            )
          })}
        </div>
        {update && 
          <Form update={update} />
        }
      </div>
    </>
  )
}

export default Home