import logo from './logo.svg';
import './App.css';
import YourDetails from './components/yourDetails';
import AcademicDetails from './components/AcademicDetails';
import Skills from './components/Skills';
import Projects from './components/Project';
import Address from './components/Address';

function App() {
  return (
    <div>

      <div className='container mt-5 text-center'>

        <img style={{ borderRadius: "50%", height: "150px" }} src='https://avatars.githubusercontent.com/u/58031846?v=4' />
        <h3>Meezan Mallick</h3>
        <p>FRONT-END DEVELOPER | FREELANCER | UX UI DESIGNER</p>
        <hr />
      </div>


      <div className="container my-5">
        <nav>
          <div className="nav nav-pills nav-fill" id="nav-tab" role="tablist">

            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Your Details</button>

            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Academic Details</button>

            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Skills</button>

          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">

          <YourDetails />
          <AcademicDetails />
          <Skills />





        </div>
      </div>

      <Projects />
      <Address />



    </div>
    // <h1>meezan</h1>
  );
}

export default App;
