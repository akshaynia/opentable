import React from "react";
import './table.css'

const PageList = (props) => {
  const { count }= props;

  const pageNumber = [];
  for(var i=1;i<((count/10)+1);i++){
    pageNumber.push(i);
  }

  return(
    <ul>
      {pageNumber.map(item=>{
        return(<li onClick={(e)=>props.onPageClick(e, item)}>{item}</li>)
      })}
    </ul>
  )
   
}

export default PageList;