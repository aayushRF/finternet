// src/App.jsx
import React from 'react';

const App = () => {
  return (
    <div>

      <div className='border-b'>
        <h1 className="text-xl font-bold py-4 px-10">Playground</h1>
      </div>
      <div className="h-screen flex bg-gray-100">

        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md">

          <nav className="p-4">
            <h2 className="font-semibold mb-2">Home</h2>
            <a href="#" className="block text-blue-600 hover:underline mb-2">Playground Onboarding</a>

            <h2 className="font-semibold mt-4 mb-2">User Work flows</h2>
            <a href="#" className="block text-blue-600 hover:underline mb-2">User onboarding</a>
            <a href="#" className="block text-blue-600 hover:underline mb-2">Real Estate issuance flow</a>
            <a href="#" className="block text-blue-600 hover:underline mb-2">Investor flow</a>
            <a href="#" className="block text-blue-600 hover:underline mb-2">Investor VC flow</a>

            <h2 className="font-semibold mt-4 mb-2">Guild</h2>
            <a href="#" className="block text-blue-600 hover:underline mb-2">Request for Quote</a>
            <a href="#" className="block text-blue-600 hover:underline mb-2">Guild onboarding</a>
            <a href="#" className="block text-blue-600 hover:underline mb-2">Guild ticket management</a>

            <h2 className="font-semibold mt-4 mb-2">Token manager</h2>
            <a href="#" className="block text-blue-600 hover:underline mb-2">Token manager onboarding</a>
            <a href="#" className="block text-blue-600 hover:underline mb-2">Token manager asset management</a>
            <a href="#" className="block text-blue-600 hover:underline mb-2">Token manager Asset whitelisting</a>
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