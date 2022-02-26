import React from 'react'
import instagramLogo from "../assets/owner/instagram.png"
import twitterLogo from "../assets/owner/twitter.png"
import moreIcon from "../assets/owner/more.png"
import './Main.css'
const Main = () => {
  return (
    <div className='main'>
      <div className='mainContent'>
        <div className='punkHighlight'>
            <div className='punkContainer'>
                <img 
                className='selectedPunk' 
                src="https://nftprojectlist.com/wp-content/uploads/2021/08/64NRxdVj_400x400.jpg" 
                alt=""/>
            </div>
        </div>
        <div className='punkDetails' style={{color:'#fff'}}>
            <div className='title'>
                Rohit Surya
            </div>
            <span className='itemNumber'>.#420</span>
        </div>
        <div className='owner' style={{color:'#fff'}}>
            <div className='ownerImageContainer'>
                <img src='https://nftprojectlist.com/wp-content/uploads/2021/08/64NRxdVj_400x400.jpg' alt=""/>
            </div>
            <div className='ownerNameAndHandle'>
                <div className=''>
                    0x89EC467Fa3ecF5D6867A8676Fc5624b0AB7d4864
                </div>
                <div className='ownerHandle'>
                    @titaniumBeast
                </div>
                <div className='ownerLink'>
                    <img src={instagramLogo} alt=""/>
                </div>
                <div className='ownerLink'>
                    <img src={twitterLogo} alt=""/>
                </div>
                <div className='ownerLink'>
                    <img src={moreIcon} alt=""/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
