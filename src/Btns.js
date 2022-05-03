import {useState, useEffect} from 'react';

function Btns(props){
  // console.log('btns컴포넌트 호출');
  let [index, setIndex] = useState(0);
  let wrap = document.querySelector('.wrap');
  // console.log(props.wrap.current)
  const rotate = () =>{
    props.wrap.current.style.transform = `rotate(${45*index}deg)`;
  }
  useEffect(()=>{
    // 배열이 빈값이면 해당 컴포넌트 생성시 한번만 호출, 배열에 index를 넣으면 누를떄마다 호출
    rotate();
    // console.log('생성');
  },[index]);
  
  return(
    <>
      <a href="#" className="prev" onClick={()=>{setIndex(++index)}}></a>
      <a href="#" className="next" onClick={()=>{setIndex(--index)}}></a>
    </>
  )
}

export default Btns;