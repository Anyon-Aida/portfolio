import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service'>
            <div className='service_head'>
              <h3>UI/UX Desing</h3>
            </div>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Design references, Analysis</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Graphic interface, Interface architecture</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Animation prototype, Sketching & Wireframes</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>UI guidelines and kit, Dynamic prototype</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Design review, Editing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className='service'>
            <div className='service_head'>
              <h3>Web Development</h3>
            </div>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Analytics Interpretation and Reporting</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Competition Monitoring</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>HTML E-mail Template Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Blog Customization/Management</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Pay-Per-Click Campaign Management</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Sales Presentation Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Usability Testing</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service'>
            <div className='service_head'>
              <h3>Content Creation</h3>
            </div>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Blog Posts</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Long-form content</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Online guides</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Infographics</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Graphics</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Videos</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services