function Card(props){
  console.log(props)
  const style = {transform:`rotate(${360/props.num * props.index}deg) translateY(-150%)`}
  console.log(style)
  return (
    <article style={style}>
      <div className='inner'>
        <div className='pic'>
          <img src={`${props.path}/img/${props.data}.jpg`} />  
        </div>
        <h2>{props.data}</h2>               
      </div>    
    </article>
  )
}

export default Card;