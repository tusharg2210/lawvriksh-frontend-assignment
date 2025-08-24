// src/components/Sidebar.jsx
import React from 'react';
import { SearchIcon, DashboardIcon, SettingsIcon, TemplateIcon, ChevronRightIcon } from './icons';

const Sidebar = () => (
    <aside className="bg-slate-900 text-slate-300 w-64 flex-shrink-0 p-4 space-y-6 hidden md:flex md:flex-col">
        <div className="flex items-center space-x-3 px-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3z"></path></svg>
            </div>
            <h1 className="text-xl font-bold text-white">Dashdark X</h1>
        </div>

        <div className="relative">
            <SearchIcon />
            <input type="text" placeholder="Search..." className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        <nav className="flex-grow">
            <ul className="space-y-2">
                <li>
                    <a href="#" className="flex items-center space-x-3 bg-indigo-600 text-white rounded-lg px-3 py-2.5 transition-colors duration-200">
                        <DashboardIcon />
                        <span className="font-semibold">Dashboard</span>
                    </a>
                </li>
            </ul>
        </nav>

        <div className="space-y-2">
            <a href="#" className="flex items-center justify-between text-slate-400 hover:text-white px-3 py-2.5 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                    <SettingsIcon />
                    <span>Settings</span>
                </div>
                <ChevronRightIcon />
            </a>
            <a href="#" className="flex items-center justify-between text-slate-400 hover:text-white px-3 py-2.5 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                    <TemplateIcon />
                    <span>Template pages</span>
                </div>
                <ChevronRightIcon />
            </a>
        </div>

        <div className="border-t border-slate-700 pt-4">
            <a href="#" className="flex items-center justify-between text-slate-400 hover:text-white transition-colors duration-200">
                 <div className="flex items-center space-x-3">
                    <img src="https://placehold.co/40x40/a78bfa/ffffff?text=JC" alt="John Carter" className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="font-semibold text-white">John Carter</p>
                        <p className="text-xs">Account settings</p>
                    </div>
                </div>
                <ChevronRightIcon />
            </a>
        </div>
    </aside>
);

export default Sidebar;
