import React from 'react';
import teamsData from '../../data/team-data';

export default function AtlanticCards() {
    return (
        <div className="py-8">        
            <h2 className="text-3xl font-bold text-white mb-6 px-6">Atlantic Division</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                {teamsData
                  .filter(team => team.division === "Atlantic")
                  .map(team => (
                    <div 
                      key={team.id} 
                      className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800"
                    >
                        <div className="flex justify-center p-6 bg-gray-800">
                            <img src={team.logo} alt={team.name} className="w-32 h-32" />
                        </div>
                        <div className="p-6 text-white">
                            <h3 className="text-xl font-bold mb-2">
                                <a href={team.website} className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                                    {team.name} ({team.abbreviation})
                                </a>
                            </h3>
                            <p className="text-gray-300">Conference: {team.conference}</p>
                            <p className="text-gray-300">Division: {team.division}</p>
                            <p className="text-gray-300">Established: {team.established}</p>
                            <p className="text-gray-300 mb-4">Championships: {team.championships}</p>
                            <a 
                                href={team.roster} 
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                View Roster
                            </a>
                        </div>
                        <div className="p-4 bg-gray-800 mt-2">
                            <p className="text-sm text-gray-300 mb-2">Team Colors:</p>
                            <div className="flex space-x-2">
                                <div
                                    className="w-8 h-8 rounded-full shadow-inner"
                                    style={{ backgroundColor: team.colors.primary }}
                                    title="Primary Color"
                                ></div>
                                <div
                                    className="w-8 h-8 rounded-full shadow-inner"
                                    style={{ backgroundColor: team.colors.secondary }}
                                    title="Secondary Color"
                                ></div>
                                {team.colors.tertiary && (
                                    <div
                                        className="w-8 h-8 rounded-full shadow-inner"
                                        style={{ backgroundColor: team.colors.tertiary }}
                                        title="Tertiary Color"
                                    ></div>
                                )}
                                {team.colors.quaternary && (
                                    <div
                                        className="w-8 h-8 rounded-full shadow-inner"
                                        style={{ backgroundColor: team.colors.quaternary }}
                                        title="Quaternary Color"
                                    ></div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}