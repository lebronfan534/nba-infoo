import { useState } from 'react';
import { 
  AtlanticCards, 
  CentralCards, 
  NorthWestCards, 
  PacificCards, 
  SouthEastCards, 
  SouthWestCards 
} from '../index.js';

export default function TeamCards() {
    const [activeTab, setActiveTab] = useState('all');
    
    return (
        <div className="bg-gray-950 text-white">
            {/* Division Navigation Tabs */}
            <div className="flex flex-wrap justify-center mb-8 border-b border-gray-800">
                <button 
                    className={`px-4 py-3 font-medium transition-colors ${activeTab === 'all' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
                    onClick={() => setActiveTab('all')}
                >
                    All Divisions
                </button>
                <button 
                    className={`px-4 py-3 font-medium transition-colors ${activeTab === 'atlantic' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
                    onClick={() => setActiveTab('atlantic')}
                >
                    Atlantic
                </button>
                <button 
                    className={`px-4 py-3 font-medium transition-colors ${activeTab === 'central' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
                    onClick={() => setActiveTab('central')}
                >
                    Central
                </button>
                <button 
                    className={`px-4 py-3 font-medium transition-colors ${activeTab === 'southeast' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
                    onClick={() => setActiveTab('southeast')}
                >
                    Southeast
                </button>
                <button 
                    className={`px-4 py-3 font-medium transition-colors ${activeTab === 'northwest' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
                    onClick={() => setActiveTab('northwest')}
                >
                    Northwest
                </button>
                <button 
                    className={`px-4 py-3 font-medium transition-colors ${activeTab === 'pacific' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
                    onClick={() => setActiveTab('pacific')}
                >
                    Pacific
                </button>
                <button 
                    className={`px-4 py-3 font-medium transition-colors ${activeTab === 'southwest' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
                    onClick={() => setActiveTab('southwest')}
                >
                    Southwest
                </button>
            </div>
            
            {/* Division Content */}
            <div>
                {(activeTab === 'all' || activeTab === 'atlantic') && <AtlanticCards />}
                {(activeTab === 'all' || activeTab === 'central') && <CentralCards />}
                {(activeTab === 'all' || activeTab === 'southeast') && <SouthEastCards />}
                {(activeTab === 'all' || activeTab === 'northwest') && <NorthWestCards />}
                {(activeTab === 'all' || activeTab === 'pacific') && <PacificCards />}
                {(activeTab === 'all' || activeTab === 'southwest') && <SouthWestCards />}
            </div>
        </div>
    );
}