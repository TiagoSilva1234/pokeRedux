import React from "react";
import './index.scss'


const Pagination = ({postsPerPage, totalPosts,paginate})=>{
    const pageNumbers = [];
    for(let i = 1 ; i<= Math.ceil(totalPosts/postsPerPage); i++ ){
        pageNumbers.push(i)
    }

    return <div className="pagination">
        <nav>
        <ul className="pagination">
{pageNumbers.map(number=>{
    return <li key={number} className="page-item">
        <a onClick={()=>paginate(number)}style={{color:"white"}} className="page-link">{number} </a>
    </li>
})}


        </ul>
        </nav>
    </div>;
}
export default Pagination;