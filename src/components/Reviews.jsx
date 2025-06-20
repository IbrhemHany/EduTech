import Review from "./Review"
import Section_Header from "./Section_Header"
import {ratindata} from "../data"
function Reviews() {
  return (
    <section id="reviews">
     <div className="container">
        <Section_Header title="Each and every clinent is important " description="Discover what our student saying in the Reviews section!Feedback from learners who have experienced and benefited from our courses."/>    
        <div className="ratings">
          {ratindata.map(review=>{
          const{id,stars,img,description,name,job}=review
          return<Review key={id} stars={stars} img={img} description={description}  name={name} job={job}/>
        })}
        </div>
     </div>
      
    </section>
  )
}

export default Reviews
