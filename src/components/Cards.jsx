import React, { useState } from 'react'
import Card from './Card'
function Cards(props) {
  const [likedCourses,setLikedCourses]=useState([]);
  let courses=props.courses;
  let category=props.category;
  function getCourses(){
        if(category==='All'){
          let allCourses=[];
          Object.values(courses).forEach(array=>{
            array.forEach(courseData=>{
              allCourses.push(courseData);
            })
          })
          return allCourses;
       }
       else{
        //send only specific category data
        return courses[category];
       }
  }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
       {
          getCourses().map((course) => {
              return <Card course={course} key={course.id}
                        likedCourses={likedCourses} setLikedCourses={setLikedCourses}
                        />;
          })
      }
    </div>
  )
}

export default Cards