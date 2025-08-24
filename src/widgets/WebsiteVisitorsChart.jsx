// src/widgets/WebsiteVisitorsChart.jsx
import {React, useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Card from '../components/Card';
import { ExportIcon } from '../components/icons';
import { websiteVisitorsData } from '../data/mockData';

const WebsiteVisitorsChart = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Use null for no initial hover

    // This function creates the data structure for a single progress ring
    const createRingData = (entry) => {
        return [
            { name: entry.name, value: entry.value },
            { name: 'remainder', value: 100 - entry.value },
        ];
    };

    return (
        <Card className="col-span-12 lg:col-span-4 flex flex-col">
            <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold text-white">Website Visitors</h2>
                <button className="flex items-center text-sm text-slate-400 border border-slate-600 rounded-lg px-3 py-1.5 hover:bg-slate-700 transition-colors duration-200">
                    <ExportIcon />
                    Export
                </button>
            </div>
            
            {/* Main content area */}
            <div className="flex-grow flex flex-col items-center justify-center mt-4">
                {/* Concentric Pie Chart */}
                <div className="w-full h-64 relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            {websiteVisitorsData.map((entry, index) => {
                                const ringData = createRingData(entry);
                                const radius = 90 - (index * 10); // Thinner rings, closer together
                                return (
                                    <Pie
                                        key={`pie-${index}`}
                                        data={ringData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={radius - 5} // Ring thickness of 5
                                        outerRadius={radius}
                                        startAngle={90}
                                        endAngle={450}
                                        dataKey="value"
                                        stroke="none"
                                        animationDuration={800}
                                    >
                                        <Cell 
                                            key={`cell-value-${index}`} 
                                            fill={entry.color} 
                                            opacity={activeIndex === null || activeIndex === index ? 1 : 0.3}
                                            style={{ transition: 'opacity 0.3s ease-in-out' }}
                                        />
                                        <Cell 
                                            key={`cell-remainder-${index}`} 
                                            fill="#374151" // A neutral background for the remainder
                                            opacity={activeIndex === null || activeIndex === index ? 0.3 : 0.1}
                                            style={{ transition: 'opacity 0.3s ease-in-out' }}
                                        />
                                    </Pie>
                                );
                            })}
                        </PieChart>
                    </ResponsiveContainer>
                    {/* Central Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                         <span className="text-xl font-bold text-white">
                            150k
                        </span>
                        <span className="text-slate-400 mt-1">Visitors</span>
                    </div>
                </div>

                {/* Horizontal Legend at the bottom */}
                <div className="flex justify-around items-center w-full mt-6">
                    {websiteVisitorsData.map((item, index) => (
                        <div 
                            key={item.name} 
                            className={`text-center p-2 rounded-lg transition-all duration-300 cursor-pointer ${activeIndex === index ? 'bg-slate-700/50' : ''}`}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <div className="flex items-center justify-center space-x-2">
                                <span className="h-3 w-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                                <span className={`font-semibold transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-slate-400'}`}>{item.name}</span>
                            </div>
                            <p className={`font-bold text-lg transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-slate-300'}`}>{item.value}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default WebsiteVisitorsChart;
