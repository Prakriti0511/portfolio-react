import react from 'react'
import './Hero.css'
import profile_img from './../../assets/profile_img.jpg'

const Hero = () => {
    return(
        <div className = 'hero-top'>
            <img src = {profile_img} alt = ""/>
            <h1>Hi! <span>I'm Prakriti Sharma</span>, frontend developer based in India.</h1>
            <p>I am a frontend developer and a blockchain enthusiast based in India, currently studying at University School of Automation and Robotics, GGSIPU, India.</p>
            <div className='hero-bottom'>
            <div className = 'hero-connect'>Connect with me</div>
            <div className='hero-resume'>My Resume</div></div>
            
        </div>
        
    )
}

export default Hero 