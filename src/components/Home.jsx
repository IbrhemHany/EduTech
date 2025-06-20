import {datacard} from "../data"
import Card from "./Card"
function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="home-header">
            <span>Join Us</span>
            <h1>Best Learning Opportunities</h1>
            <p>The best portal to teach programming the right way from practical experience for more than 50 years.</p>
            <a href="#" className="btn btn-red">let's Start Now</a>
            <a href="#" className="btn btn-transparent">Learn More</a>
        </div>
        <div className="card-container">
          {datacard.map((card,index)=>{
            const {title,img,bgcolor,color,description} = card ;
           return <Card key={index} title={title} img={img} bgcolor={bgcolor} color={color} description={description} />
         })}
        </div>
      </div>
    </section>
  )
}

export default Home
