import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Filter from './components/Filter'
import { useEffect } from 'react'
import { apiUrl,filterData } from './data'
import Spinner from './components/Spinner'
import { toast } from 'react-toastify'
function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();

      // Save data
      setCourses(output.data);
      // setCourses(output);
    } catch (err) {
      toast.error("Something Went Wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='min-h-screen bg-bgDark2 flex flex-col'>
     <div>
     <Navbar/>
     </div>
      
      <div>
      <div>
        <Filter
        filterData={filterData} category={category} setCategory={setCategory}
        />
      </div>
      <div className='w-11/12 flex-wrap max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]'>
          { loading ? (<Spinner/>):(<Cards courses={courses} category={category}c/>)}
      </div>
      </div>
      
    </div>
  )
}

export default App