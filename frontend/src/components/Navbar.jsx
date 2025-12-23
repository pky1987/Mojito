import React from 'react'
import { navLinks } from '../../constants/index'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

function Navbar() {
  useGSAP(()=>{
    const navTime=gsap.timeline({
      scrollTrigger:{
        trigger:"nav",
        start:"bottom top",
      }
    });
    navTime.fromTo("nav",{backgroundColor:"transparent"},{backgroundColor:"#00000050",backgroundFilter:"blur(10px)",
      duration:1,ease:"power1.inOut"
    })
  })
  return (
    <nav>
      <a href="#home" className="flex items-center gap-2"><img src="/images/logo.png" alt="logo"/>
      <p>Prakash Pour</p></a>
      <ul>
        {navLinks.map((link)=>(
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
