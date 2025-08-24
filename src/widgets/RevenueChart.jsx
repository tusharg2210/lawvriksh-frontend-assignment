// src/widgets/RevenueChart.jsx
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Card from '../components/Card';
import { ChevronDownIcon } from '../components/icons';
import { revenueData } from '../data/mockData';

const RevenueChart = () => (
    <Card className="col-span-12 lg:col-span-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
                <h2 className="text-xl font-semibold text-white">Revenue by customer type</h2>
                <div className="flex items-center mt-1">
                    <p className="text-3xl font-bold text-white">$240.8K</p>
                    <span className="ml-2 text-sm bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">+4.8%</span>
                </div>
            </div>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                 <div className="flex items-center space-x-2 text-sm">
                    <span className="h-2.5 w-2.5 bg-indigo-500 rounded-full"></span>
                    <span className="text-slate-400">Current clients</span>
                </div>
                 <div className="flex items-center space-x-2 text-sm">
                    <span className="h-2.5 w-2.5 bg-fuchsia-500 rounded-full"></span>
                    <span className="text-slate-400">Subscribers</span>
                </div>
                 <div className="flex items-center space-x-2 text-sm">
                    <span className="h-2.5 w-2.5 bg-teal-500 rounded-full"></span>
                    <span className="text-slate-400">New customers</span>
                </div>
                <div className="text-sm text-slate-400 border border-slate-600 rounded-lg px-3 py-1.5 flex items-center space-x-2">
                    <span>Jan 2024 - Dec 2024</span>
                    <ChevronDownIcon />
                </div>
            </div>
        </div>
        <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }} barGap={8}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                    <XAxis dataKey="name" tick={{ fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                    <YAxis tickFormatter={(value) => `${value/1000}K`} tick={{ fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                    <Tooltip
                        cursor={{fill: 'rgba(100, 116, 139, 0.1)'}}
                        contentStyle={{
                            background: 'rgba(30, 41, 59, 0.8)',
                            borderColor: '#475569',
                            borderRadius: '0.75rem',
                        }}
                    />
                    <Bar dataKey="Current" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={12} />
                    <Bar dataKey="Subscribers" fill="#d946ef" radius={[4, 4, 0, 0]} barSize={12} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </Card>
);

export default RevenueChart;
