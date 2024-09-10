// src/App.jsx
import React from 'react';

const App = () => {
  return (
    <div>

      <div className=' flex border-b'>
      <img className=" mt-[10px] ml-[30px] h-[40px]"  src="https://finternet-playground.vercel.app/finternetLogo.png" alt="React Image"  />
        <h1 className="text-x py-4 px-10 ml-[-37px]"> Playground</h1>
      </div>
      <div className="h-screen flex bg-gray-100">

        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md">
          <nav className="p-4">
            <h2 className="font-semibold mb-4">Home</h2>
            <a href="#" className="block text-black-600  mb-4 pl-[10px]">Playground Onboarding</a>

 {/* Horizontal line */}

              <hr className="border-t border-gray-200" />


            <h2 className="font-semibold mt-4 mb-4">User Work flows</h2>
            <a href="#" className="block text-black-600  mb-4 pl-[10px]">User onboarding</a>
            <a href="#" className="block text-black-600  mb-4 pl-[10px]">Real Estate issuance flow</a>
            <a href="#" className="block text-black-600  mb-4 pl-[10px]">Investor flow</a>
            <a href="#" className="block text-black-600  mb-4 pl-[10px]">Investor VC flow</a>

 {/* Horizontal line */}
 
              <hr className="border-t border-gray-200" />
          

            <h2 className="font-semibold mt-4 mb-4">Guild</h2>
            <a href="#" className="block text-black-600  mb-4 pl-[10px]">Request for Quote</a>
            <a href="#" className="block text-black-600  mb-4 pl-[10px]">Guild onboarding</a>
            <a href="#" className="block text-black-600  mb-4 pl-[10px]">Guild ticket management</a>

 {/* Horizontal line */}
 
              <hr className="border-t border-gray-200" />
            

            <h2 className="font-semibold mt-4 mb-4">Token manager</h2>
            <a href="#" className="block text-black-600  mb-4 pl-[10px]">Token manager onboarding</a>
            <a href="#" className="block text-black-600  mb-4 pl-[10px]">Token manager asset management</a>
            <a href="#" className="block text-black-600  mb-4 pl-[10px]">Token manager Asset whitelisting</a>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-10">
          <h1 className="text-3xl font-bold mb-4">Welcome to the Finternet playground.</h1>
          <p className="text-lg">
            Explore use cases that demonstrate how the Finternet unlocks
            transactability across assets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;