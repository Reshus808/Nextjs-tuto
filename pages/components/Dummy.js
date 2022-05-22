import React from 'react';

const Dummy = () => {
    return (
        <div>
            <style jsx global>
                {`
                .dummy{
                background: lightgray;
                }
               `}
            </style>
            <div className='dummy'>i am dummy dummy.</div>
        </div>
    );
};

export default Dummy;