import logo from './logo.svg';
import './App.css';
import CasesContainer from './Containers/CaseContainer';
import RecoveredContainer from './Containers/RecoveredContainer';
import DeathContainer from './Containers/DeathContainer';
import useDatafetch from './useDatafetch';
import Header from './Containers/Header';
import InputCountry from './Containers/InputCountry';
import CountryContainer from './Containers/CountryContainers';

function App() {
  const data = useDatafetch();
  return (
    <div>
      <Header />
      <div>
        <div className="flex-lg-row d-flex flex-md-row flex-sm-column flex-column justify-content-center m-5 min-vw-50">
          <div className="flex-fill p-2">
            <CasesContainer />
          </div>
          <div className="flex-fill p-2">
            <RecoveredContainer />
          </div>
          <div className="flex-fill p-2"> 
            <DeathContainer />
          </div>
        </div>
        < InputCountry />
        <CountryContainer />
      </div>
    </div>
  );
}

export default App;
