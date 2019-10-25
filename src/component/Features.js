import React from 'react'
import PropTypes from 'prop-types'
// import PreviewCompatibleImage from '../component/PreviewCompatibleImage'
import Photos from './Photos'


// const [feature, setFeature] = useState({
//   src:'',
//   text:''
// });
// const [pics, setPics] = useState('')
// const handleClick =(e)=>{
//   console.log(e.target.name)
//   let list=pics
//   list.map(data=>{
//   if(e.target.name===data.image.childImageSharp.fluid.src){
//     let src =e.target.name
//     let text = data.text
//     setFeature({src:src, text:text})
//   }
//   })
//   // if(e.src=== )
// }
const FeatureGrid = ( gridItems) => (

 
  <div className='card' style={{backgroundColor:'#474e5c',height:'100vh'}}>
    <Photos {...gridItems}/>
    {/* {console.log(heading)} */}
  {/* <div className='row'>
    <div className='col s2' style={{ height:'80vh',overflow:'auto', marginTop:'10vh'}}>
    {setPics(gridItems.gridItems)}
      
      {gridItems.gridItems.map(item=>{
    let img=item.image.childImageSharp.fluid.src
   console.log(img)
   return(
     <button onClick={handleClick()}name={img} style={{ height:'10vh',margin:'0px'}}>
       <img src={img} style={{ width:'10vw',height:'10vh',margin:'0px', border: 'solid 1px #fff'}}></img>
     </button>
   )
  })}
    </div>
    {feature?
    <div className='col s8 offset-s1'>
        <img src={feature.src} style={{width: '80vw', height:'60vh', marginTop:'20vh'}}></img>
        <p>{feature.text}</p>
    </div>:
    <div className='col s8 offset-s1'>
    <img src={gridItems.gridItems[0].image.childImageSharp.fluid.src} style={{width: '80vw', height:'60vh', marginTop:'20vh'}}></img>
    <p>{gridItems[0].text}</p>
  </div>
  }
  </div> */}
  {/* <div className="row">
   
  {console.log(gridItems.gridItems)}
      {gridItems.gridItems.map(item => ( 
      
      
      <div key={item.text} className="col s6 offset-s3">
        <section className="section">
        {console.log(item)} 
          <div className="has-text-centered">
            <div
              style={{
                width: '100%',
                // display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div> */}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}
 
export default FeatureGrid
