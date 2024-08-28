import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ courses }) => {
  return (
    <div>
      <ul className="menu bg-base-200 w-56 p-4 rounded-box">
        {courses.map(c=>
        <li key={c.id}><Link  to={`/course/${c.id}`}>{c.title}</Link></li>
        )}
      </ul>

    </div>
  );
};

export default Sidebar;