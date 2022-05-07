import Users from './Components/Users/Users';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Css/Styles.css';



function App() {
  return (
    <div className='principal'>
      <div className="row">
        <div className="col-sm-10 offset-1 mt-5">
          <div className="card">
          <Users></Users>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
