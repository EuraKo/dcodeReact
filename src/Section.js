import pic1 from './img/Blizzards.jpg';
import pic2 from './img/Calm.jpg';
import pic3 from './img/Dusty_Road.jpg';
import pic4 from './img/Escape.jpg';
import pic5 from './img/Payday.jpg';
import pic6 from './img/Retreat.jpg';
import pic7 from './img/Seasonal.jpg';
import pic8 from './img/Vespers.jpg';


function Section (){
  const imgs = [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8];
  const arr = ['Bizzards','Calm', 'Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];
  return (
    <section className="wrap">
      {arr.map((data,idx)=>{
        return (
        <article key={idx}>
          <p>{data}</p>
          <img src={imgs[idx]} alt="" />
        </article>
        )
      })}
    </section>
  )
}
export default Section;