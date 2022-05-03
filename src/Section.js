function Section (){
  const arr = ['bizzards','calm', 'dusty_road','escape','patday','retreact','seasonal','vespoers'];
  return (
    <section className="wrap">
      {arr.map((data,idx)=>{
        return <article key={idx}>{data}</article>
      })}
    </section>
  )
}
export default Section;