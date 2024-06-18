import ContactUs from './ContactUs';
import Downloads from './Downloads';
import ProductOverview from './ProductOverview';
import MeetOurTeam from './MeetOurTeam';
import Methodology from './Methodology';
import ResearchGap from './ResearchGap';
import ResearchObjectives from './ResearchObjectives';
import ResearchProblem from './ResearchProblem';
import TechnologyUsed from './TechnologyUsed';
import TimeLines from './TimeLines';

type Props = {}

const HomePage = (props: Props) => {

  return (
    <div>
      <div className="intro" id="home">
        <h1 className="animate">SECURE AUTOMATION FOR THE DEPARTURE PROCESS OF THE AIRPORT AND AVIATION SERVICES IN SRI LANKA</h1>
      </div>

      <ProductOverview />
      <ResearchGap />
      <ResearchProblem />
      <ResearchObjectives />
      <Methodology />
      <TechnologyUsed />
      <TimeLines />
      <Downloads />
      <MeetOurTeam />
      <ContactUs />

    </div>
  )
}

export default HomePage