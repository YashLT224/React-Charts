import  AreaChart from "./AreaChart";
import DownloadChart from "./downloadChart";
import Linechart from "./linechart";
import SimpleLineChart from "./simpleChart";
import Biaxial from './biaxial'
import LegendToggling from "./legendTogglng";
import RenderChart from "./group";
import TooltipClickable from './TooltipClickable'
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
    <TooltipClickable/>
    </div>
  );
}

export default App;
