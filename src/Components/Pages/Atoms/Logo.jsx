import React from 'react';
import LogoImg from '/home/sam/Timeloop/timeloop-frontend/src/assets/images/logo.webp';

const Logo = () => {
    return (
        <div class="flex-auto">
            <img src={LogoImg} alt="Logo" className={'w-24 h-auto'}/>
        </div>    
    );
};

export default Logo;