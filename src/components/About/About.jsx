import React from 'react'
import './About.css'
import pattern_img from './../../assets/theme_pattern.svg'
import profile_img from './../../assets/about_profile.jpg'

const About = () => {
  return (
    <div className = 'about'>
      <div className = 'about-title'>
        <h1>About Me</h1>
        <img src = {pattern_img} alt =""/></div>
        <div className = 'about-sections'>
        <div className = 'about-left'>
          <img src = {profile_img} alt = ""/>
        </div>
        <div className = "about-right">
          <div className = "about-para">
            <p> I am a frontend devel Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nisi delectus saepe distinctio, esse aperiam architecto labore inventore omnis numquam possimus. Minus, maxime adipisci? Repellat accusamus fugit expedita minima necessitatibus?</p>
          </div>
          <div className = "about-skills">
            <div className = "about-skill"><p>HTML & CSS</p><hr style ={{width:"50%"}}/></div>
            <div className = "about-skill"><p>React JS</p><hr style ={{width:"70%"}}/></div>
            <div className = "about-skill"><p>JavaScript</p><hr style ={{width:"60%"}}/></div>
            <div className = "about-skill"><p>Next JS</p><hr style ={{width:"50%"}}/></div>
          </div>
        </div>
    </div>
    <div className = 'about-achievements'>
      <div className = "about-achievement">
        <h1>10+</h1>
        <p>Years of Experience</p>
      </div>
      <hr />
      <div className = "about-achievement">
        <h1> 90+</h1>
        <p>Projects Completed</p>
      </div>
      <hr />
      <div className = "about-achievement">
        <h1> 15+</h1>
        <p>Happy Clients</p>
      </div>

    </div>
    </div>
   
  )
}

export default About