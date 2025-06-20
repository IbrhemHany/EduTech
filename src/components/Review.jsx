import { FaStar } from "react-icons/fa";

function Review({stars,img,description,name,job}) {
 
  const starCount = Number(stars);

  return (
    <div className='rating'>
      <span className='stars'> 
          {Array(starCount).fill(0).map((_, index) => {
        return (
             <FaStar key={index}  /> 
         ) })}
         </span>

      <p className="description">{description}</p>
      <div className="person">
         <img src={img} alt={name}/>
         <div>
          <h3 className="text-primary">{name}</h3>
         <p>{job}</p>
         </div>
      </div>
    </div>
  )
}

export default Review