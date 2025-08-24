// src/App.jsx
import React from 'react';
import Sidebar from './components/SideBar';
import { ChevronDownIcon } from './components/icons';

// Import all the dashboard widgets
import WebsiteVisitorsChart from './widgets/WebsiteVisitorsChart';
import RevenueChart from './widgets/RevenueChart';
import ProductsList from './widgets/ProductsList';
import TeamProgress from './widgets/TeamProgress';
import WebsiteVisitorsBreakdown from './widgets/WebsiteVisitorsBreakdown';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen flex font-sans">
        <Sidebar />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-slate-900/95">
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white">Analytics</h1>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors duration-200">
                    <span>May 2023</span>
                    <ChevronDownIcon />
                </button>
            </header>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-12 gap-6">
                <WebsiteVisitorsChart />
                <RevenueChart />
                <ProductsList />
                <TeamProgress />
                <WebsiteVisitorsBreakdown />
            </div>
        </main>
    </div>
  );
}

export default App;