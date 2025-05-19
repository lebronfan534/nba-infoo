import { 
  AtlanticCards, 
  CentralCards, 
  NorthWestCards, 
  PacificCards, 
  SouthEastCards, 
  SouthWestCards 
} from '../index.js';

export default function TeamCards() {
    return (
        <div className="bg-black"> 
            <AtlanticCards />
            <CentralCards />
            <NorthWestCards />
            <PacificCards />
            <SouthEastCards />
            <SouthWestCards />
        </div>
    );
}