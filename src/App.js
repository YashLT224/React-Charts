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
import Zoom from './Zoom'
import Zoom1 from "./Zoom1";
import Pie from './pie'
function App() {
  return (
 
    <div style={{marginLeft:"10%"}} className="App">
      <Pie/>
      <Zoom/>
      <Zoom1/>
          <Linechart/>
         <AreaChart/>
         <SimpleLineChart/>
         <DownloadChart/> 
         <Biaxial/>
         {/* <LegendToggling/> */}
    {/* <RenderChart/> */}
    {/* <Sankeychart/>
    <TooltipClickable/>

    <Analyticsdata/> */}
    </div>
  );
}

export default App;
