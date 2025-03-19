import './App.css';
import ChoosePlan from './layout/ChoosePlan';
import Customize from './layout/Customize';
import Data from './layout/Data';
import Extension from './layout/Extension';
import Header from './layout/Header';
import Hero from './layout/Hero';
import ProjectManage from './layout/ProjectManage';
import Sponsors from './layout/Sponsors';
import Work from './layout/Work';
import YourWork from './layout/YourWork';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProjectManage />
      <Work />
      <Extension />
      <Customize />
      <ChoosePlan />
      <YourWork />
      <Data />
      <Sponsors />
    </div>
  );
}

export default App;
