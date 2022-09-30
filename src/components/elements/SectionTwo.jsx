import React from 'react'
import './sectionTwo.css'

const SectionTwo = () => {
  return (
    <>
    <div className="container col-9">

    <div className="SectionTwo-firstSection">
        <div className="row">
          <div className="col-6 left-section">
             <h1 className='heading-one font-weight-bold'>Build on <br /> Gnosis</h1>
          </div>

          <div className="col-6 right-section">
             <p className='para-one'>The Gnosis Developer Portal provides introductions, technical
               documentation, and tutorials, and the <span>Gnosis Ecosystem Fund (GECO)</span> provides teams
               with mentoring, marketing, and funding up to $100,000 to build on Gnosis.</p>
               <button className='Button-one'>Get Started</button>
          </div>
        </div>
      </div> 
      <div className="SectionTwo-secondSection">
        <div className="row">
            <div className="col-6 left-sec" >
                <img className='image img-fluid rounded-circle ' src='assets/Gnosis.png'/>
                <button className='Button-two' >Visit Forum</button>
            </div>
            <div className="col-6 right-sec">
                <h1 className='heading-two'>Participate in GnosisDAO</h1>
                <p className='para-two'>GnosisDAO is the prediction market-driven collective, stewarding the Gnosis 
                    ecosystem through futarchy: governance by prediction markets.</p>
            </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default SectionTwo