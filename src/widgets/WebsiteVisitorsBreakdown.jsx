
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Card from '../components/Card';
import { websiteVisitorsBreakdownData } from '../data/mockData';

const WebsiteVisitorsBreakdown = () => (
     <Card className="col-span-12 lg:col-span-4">
        <h2 className="text-xl text-white mb-4">Website Visitors</h2>
        <div className="h-60 flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={websiteVisitorsBreakdownData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={70}
                        startAngle={180}
                        endAngle={0}
                        dataKey="value"
                        stroke="none"
                        
                    >
                        {websiteVisitorsBreakdownData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-white">80%</span>
                <span className="text-slate-400">Transactions</span>
            </div>
        </div>
        <div className="mt-4 flex justify-around">
            {websiteVisitorsBreakdownData.map(item => (
                <div key={item.name} className="flex items-center space-x-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                    <span className="text-sm text-slate-400">{item.name}</span>
                </div>
            ))}
        </div>
    </Card>
);

export default WebsiteVisitorsBreakdown;
