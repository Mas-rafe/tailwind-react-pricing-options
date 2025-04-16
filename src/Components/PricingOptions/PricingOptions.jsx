import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    console.log(pricingData)
    return (
        <div className='grid md:grid-cols-3 gap-8'>
            {
                pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
            }
            
        </div>
    );
};

export default PricingOptions;