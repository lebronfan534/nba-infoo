import teamsData from '../../data/team-data';


export default function AtlanticCards() {
    return (
    <>        
        <h1 className="title"> Atlantic </h1>
            <div className="">
                {teamsData.filter(teamsData => teamsData.division === "Atlantic").map(teamsData =>  (
                <div key={teamsData.id} 
                className=
                "" 
                >
                    <img src={teamsData.logo} className="w-32 h-32 "></img>
                    <div style={{color: "#FFFFFF"}} className="font-mono">
                        <a href={teamsData.website} className="team-title">{teamsData.name} ({teamsData.abbreviation})</a>
                        <p className="team-conference">   Conference: {teamsData.conference}  </p>
                        <p className="team-divison"> Divison: {teamsData.division}  </p>
                        <p className="team-established">Established: {teamsData.established} </p>
                        <p className="team-Championships">Championships: {teamsData.championships} </p>
                        <a className="team-roster"href={teamsData.roster}>Roster</a> 
                    </div>
                    <div className="flex gap-2 blur-[1px] ">
                        <div
                        className="rounded-full "
                        style={{  backgroundColor: teamsData.colors.primary, width:30, minHeight:30, }}
                        >
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
