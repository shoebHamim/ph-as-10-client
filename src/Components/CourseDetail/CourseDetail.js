import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
const CourseDetail = () => {
  const ref = React.createRef();
  const course=useLoaderData()
  const {title,img,tags,description,id}=course;
  const badge=tags.find(c=>c==='hot'||c==='new')
  const tag=tags.filter(t=>t!=='hot' && t!=='new')
  return (
    <div className='sm:w-2/5 w-4/5 mx-auto mt-8' ref={ref}>
      <div className={`card bg-base-200 shadow-xl `}>
        <figure><img src={img} alt="Shoes" /> </figure>
        <div className="card-body">
          <h2 className="card-title">
           {title}
           <Pdf targetRef={ref} filename={`${title}.pdf`}>
        {({ toPdf }) => <button onClick={toPdf}><FaDownload></FaDownload> </button>}
      </Pdf>
           {badge? <div className="badge badge-secondary">{badge}</div>:<p></p>}
          
          </h2>
         <ul>
          {description.map(d=>
            <li key={Math.random()}>✔️ {d}</li>
        )}
         </ul>
          <div className="card-actions justify-end">
           { tag.map(t=>
           <div key={Math.random()}>
              <div className="badge badge-outline">#{t}</div>
              </div>
            )}
          </div>
          
          <Link to={`/checkout/${id}`} className='w-full'>
          <button  type="button" className="mt-4 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Get Premium Access!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;