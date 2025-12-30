import React from 'react'

const NewsItem = (props) => {
  return (
    <div onClick={() => window.open(props.url, '_blank')} 
    style={{
        border:'1px solid gray',
        padding: '10px',
        cursor: 'pointer',
        background: "linear-gradient(#ece9e6, #9f85f6ff)"
    }}>
        <img src={props.image || 'https://dummyimage.com/300x180/000/fff&text=News'} 
        alt='News Image'
        style={{width: "100%", height: "180px", objectFit: "cover"}}/>
        <h4>{props.title}</h4>
        <p>{props.description || 'No description available'}</p>
    </div>
  )
}

export default NewsItem