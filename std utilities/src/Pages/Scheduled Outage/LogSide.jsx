import React from 'react';
import DD from '../../Components/Layout/dropdownPart';
import CarouselToggle from '../../Components/Layout/carousel';
import Layout from '../../Components/Layout/Layout';


const Log = ({title}) => {
    
    return (
        <Layout title={title}>
            <div className='h-full'>
            <div className='mt-20' style={{marginTop:"7%"}}>
                <DD />
            </div>
            <div className='pt-14'>
                <CarouselToggle />
            </div>
        </div>
        </Layout>
    )
}
export default Log;