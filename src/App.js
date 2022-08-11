import './Stylesheets/App.css';
import Header from './Components/Header';
import Card from './Components/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <div className="card-container">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
