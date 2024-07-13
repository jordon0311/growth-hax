import React, { useEffect, useState } from 'react';
import { ReturnedDataType } from '../types.types';

const GithubSquares = ({ data }: { data: ReturnedDataType }) => {
    console.log('ehllo there', data.data.contributions);

    const contributionData = data.data.contributions;

    const squares = contributionData.weeks.map((week, weekIndex) => {
        return (
            <div key={weekIndex} className="flex flex-col gap-1">
                {week.contributionDays.map((day, dayIndex) => (
                    <div
                        key={dayIndex}
                        className={`w-4 h-4 rounded ${getColor(day.contributionCount)}`}
                        title={`Contributions: ${day.contributionCount}`}
                    ></div>
                ))}
            </div>
        );
    });

    return (
        <div className="mt-4 bg-gray-100 p-2 overflow-auto" >
            <div className="flex flex-row gap-1">
                {squares}
            </div>
        </div>
    );
};

const getColor = (count: number) => {
    if (count >= 20) return 'bg-green-700';
    if (count >= 10) return 'bg-green-500';
    if (count >= 5) return 'bg-green-300';
    if (count > 0) return 'bg-green-100';
    return 'bg-gray-200';
};

export default GithubSquares;
