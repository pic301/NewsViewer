import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import NewsItem from './NewsItem'
import axios from 'axios'

const NewsListBlock = styled.div`
    box-sizing:border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width:768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;


const NewsList = () => {
    const [articles,setArticles] = useState('')
    const [loading,setLoading] = useState('')

    useEffect(() =>{
        const fetchData = async() => {
            setLoading(true);
            try {
        const response= await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=1dcc26f473c446e491f763a15e2e9db3'
            )
            setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    },[]) 
    if(loading){
        return <NewsListBlock> 로딩중...</NewsListBlock>
    }
    if(!articles){
        return null;
    }
   
    return (
       <NewsListBlock>
           {articles.map(article => (
               <NewsItem key={article.id} article={article}/>
           
           ))}
       </NewsListBlock>

    );
};

export default NewsList;