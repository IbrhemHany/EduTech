
function Card({title,img,bgcolor,color,description}) {
  return (
    <div className="card">
      <span className="icon" style={{background : bgcolor , color : color }}>{img}</span>
      <h1>{title}</h1>
      <span className="line"></span>
      <p>{description}</p>
      
    </div>
  )
}

export default Card
