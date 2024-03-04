import React from 'react';

const SecondNav = () => {
    return (
        <div className='w-[930px] ml-auto my-5'>
            <div className='flex justify-between'>
              <h1>Seller</h1>
              <div className='flex gap-x-5'>
                <h1>Fund Per Client</h1>
                <h1>Withdraw Amount</h1>
              </div>
            </div>
        </div>
    );
};

export default SecondNav;