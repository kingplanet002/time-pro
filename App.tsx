
import React, { useState, useMemo } from 'react';
import { CITIES } from './constants';
import Header from './components/Header';
import WorldClock from './components/WorldClock';
import type { City } from './types';

const App: React.FC = () => {
  const [query1, setQuery1] = useState('');
  const [selectedCity1, setSelectedCity1] = useState<City | null>(null);

  const [query2, setQuery2] = useState('');
  const [selectedCity2, setSelectedCity2] = useState<City | null>(null);

  const filteredCities1 = useMemo(() => {
    if (!query1) return [];
    return CITIES.filter(city =>
      city.name.toLowerCase().includes(query1.toLowerCase()) ||
      city.country.toLowerCase().includes(query1.toLowerCase())
    );
  }, [query1]);

  const filteredCities2 = useMemo(() => {
    if (!query2) return [];
    return CITIES.filter(city =>
      city.name.toLowerCase().includes(query2.toLowerCase()) ||
      city.country.toLowerCase().includes(query2.toLowerCase())
    );
  }, [query2]);

  const handleSelectCity1 = (city: City) => {
    setSelectedCity1(city);
    setQuery1('');
  };

  const handleSelectCity2 = (city: City) => {
    setSelectedCity2(city);
    setQuery2('');
  };


  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col p-4 sm:p-8">
        {/* Comparison Section */}
        <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-200">Compare Times</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Comparator 1 */}
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <input
                    type="text"
                    value={query1}
                    onChange={(e) => setQuery1(e.target.value)}
                    placeholder="Search for a city..."
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  />
                  {filteredCities1.length > 0 && (
                    <ul className="absolute z-20 w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {filteredCities1.map(city => (
                        <li key={city.name} onClick={() => handleSelectCity1(city)} className="px-4 py-2 hover:bg-gray-700 cursor-pointer transition-colors">
                          {city.name}, {city.country}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {selectedCity1 ? (
                  <WorldClock city={selectedCity1} />
                ) : (
                  <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-700 rounded-xl text-gray-500">
                    Select a city to display its clock
                  </div>
                )}
              </div>

              {/* Comparator 2 */}
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <input
                    type="text"
                    value={query2}
                    onChange={(e) => setQuery2(e.target.value)}
                    placeholder="Search for a city..."
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  />
                  {filteredCities2.length > 0 && (
                    <ul className="absolute z-20 w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {filteredCities2.map(city => (
                        <li key={city.name} onClick={() => handleSelectCity2(city)} className="px-4 py-2 hover:bg-gray-700 cursor-pointer transition-colors">
                          {city.name}, {city.country}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {selectedCity2 ? (
                  <WorldClock city={selectedCity2} />
                ) : (
                  <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-700 rounded-xl text-gray-500">
                    Select a city to display its clock
                  </div>
                )}
              </div>
            </div>
        </div>

        {/* Scrolling Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-200">Explore the World</h2>
          <div className="flex overflow-x-auto space-x-8 py-4 w-full">
            {CITIES.map((city) => (
              <div key={city.name} className="flex-shrink-0 w-80">
                <WorldClock city={city} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
