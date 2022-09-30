import React from 'react'
import './footer.css'
import { AiFillTwitterCircle,AiFillMediumCircle ,AiFillGithub} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='container  footer-section col-9'>
      <hr/>
           <div className='row row-section'>
              <div className='col-3'>
                <ul className='list-unstyled'>
                  <li>Imprint</li>
                  <li>Cookie Policy</li>
                  <li>Privacy Policy</li>
                  <li>Gnosis Token Sale TOS</li>
                </ul>
              </div>
              <div className='col-3'>
              <ul className='list-unstyled'>
                  <li>Conditional Tokens</li>
                  <li>Protocol</li>
                  <li>Safe</li>
                  <li>GnosisDAO</li>
                </ul>
              </div>
              <div className='col-3'>
              <ul className='list-unstyled'>
                  <li>Developers</li>
                  <li>OpenEthereum</li>
                  <li>Careers</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div className='col-3'>
              <ul className='list-unstyled '>
                  <li> <AiFillMediumCircle size="2em" /> </li>
                  <li> <AiFillTwitterCircle size="2em" /> </li>
                  <li><FaDiscord size="2em"/> </li>
                  <li><AiFillGithub size="2em" /> </li>
                </ul>
              </div>
           </div>
      </div>
    </>
  )
}

export default Footer