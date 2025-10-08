"use client";

import React from 'react';

export default function OnlineTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6 px-4 shadow">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold">Online Test</h1>
          <p className="text-sm opacity-90">Please complete the test below</p>
        </div>
      </header>

      <main className="flex-1 p-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow overflow-hidden">
          <div style={{ height: 'calc(100vh - 140px)' }} className="w-full">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdNSwwcK9Cn1w3Hr8onp59uk8MC0x3glllC_5JU_LVn5hdcgQ/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Online Test Form"
              className="w-full h-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
