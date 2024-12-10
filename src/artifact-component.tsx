import React, { useState, useEffect } from 'react';
import { AlertCircle, Mail, Lock, User, Github, Facebook, Twitter } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Predefined data remains the same
const marketSegmentData = [
  { name: 'Global Enterprises', value: 1350000 },
  { name: 'Innovative Solutions', value: 980000 },
  { name: 'Strategic Partners', value: 750000 },
  { name: 'Emerging Markets', value: 520000 }
];

const marketGrowthData = [
  { year: '2021', market: 2500000 },
  { year: '2022', market: 3100000 },
  { year: '2023', market: 3850000 },
  { year: '2024', market: 4750000 },
  { year: '2025', market: 5900000 }
];

const competitiveLandscapeData = [
  { competitor: 'North America', marketShare: 35 },
  { competitor: 'Europe', marketShare: 25 },
  { competitor: 'Asia-Pacific', marketShare: 20 },
  { competitor: 'Rest of World', marketShare: 20 }
];

// More inclusive and professional color palette
const PROFESSIONAL_COLORS = [
  '#3498db',  // Bright blue
  '#2ecc71',  // Vibrant green
  '#34495e',  // Sophisticated dark blue-gray
  '#f39c12'   // Warm orange
];

const validateNumberInput = (value) => {
  if (isNaN(value) || value === '' || value < 0) {
    return 0;
  }
  return Number(value);
};

const formatNumber = (number) => {
  return number.toLocaleString();
};

const MRRChecker = () => {
  const [monthlyRecurringRevenue, setMonthlyRecurringRevenue] = useState(0);
  const [growthRate, setGrowthRate] = useState(5);

  const calculateProjectedMRR = () => {
    return monthlyRecurringRevenue * (1 + growthRate / 100);
  };

  return (
    <Card className="bg-white shadow-lg rounded-lg border border-gray-200">
      <CardHeader className="bg-gray-50 border-b border-gray-200 p-4">
        <CardTitle className="text-2xl font-semibold text-gray-800">
          Monthly Recurring Revenue Projection
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Current Monthly Recurring Revenue ($)
            </label>
            <input 
              type="number"
              value={monthlyRecurringRevenue}
              onChange={(e) => setMonthlyRecurringRevenue(validateNumberInput(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Monthly Growth Rate (%)
            </label>
            <input 
              type="number"
              value={growthRate}
              onChange={(e) => setGrowthRate(validateNumberInput(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="bg-blue-50 p-4 rounded-md mt-4">
            <h3 className="text-lg text-gray-700 mb-2">Projected MRR</h3>
            <p className="text-3xl font-bold text-blue-600">
              ${formatNumber(calculateProjectedMRR())}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const MarketSizeCalculator = () => {
  const [totalAddressableMarket, setTotalAddressableMarket] = useState(5900000);
  const [averageContractValue, setAverageContractValue] = useState(50000);
  const [marketPenetration, setMarketPenetration] = useState(10);
  const [potentialRevenueHistory, setPotentialRevenueHistory] = useState([]);

  const calculatePotentialRevenue = () => {
    const potentialCustomers = (totalAddressableMarket * (marketPenetration / 100));
    const revenue = potentialCustomers * averageContractValue;
    return revenue;
  };

  useEffect(() => {
    const newRevenue = calculatePotentialRevenue();
    setPotentialRevenueHistory(prev => {
      const updatedHistory = [...prev, { 
        name: `Calc ${prev.length + 1}`, 
        revenue: newRevenue 
      }];
      return updatedHistory.slice(-5);
    });
  }, [totalAddressableMarket, averageContractValue, marketPenetration]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-white shadow-lg rounded-lg border border-gray-200">
        <CardHeader className="bg-gray-50 border-b border-gray-200 p-4">
          <CardTitle className="text-2xl font-semibold text-gray-800">
            Market Size Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Total Addressable Market ($)
              </label>
              <input 
                type="number"
                value={totalAddressableMarket}
                onChange={(e) => setTotalAddressableMarket(validateNumberInput(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Avg. Contract Value ($)
              </label>
              <input 
                type="number"
                value={averageContractValue}
                onChange={(e) => setAverageContractValue(validateNumberInput(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Market Penetration (%)
              </label>
              <input 
                type="number"
                value={marketPenetration}
                onChange={(e) => setMarketPenetration(validateNumberInput(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md mt-4">
              <h3 className="text-lg text-gray-700 mb-2">
                Potential Revenue
              </h3>
              <p className="text-3xl font-bold text-blue-600">
                ${formatNumber(calculatePotentialRevenue())}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Revenue History Graph */}
      <Card className="bg-white shadow-lg rounded-lg border border-gray-200">
        <CardHeader className="bg-gray-50 border-b border-gray-200 p-4">
          <CardTitle className="text-2xl font-semibold text-gray-800">
            Revenue History
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <BarChart width={400} height={250} data={potentialRevenueHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip 
              contentStyle={{backgroundColor: '#f5f5f5', color: '#333'}}
              itemStyle={{color: '#333'}}
            />
            <Bar dataKey="revenue" fill="#3498db">
              {potentialRevenueHistory.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={PROFESSIONAL_COLORS[index % PROFESSIONAL_COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </CardContent>
      </Card>
    </div>
  );
};

const TotalAddressableMarketDashboard = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen p-8 font-sans">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12 uppercase tracking-wide">
        Global Market Analysis
      </h1>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Market Segment Pie Chart */}
          <Card className="bg-white shadow-lg rounded-lg border border-gray-200">
            <CardHeader className="bg-gray-50 border-b border-gray-200 p-4">
              <CardTitle className="text-2xl font-semibold text-gray-800">
                Market Segment Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <PieChart width={500} height={300}>
                <Pie
                  data={marketSegmentData}
                  cx={250}
                  cy={150}
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {marketSegmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PROFESSIONAL_COLORS[index % PROFESSIONAL_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{backgroundColor: '#f5f5f5', color: '#333'}}
                  itemStyle={{color: '#333'}}
                />
              </PieChart>
            </CardContent>
          </Card>

          {/* Market Growth Line Chart */}
          <Card className="bg-white shadow-lg rounded-lg border border-gray-200">
            <CardHeader className="bg-gray-50 border-b border-gray-200 p-4">
              <CardTitle className="text-2xl font-semibold text-gray-800">
                Market Growth Trend
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <LineChart width={500} height={300} data={marketGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="year" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{backgroundColor: '#f5f5f5', color: '#333'}}
                  itemStyle={{color: '#333'}}
                />
                <Line type="monotone" dataKey="market" stroke="#2ecc71" strokeWidth={3} />
              </LineChart>
            </CardContent>
          </Card>
        </div>

        {/* Existing Calculator and MRR Components */}
        <MarketSizeCalculator />
        <MRRChecker />

        {/* Competitive Landscape Chart */}
        <Card className="bg-white shadow-lg rounded-lg border border-gray-200">
          <CardHeader className="bg-gray-50 border-b border-gray-200 p-4">
            <CardTitle className="text-2xl font-semibold text-gray-800">
              Global Market Landscape
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <PieChart width={500} height={300}>
              <Pie
                data={competitiveLandscapeData}
                cx={250}
                cy={150}
                labelLine={false}
                outerRadius={120}
                fill="#8884d8"
                dataKey="marketShare"
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {competitiveLandscapeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PROFESSIONAL_COLORS[index % PROFESSIONAL_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{backgroundColor: '#f5f5f5', color: '#333'}}
                itemStyle={{color: '#333'}}
              />
            </PieChart>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TotalAddressableMarketDashboard;