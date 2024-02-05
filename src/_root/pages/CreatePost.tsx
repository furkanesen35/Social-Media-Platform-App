import React from 'react'

const CreatePost = () => {
 return (
  <div className='flex flex-1'>
   <div className='common-container'>
    <img 
      src="/assets/icons/add-post.svg"
      width={36}
      height={36}
      alt="add-post"
    />
    <h2 className='h-3-bold md:h2-bold text-left w-full'>Create Post</h2> 
   </div>
  </div>
 )
}

export default CreatePost