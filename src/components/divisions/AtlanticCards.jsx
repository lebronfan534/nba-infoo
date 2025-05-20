import teamsData from '../../data/team-data';


export default function AtlanticCards() {
    return (
    <>        
        <h1 className="title"> Atlantic </h1>
            <div className="">
                {teamsData.filter(teamsData => teamsData.division === "Atlantic").map(teamsData =>  (
                <div key={teamsData.id} 
                className=
                "py-4" 
                >
                    
                    <div className="font-mono font text-white ">
                        <img src={teamsData.logo} className="w-32 h-32 "></img>
                        <a href={teamsData.website} className="team-title">{teamsData.name} ({teamsData.abbreviation})</a>
                        <p className="team-conference">   Conference: {teamsData.conference}  </p>
                        <p className="team-divison"> Divison: {teamsData.division}  </p>
                        <p className="team-established">Established: {teamsData.established} </p>
                        <p className="team-Championships">Championships: {teamsData.championships} </p>
                        <a className=""href={teamsData.roster}>Roster</a> 
                    </div>
                    <div className="flex gap-2 group relative ">
                        <div
                        className="rounded-full"
                        style={{  backgroundColor: teamsData.colors.primary, width:30, minHeight:30, }}
                        >
                        </div>
                        <div
                        className ="text-white opacity-20 absolute top-full 
                        group-hover:opacity-100 transition-opacity duration-200 " 
                        >
                            {teamsData.colors.primary} 
                        </div>
                        <div
                        className="rounded-full"
                        style={{ backgroundColor: teamsData.colors.secondary, width:30, minHeight:30,}}
                        >
                        </div>
                        <div
                        className="rounded-full"
                        style={{ backgroundColor: teamsData.colors.tertiary, width:30, minHeight:30,}}
                        >
                        </div>
                        <div
                        className="rounded-full"
                        style={{ backgroundColor: teamsData.colors.quaternary, width:30, minHeight:30, }}
                        >
                        </div>
                    </div>
                </div>
                ))}
            </div>
    </>
    )
}

function handleClick() {
    
}
