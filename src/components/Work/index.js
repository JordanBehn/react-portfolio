import './index.css'
import Project from '../Project'
import Puppy from '../../Assets/puppiesscreenshot.png'
import Note from '../../Assets/notetaker.png'
import PWA from '../../Assets/pwa.png'
import Pass from '../../Assets/pwScreenShot.png'
import Read from '../../Assets/readhere.png'
import Weather from '../../Assets/weatherScreenshot2.png'

export default function Work() {
  return (
    <div>
      <h2 class="main">Links to examples of my work </h2>
      <div class="list">
          <Project image={Puppy} text="Basket of Puppies" link="https://basket-of-puppies.herokuapp.com/"/>
          <Project image={Read} link='https://thedreamteam-nubootcamp.github.io/ReadHere/' text='Read Here'/>
          <Project image={PWA} link='http://budget-tracker-jb.herokuapp.com/' text='Budget Tracker'/>
          <Project image={Note} link='https://note-taker-jb.herokuapp.com/' text='Note Taker'/>
          <Project image={Pass} link='https://jordanbehn.github.io/RandomPasswordGenerator/' text='Password Generator'/>
          <Project image={Weather} link='https://jordanbehn.github.io/WeatherDashboard/' text='Weather Dashboard'/>
      </div>

      
    </div>
  );
}
