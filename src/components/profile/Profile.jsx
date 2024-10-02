// Profile.js

import React from 'react';

const Profile = () => {
  return (
    <div className="w-full max-w-xl mx-auto mt-8">

      <div className="relative bg-gradient-to-r from-purple-500 to-blue-500 h-40 rounded-t-lg">

        <div className="absolute -bottom-12 left-6">
          <img
            src="https://via.placeholder.com/100" 
            alt="Jesselyn Wang"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="bg-white p-6 rounded-b-lg shadow-lg">
        <div className="pl-32">
          <h2 className="text-2xl font-semibold">Jesselyn Wang</h2>
          <p className="text-gray-600">Lead Product Designer at Apple</p>
          <div className="text-sm text-gray-500 flex items-center space-x-2">
            <span>🇰🇷 Seoul, South Korea</span>
          </div>

          {/* Follower & Connections */}
          <div className="mt-4 flex space-x-6 text-gray-700">
            <div>
              <span className="font-bold">6,476</span>
              <span className="ml-1">followers</span>
            </div>
            <div>
              <span className="font-bold">500+</span>
              <span className="ml-1">connections</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Follow
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded-lg">
              More
            </button>
          </div>

          {/* Company Logos */}
          <div className="mt-6 flex space-x-4">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-200 rounded-full flex justify-center items-center">
                <i className="fab fa-apple"></i>
              </div>
              <span className="ml-2">Apple</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-200 rounded-full flex justify-center items-center">
                <i className="fas fa-star"></i>
              </div>
              <span className="ml-2">Kretya Studio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
