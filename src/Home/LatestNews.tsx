import React from 'react'

interface ArticleProps {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
}

function LatestNews({ image, title, slug, shortdescription }: ArticleProps) {
  return (
    <div className='row p-3 '>
        <div className="col-lg-8"> 
            <div className="div fw-bold"> <p> {title}</p>
            <p className='text-muted'> 30 mint ago</p></div>
            
        </div>
        <div className="col-lg-4"> <img
              src={image}
              alt={title}
              className="img-fluid w-100 rounded"
              style={{ height: "80px", objectFit: "cover" }}
            /></div>
            <div className="divider"></div>
        
    </div>
  )
}

export default LatestNews