// src/widgets/TeamProgress.jsx
import React from 'react';
import Card from '../components/Card';
import { teamProgressData } from '../data/mockData';

const TeamProgress = () => (
    <Card className="col-span-12 lg:col-span-4">
        <h2 className="text-xl font-semibold text-white mb-4">Team progress</h2>
        <div className="space-y-5">
            {teamProgressData.map((member, index) => (
                <div key={index}>
                    <div className="flex items-center space-x-3">
                        <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="font-medium text-white">{member.name}</p>
                            <p className="text-sm text-slate-400">{member.email}</p>
                        </div>
                        <div className="flex-grow text-right font-semibold text-white">{member.progress}%</div>
                    </div>
                    <div className="mt-2 bg-slate-700 rounded-full h-1.5">
                        <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: `${member.progress}%` }}></div>
                    </div>
                </div>
            ))}
        </div>
    </Card>
);

export default TeamProgress;
