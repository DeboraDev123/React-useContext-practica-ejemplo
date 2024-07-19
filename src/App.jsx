import Profiles from "./components/Profiles";
import UserList from "./components/UserList";
import UserState from "./components/users/UserState";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <UserState>
      <div className= "container p-4">
        <div className= "row">
         <div className= "col-md-7">
          <UserList/>
          </div>
          <div className= "col-md-5">
          <Profiles/>
          </div>
        </div>
      </div>
    </UserState>
  );
 }

export default App
