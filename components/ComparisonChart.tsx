import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChartDataPoint } from '../types';

const data: ChartDataPoint[] = [
  { name: 'Rindertalg', smokePoint: 205, omega6: 3, saturated: 50 },
  { name: 'Sonnenblumenöl', smokePoint: 227, omega6: 65, saturated: 10 },
  { name: 'Olivenöl (Ex. Virg)', smokePoint: 190, omega6: 10, saturated: 14 },
  { name: 'Butter', smokePoint: 150, omega6: 3, saturated: 51 },
  { name: 'Kokosöl', smokePoint: 177, omega6: 2, saturated: 87 },
];

const ComparisonChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-tallow-200">
      <h3 className="text-xl font-serif font-bold text-tallow-900 mb-4">Rauchpunkt & Stabilität</h3>
      <p className="text-sm text-gray-600 mb-6">
        Der Rauchpunkt ist nur die halbe Wahrheit. Wichtiger ist die <strong>Oxidationsstabilität</strong>. 
        Pflanzenöle mit viel Omega-6 (wie Sonnenblumenöl) oxidieren chemisch oft schon <em>vor</em> dem Rauchpunkt und bilden schädliche Verbindungen.
        Rindertalg ist durch die gesättigten Fettsäuren chemisch stabil und sicher zum Braten.
      </p>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis type="number" domain={[0, 250]} />
            <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12}} />
            <Tooltip 
                cursor={{fill: '#fcf7ec'}}
                contentStyle={{ backgroundColor: '#fff', borderColor: '#e5c175' }}
                itemStyle={{ color: '#694326' }}
            />
            <Bar dataKey="smokePoint" name="Rauchpunkt (°C)" radius={[0, 4, 4, 0]} barSize={20}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.name === 'Rindertalg' ? '#c38634' : '#e5e7eb'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-xs text-gray-500 italic text-center bg-gray-50 p-2 rounded">
        Info: Sonnenblumenöl hat zwar einen hohen Rauchpunkt, ist aber chemisch instabil und entzündungsfördernd. Talg kombiniert Hitze-Stabilität mit chemischer Sicherheit.
      </div>
    </div>
  );
};

export default ComparisonChart;