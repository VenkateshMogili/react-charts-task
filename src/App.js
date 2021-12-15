import "./App.css";
import Card from "./components/Card";
import PieChart from "./components/PieChart";
import StackChart from "./components/StackChart";
import Heading from "./components/Title";
import CustomLegend from "./components/CustomLegend";

function App() {
  return (
    <div className="App">
      <h1 className="header">Employee Portal - Dashboard</h1>
      <div className="d-lg-flex justify-content-center col-sm-12 col-xs-12">
        <Card>
          <Heading title="OKR Progress" />
          <div>
            <h1 className="chart-heading">OKR</h1>
            <PieChart />
          </div>
        </Card>
        <Card>
          <Heading title="Remaining VS Archieved" />
          <div>
            <div className="custom-legend">
              <CustomLegend title="Remaining - 8 " color="orange" />
              <CustomLegend title="Archieved - 10" color="green" />
            </div>
            <div className="d-flex custom-legend-bottom">
              <CustomLegend title="Remaining" color="orange" />
              <CustomLegend title="Archieved" color="green" />
            </div>
            <StackChart />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
