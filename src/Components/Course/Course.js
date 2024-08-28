import React from 'react';
import { Link } from 'react-router-dom';

const Course = (props) => {
  const {title,img,tags,id}=props.course;
  const badge=tags.find(c=>c==='hot'||c==='new')
  const tag=tags.filter(t=>t!=='hot' && t!=='new')
  return (
    <Link to={`/course/${id}`}>
      <div className='card bg-base-200 shadow-xl hover:scale-105 duration-300'>
        <figure><img src={img} alt="Shoes" /> </figure>
        <div className="card-body">
          <h2 className="card-title">
           {title}
           {badge? <div className="badge badge-secondary">{badge}</div>:<p></p>}
          </h2>
          <div className="card-actions justify-end">
           { tag.map(t=>
           <div key={Math.random()}>
              <div className="badge badge-outline">#{t}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      </Link>
  );
};

export default Course;