import React from 'react';

//If the songs cannot be fetched from the api an error message will appear.
const Error = () => (
  <div className="w-full flex justify-center items-center">
    <h1 className="font-bold text-2xl text-white mt-2">Something went wrong. Please try again.</h1>
  </div>
);

export default Error;
