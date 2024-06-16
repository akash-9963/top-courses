import React from 'react'
import { FcLike } from 'react-icons/fc'
import { FcLikePlaceholder } from "react-icons/fc";;
import { toast } from 'react-toastify';
function Card(props) {
  const course=props.course; 
  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;
  function clickHandler(){
      //logic
      if(likedCourses.includes(course.id)){
        //it is already liked
        //changing it to unliked
        setLikedCourses((prev)=>prev.filter((cid)=>cid!==course.id))
        toast.warning(`${course.title} removed from liked items`);
      }
      else{
        //if already not liked
        //add it to liked courses
        if(likedCourses.length===0){
            setLikedCourses([course.id])
        }
        else{
            setLikedCourses((prev)=>[...prev,course.id]);
        }
        toast.success(`${course.title} added to liked items`)
      }
  }  
  return (
    <div className='bg-bgDark w-[300px] rounded-md overflow-hidden '>
      <div className='relative'>
        <img src={course.image.url}/>
        <div className='bg-white absolute w-[30px] h-[30px] rounded-full right-1 bottom-[-12px] gird place-items-center'> 
        <button onClick={clickHandler} className='p-[0.29rem]'>
            {
              !likedCourses.includes(course.id)?(<FcLikePlaceholder fontSize="1.3rem"/>):(<FcLike fontSize="1.3rem"/>)
            }
        </button>
      </div>
      </div>
      
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='text-white mt-2'>{course.description>100?(course.description.substr(0,100))+"....":(course.description)}</p>
      </div>
    </div>
  )
}

export default Card