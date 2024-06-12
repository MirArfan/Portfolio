import React from 'react'
import OtherProjectPicture from './OtherProjectPicture';
import OtherDetails from './OtherDetails';
import FoodPage from './FoodPage';
import FoodDelivaryPage from './FoodDelivaryPage';
import PortfolioSection from './PortfolioSection';
import SimpleDomProject from './simpleDomProject';
// import Foodpage from './FoodPage' ;

const OthersProjectCard = () => {
    
    return (
        <div className='flex gap-4 w-[100%] justify-center flex-row flex-wrap'>
            <div className={'flex mt-[50px] max-w-full gap-2.5 ' }>
                <OtherProjectPicture/>
                <OtherDetails />
            </div>
            <div className={'flex mt-[50px] max-w-full gap-2.5 ' }>
                <OtherProjectPicture/>
                <FoodPage/>
            </div>
            <div className={'flex mt-[50px] max-w-full gap-2.5 ' }>
                <OtherProjectPicture/>
                <FoodDelivaryPage/>
            </div>
            <div className={'flex mt-[50px] max-w-full gap-2.5 ' }>
                <OtherProjectPicture/>
                <SimpleDomProject/>
            </div>
            
        </div>

    )
}

export default OthersProjectCard