import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../component/PreviewCompatibleImage'



const FeatureGrid = ( gridItems ) => (
  <div>
  <div className='row'>
    <div className='col s2' style={{ height:'100vh',overflow:'auto'}}>
    {gridItems.gridItems.map(item=>{
    let img=item.image.childImageSharp.fluid.src
   console.log(img)
   return(
     <div style={{ height:'10vh',margin:'0px'}}>
       <img src={img} style={{ width:'10vw',height:'10vh',margin:'0px', border: 'solid 1px #fff'}}></img>
     </div>
   )
  })}
    </div>
    <div className='col s8 offset-s1' >
        <img src='/static/252130ffc7bfdd0064db7353008a53ed/affd1/img_7649.jpg'style={{width: '80vw', height:'60vh', marginTop:'20vh'}}></img>
    </div>
  
  </div>
  <div className="row">
   
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
  </div>
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
