
import React from 'react';

const Card = ({ children, className = '' }) => (
    <div className={`bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 ${className}`}>
        {children}
    </div>
);

export default Card;
