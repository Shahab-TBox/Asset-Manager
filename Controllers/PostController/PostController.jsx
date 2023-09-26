import React from 'react'
import { useSelector } from 'react-redux';
const PostController = () => {

  const currentPageData = useSelector(state => {
    return state.pagination.data.slice(0, 9);
  });
  return (
    
  )
}
export function handlePageChange(page){
    const startingIndex = ( page - 1) * 10 + 1;
    
}

export default PostController
