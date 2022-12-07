import  AreaChart from "./AreaChart";
import DownloadChart from "./downloadChart";
import Linechart from "./linechart";
import SimpleLineChart from "./simpleChart";
import Biaxial from './biaxial'
import LegendToggling from "./legendTogglng";
import RenderChart from "./group";
import TooltipClickable from './TooltipClickable'
import Analyticsdata from './Analyticsdata'
import Sankeychart from "./sankeychart";
function App() {
  return (
 
    <div style={{marginLeft:"10%"}} className="App">
         <Linechart/>
         <AreaChart/>
         <SimpleLineChart/>
         <DownloadChart/>
         <Biaxial/>
         <LegendToggling/>
    {/* <RenderChart/> */}
    <Sankeychart/>
    <TooltipClickable/>

    <Analyticsdata/>
    </div>
  );
}

export default App;
