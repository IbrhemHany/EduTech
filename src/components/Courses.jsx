import Section_Header from "./Section_Header"
import Course from "./Course"
import {coursesdata} from "../data"

function Courses() {
  return (
    <section id="courses">
      <div className="container">
        <Section_Header title="Make Online Eduction Acessible" description="At home or on the go, you’ll gain the essential technical expertise to thrive in a wide range of computing and technology-driven industries. Build practical, in-demand skills through real-world learning, setting yourself up for future success."/>
      <div className="course-container">
      {coursesdata.map(course=>{
       const {id,img,department,title,rating,description,sales,price,discount,duration,lessons}=course
        return <Course key={id} img={img} department={department} title={title}  rating={rating} description={description} sales={sales} price={price} discount={discount} duration={duration} lessons={lessons} />

        })}
      </div>
       
         
      </div>
      
    </section>
  )
}

export default Courses
