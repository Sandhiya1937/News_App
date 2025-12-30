// import React, { useEffect, useState } from 'react';

// function News({ category }) {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     fetch(
//       `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b186d4d004074b019e277437523370b9`
//     )
//       .then(res => res.json())
//       .then(data => {
//         setArticles(data.articles || []);
//       });
//   }, [category]);

//  return (
//   <div>
//     <h2>News</h2>

//     <div 
//      style={{
//       display: "flex",
//       flexWrap: "wrap",
//       gap: "20px",
//       justifyContent: "center",
//       cursor: "pointer"
    
//     }}>
//       {articles.map((article, index) => (
//         <div onClick={()=>window.open(article.url, '_blank')}
//           key={index}
//           style={{
//             width: "260px",
//             padding: "16px",
//             backgroundColor: "#d1e2ecff",
//             fontSize: "15px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "10px",
            
//           }}
//         >
//           <p><strong>{article.title}</strong></p>

//           {awhrticle.urlToImage && (
//             <img
//               src={article.urlToImage}
//               alt="news"
//               style={{ width: "100%", borderRadius: "8px" }}
//             />
//           )}

//           <p>{article.description}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// }

// export default News;


//Another way to write the News component by creating a separate NewsItem component props

import React, { useEffect, useState } from 'react'
import NewsItem from './newsItem';

const News = ({category}) => {
    const [articles, setArticles] = useState([]);

    //useEffect runs when the category changes, dependency=> category
    useEffect(
        () => {
            //Fetch API url, Fetch is a predeifined request function
            fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5a91732e34c249d5a1071df7cdf9fe66
`)
            .then(res=>res.json())
            .then(data => setArticles(data.articles || {}));
            }, [category]);  //array of dependencies in output when only category changes useeffect runs else it will not run
  return (
    <div>
        <h4>{category} News</h4> 
        <div style={{display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px"
        }}>
            {/* Looping through articles */}
            {
                articles.map((news, index) => (
                    <NewsItem 
                        key={index} 
                        title={news.title}
                        description={news.description}
                        image={news.urlToImage} 
                        url={news.url}  
                    />
                ))
            }
        </div>
        <NewsItem />
    </div>
  )
}

export default News