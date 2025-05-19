const teamsData = [
  {
    id: 1,
    name: "Philadelphia 76ers",
    abbreviation: "PHI",
    city: "Philadelphia",
    conference: "Eastern",
    division: "Atlantic",
    logo: "https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg",
    colors: {
      primary: "#006BB6",
      secondary: "#ED174C",
      tertiary: "#002B5C",
      quaternary: "#C4CED4"
    },
    established: 1946,
    championships: 3,
    website: "https://www.nba.com/sixers",
    roster: "https://www.nba.com/sixers/roster"
  },
  {
    id: 2,
    name: "Milwaukee Bucks",
    abbreviation: "MIL",
    city: "Milwaukee",
    conference: "Eastern",
    division: "Central",
    logo: "https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg",
    colors: {
      primary: "#00471B",
      secondary: "#EEE1C6",
      tertiary: "#0077C0",
      quaternary: "#BEC0C2"
    },
    established: 1968,
    championships: 2,
    website: "https://www.nba.com/bucks",
    roster: "https://www.nba.com/bucks/roster"
  },
  {
    id: 3,
    name: "Chicago Bulls",
    abbreviation: "CHI",
    city: "Chicago",
    conference: "Eastern",
    division: "Central",
    logo: "https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg",
    colors: {
      primary: "#CE1141",
      secondary: "#000000",
      tertiary: "#FFFFFF"
    },
    established: 1966,
    championships: 6,
    website: "https://www.nba.com/bulls",
    roster: "https://www.nba.com/bulls/roster"
  },
  {
    id: 4,
    name: "Cleveland Cavaliers",
    abbreviation: "CLE",
    city: "Cleveland",
    conference: "Eastern",
    division: "Central",
    logo: "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg",
    colors: {
      primary: "#6F263D",
      secondary: "#FFB81C",
      tertiary: "#041E42",
      quaternary: "#000000"
    },
    established: 1970,
    championships: 1,
    website: "https://www.nba.com/cavaliers",
    roster: "https://www.nba.com/cavaliers/roster"
  },
  {
    id: 5,
    name: "Boston Celtics",
    abbreviation: "BOS",
    city: "Boston",
    conference: "Eastern",
    division: "Atlantic",
    logo: "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg",
    colors: {
      primary: "#007A33",
      secondary: "#BA9653",
      tertiary: "#963821",
      quaternary: "#000000"
    },
    established: 1946,
    championships: 17,
    website: "https://www.nba.com/celtics",
    roster: "https://www.nba.com/celtics/roster"
  },
  {
    id: 6,
    name: "LA Clippers",
    abbreviation: "LAC",
    city: "LA",
    conference: "Western",
    division: "Pacific",
    logo: "https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg",
    colors: {
      primary: "#C8102E",
      secondary: "#1D428A",
      tertiary: "#BEC0C2"
    },
    established: 1970,
    championships: 0,
    website: "https://www.nba.com/clippers",
    roster: "https://www.nba.com/clippers/roster"
  },
  {
    id: 7,
    name: "Memphis Grizzlies",
    abbreviation: "MEM",
    city: "Memphis",
    conference: "Western",
    division: "Southwest",
    logo: "https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg",
    colors: {
      primary: "#12173F",
      secondary: "#5D76A9",
      tertiary: "#F5B112"
    },
    established: 1995,
    championships: 0,
    website: "https://www.nba.com/grizzlies",
    roster: "https://www.nba.com/grizzlies/roster"
  },
  {
    id: 8,
    name: "Atlanta Hawks",
    abbreviation: "ATL",
    city: "Atlanta",
    conference: "Eastern",
    division: "Southeast",
    logo: "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg",
    colors: {
      primary: "#E03A3E",
      secondary: "#C1D32F",
      tertiary: "#26282A"
    },
    established: 1946,
    championships: 1,
    website: "https://www.nba.com/hawks",
    roster: "https://www.nba.com/hawks/roster"
  },
  {
    id: 9,
    name: "Miami Heat",
    abbreviation: "MIA",
    city: "Miami",
    conference: "Eastern",
    division: "Southeast",
    logo: "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg",
    colors: {
      primary: "#98002E",
      secondary: "#F9A01B",
      tertiary: "#000000"
    },
    established: 1988,
    championships: 3,
    website: "https://www.nba.com/heat",
    roster: "https://www.nba.com/heat/roster"
  },
  {
    id: 10,
    name: "Charlotte Hornets",
    abbreviation: "CHA",
    city: "Charlotte",
    conference: "Eastern",
    division: "Southeast",
    logo: "https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg",
    colors: {
      primary: "#1D1160",
      secondary: "#00788C",
      tertiary: "#A1A1A4"
    },
    established: 1988,
    championships: 0,
    website: "https://www.nba.com/hornets",
    roster: "https://www.nba.com/hornets/roster"
  },
  {
    id: 11,
    name: "Utah Jazz",
    abbreviation: "UTA",
    city: "Utah",
    conference: "Western",
    division: "Northwest",
    logo: "https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg",
    colors: {
      primary: "#002B5C",
      secondary: "#F9A01B",
      tertiary: "#00471B"
    },
    established: 1974,
    championships: 0,
    website: "https://www.nba.com/jazz",
    roster: "https://www.nba.com/jazz/roster"
  },
  {
    id: 12,
    name: "Sacramento Kings",
    abbreviation: "SAC",
    city: "Sacramento",
    conference: "Western",
    division: "Pacific",
    logo: "https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg",
    colors: {
      primary: "#5A2D81",
      secondary: "#63727A",
      tertiary: "#000000"
    },
    established: 1923,
    championships: 1,
    website: "https://www.nba.com/kings",
    roster: "https://www.nba.com/kings/roster"
  },
  {
    id: 13,
    name: "New York Knicks",
    abbreviation: "NYK",
    city: "New York",
    conference: "Eastern",
    division: "Atlantic",
    logo: "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg",
    colors: {
      primary: "#006BB6",
      secondary: "#F58426",
      tertiary: "#BEC0C2"
    },
    established: 1946,
    championships: 2,
    website: "https://www.nba.com/knicks",
    roster: "https://www.nba.com/knicks/roster"
  },
  {
    id: 14,
    name: "Los Angeles Lakers",
    abbreviation: "LAL",
    city: "Los Angeles",
    conference: "Western",
    division: "Pacific",
    logo: "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg",
    colors: {
      primary: "#552583",
      secondary: "#FDB927",
      tertiary: "#000000"
    },
    established: 1947,
    championships: 17,
    website: "https://www.nba.com/lakers",
    roster: "https://www.nba.com/lakers/roster"
  },
  {
    id: 15,
    name: "Orlando Magic",
    abbreviation: "ORL",
    city: "Orlando",
    conference: "Eastern",
    division: "Southeast",
    logo: "https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg",
    colors: {
      primary: "#0077C0",
      secondary: "#C4CED4",
      tertiary: "#000000"
    },
    established: 1989,
    championships: 0,
    website: "https://www.nba.com/magic",
    roster: "https://www.nba.com/magic/roster"
  },
  {
    id: 16,
    name: "Dallas Mavericks",
    abbreviation: "DAL",
    city: "Dallas",
    conference: "Western",
    division: "Southwest",
    logo: "https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg",
    colors: {
      primary: "#00538C",
      secondary: "#B8C4CA",
      tertiary: "#002B5E"
    },
    established: 1980,
    championships: 1,
    website: "https://www.nba.com/mavericks",
    roster: "https://www.nba.com/mavericks/roster"
  },
  {
    id: 17,
    name: "Brooklyn Nets",
    abbreviation: "BKN",
    city: "Brooklyn",
    conference: "Eastern",
    division: "Atlantic",
    logo: "https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg",
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      tertiary: "undefined"
    },
    established: 1967,
    championships: 0,
    website: "https://www.nba.com/nets",
    roster: "https://www.nba.com/nets/roster"
  },
  {
    id: 18,
    name: "Denver Nuggets",
    abbreviation: "DEN",
    city: "Denver",
    conference: "Western",
    division: "Northwest",
    logo: "https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg",
    colors: {
      primary: "#0E2240",
      secondary: "#FEC524",
      tertiary: "#1D428A",
      quaternary: "#8B2131"
    },
    established: 1967,
    championships: 1,
    website: "https://www.nba.com/nuggets",
    roster: "https://www.nba.com/nuggets/roster"
  },
  {
    id: 19,
    name: "Indiana Pacers",
    abbreviation: "IND",
    city: "Indiana",
    conference: "Eastern",
    division: "Central",
    logo: "https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg",
    colors: {
      primary: "#002D62",
      secondary: "#FDBB30",
      tertiary: "#BEC0C2"
    },
    established: 1967,
    championships: 0,
    website: "https://www.nba.com/pacers",
    roster: "https://www.nba.com/pacers/roster"
  },
  {
    id: 20,
    name: "New Orleans Pelicans",
    abbreviation: "NOP",
    city: "New Orleans",
    conference: "Western",
    division: "Southwest",
    logo: "https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg",
    colors: {
      primary: "#0C2340",
      secondary: "#C8102E",
      tertiary: "#85714D"
    },
    established: 2002,
    championships: 0,
    website: "https://www.nba.com/pelicans",
    roster: "https://www.nba.com/pelicans/roster"
  },
  {
    id: 21,
    name: "Detroit Pistons",
    abbreviation: "DET",
    city: "Detroit",
    conference: "Eastern",
    division: "Central",
    logo: "https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg",
    colors: {
      primary: "#C8102E",
      secondary: "#006BB6",
      tertiary: "#BEC0C2"
    },
    established: 1941,
    championships: 3,
    website: "https://www.nba.com/pistons",
    roster: "https://www.nba.com/pistons/roster"
  },
  {
    id: 22,
    name: "Toronto Raptors",
    abbreviation: "TOR",
    city: "Toronto",
    conference: "Eastern",
    division: "Atlantic",
    logo: "https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg",
    colors: {
      primary: "#CE1141",
      secondary: "#000000",
      tertiary: "#A1A1A4"
    },
    established: 1995,
    championships: 1,
    website: "https://www.nba.com/raptors",
    roster: "https://www.nba.com/raptors/roster"
  },
  {
    id: 23,
    name: "Houston Rockets",
    abbreviation: "HOU",
    city: "Houston",
    conference: "Western",
    division: "Southwest",
    logo: "https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg",
    colors: {
      primary: "#CE1141",
      secondary: "#C4CED4",
      tertiary: "#000000"
    },
    established: 1967,
    championships: 2,
    website: "https://www.nba.com/rockets",
    roster: "https://www.nba.com/rockets/roster"
  },
  {
    id: 24,
    name: "San Antonio Spurs",
    abbreviation: "SAS",
    city: "San Antonio",
    conference: "Western",
    division: "Southwest",
    logo: "https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg",
    colors: {
      primary: "#C4CED4",
      secondary: "#000000",
      tertiary: "#FFFFFF"
    },
    established: 1967,
    championships: 5,
    website: "https://www.nba.com/spurs",
    roster: "https://www.nba.com/spurs/roster"
  },
  {
    id: 25,
    name: "Phoenix Suns",
    abbreviation: "PHX",
    city: "Phoenix",
    conference: "Western",
    division: "Pacific",
    logo: "https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg",
    colors: {
      primary: "#1D1160",
      secondary: "#E56020",
      tertiary: "#000000"
    },
    established: 1968,
    championships: 0,
    website: "https://www.nba.com/suns",
    roster: "https://www.nba.com/suns/roster"
  },
  {
    id: 26,
    name: "Oklahoma City Thunder",
    abbreviation: "OKC",
    city: "Oklahoma City",
    conference: "Western",
    division: "Northwest",
    logo: "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg",
    colors: {
      primary: "#007AC1",
      secondary: "#F05133",
      tertiary: "#002D62"
    },
    established: 2008,
    championships: 0,
    website: "https://www.nba.com/thunder",
    roster: "https://www.nba.com/thunder/roster"
  },
  {
    id: 27,
    name: "Minnesota Timberwolves",
    abbreviation: "MIN",
    city: "Minnesota",
    conference: "Western",
    division: "Northwest",
    logo: "https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg",
    colors: {
      primary: "#0C2340",
      secondary: "#236192",
      tertiary: "#78BE20"
    },
    established: 1989,
    championships: 0,
    website: "https://www.nba.com/timberwolves",
    roster: "https://www.nba.com/timberwolves/roster"
  },
  {
    id: 28,
    name: "Portland Trail Blazers",
    abbreviation: "POR",
    city: "Portland",
    conference: "Western",
    division: "Northwest",
    logo: "https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg",
    colors: {
      primary: "#E03A3E",
      secondary: "#000000",
      tertiary: "#C4CED4"
    },
    established: 1970,
    championships: 1,
    website: "https://www.nba.com/blazers",
    roster: "https://www.nba.com/blazers/roster"
  },
  {
    id: 29,
    name: "Golden State Warriors",
    abbreviation: "GSW",
    city: "Golden State",
    conference: "Western",
    division: "Pacific",
    logo: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg",
    colors: {
      primary: "#1D428A",
      secondary: "#FFC72C",
      tertiary: "#000000"
    },
    established: 1946,
    championships: 7,
    website: "https://www.nba.com/warriors",
    roster: "https://www.nba.com/warriors/roster"
  },
  {
    id: 30,
    name: "Washington Wizards",
    abbreviation: "WAS",
    city: "Washington",
    conference: "Eastern",
    division: "Southeast",
    logo: "https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg",
    colors: {
      primary: "#002B5C",
      secondary: "#E31837",
      tertiary: "#C4CED4"
    },
    established: 1961,
    championships: 1,
    website: "https://www.nba.com/wizards",
    roster: "https://www.nba.com/wizards/roster"
  }
];

export default teamsData;