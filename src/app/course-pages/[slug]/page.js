"use client";


import { useRouter,useParams } from "next/navigation"; 
import { useState,useEffect } from "react";


const CoursePage = () => {
  const {slug} = useParams();



  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (!slug) return; 
    const fetchCourseData = async () => {
      try {
        const response = await fetch(
          `http://localhost:1337/api/course-pages/${slug}?populate=*`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setCourse(data.data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;



  const data = [
    {
      id: "1",
      image: "/images/perCoursePage/icon1.jpg",
      title: "duration",
      info:course.duration
    },
    {
      id: "2",
      image: "/images/perCoursePage/icon2.png",
      title: "course_level",
      info:course.level
    },
    {
      id: "3",
      image: "/images/perCoursePage/icon3.png",
      title: "students_enrolled",
      info:course.students_enrolled
    },
    {
      id: "4",
      image: "/images/perCoursePage/icon4.png",
      title: "language",
      info:course.language
    },
    {
      id: "5",
      image: "/images/perCoursePage/icon5.png",
      title: "subtitle_language",
      info:course.subtitle_language
    }
  ];

  return (
    <section>
  
      {course ? (
        <div className="lg:flex">
           <div className="w-1/2">
                   <div className="max-w-4xl mx-auto px-4 mt-24">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <div className="mb-4">
            <strong>Rating:</strong> {course.rating}
          </div>
        
          <p className="mb-2">{course.description}</p>
          
          <div className="mb-11">
         
            <h1>{course.category}</h1>
           
          </div>
       
          {/* <div className="mb-4">
          
            <img
              src={course.image.url}
              alt={course.title}
            />
          </div> */}
                  </div>
          </div>
        
         <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg shadow-md border border-gray-200 mt-28">
              {/* Course Details */}
   
              <div className=" flex  justify-center border border-gray-200 p-4">
                    <p className="text-2xl">
                     <strong>{course.price.currency}{course.price.current}</strong> 
                     </p>
                     <p className="ml-7"> {course.price.currency}{course.price.original} 
                     </p>
              </div>

               {data.map((item)=>( <div key={item.id} className="flex p-2 space-x-3">
                 <div>
                    <img src={item.image}></img>
                  </div> 
                   <div>{item.title}</div>
                     <div>{item.info}</div>
                </div>))}
     
   

    {/* Buttons */}
                   <div className="mt-6 flex flex-col gap-4">
                       <button className="w-full bg-[#EFFFE8] text-white py-2 px-4 rounded-md hover:bg-[#EFFFE8] transition duration-300">
                         Add to Cart
                       </button>
                         <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
                           Buy Now
                      </button>
                     </div>

        <div className="p-2 border border-gray-200 mt-4">
        <h2 className="text-xl mb-4">This Course Includes</h2>
        <ol className="list-disc list-inside">
        {course.features.map((feature, index) => (
          <li key={index} className="p-3 text-sm font-semibold">
            {feature.name}
          </li>
        ))}
        </ol>
      </div>
    


  </div>    
          </div>
          
       

        
      ): (
        <p>Course not found.</p>
      )}
    </section>
  );
};

export default CoursePage;