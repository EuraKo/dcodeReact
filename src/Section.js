
import Card from './Card';
import {useState} from 'react';

const path = process.env.PUBLIC_URL;

function Section (){
  console.log('section 함수 재호출');
  const arr = ['Blizzards','Calm', 'Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];
  const num = arr.length;
  let [index, setIndex] = useState(0);
  console.log(index)

  return (
    <>
      <section className="wrap" style={{transform:`rotate(${45*index}deg)`}}>
        {arr.map((data,idx)=>{
          return <Card key={idx} data={data} path={path} num={num} index={idx} />
        })}
      </section>
      <a href="#" className="prev" onClick={()=>{setIndex(++index)}}></a>
      <a href="#" className="next" onClick={()=>{setIndex(--index)}}></a>
    </>
  )
}
export default Section;
