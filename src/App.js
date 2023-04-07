import './App.css';
import Bio from './profile/components/Bio';
import Fullname from './profile/components/Fullname';
import Profession from './profile/components/Profession';

function App() {
  const FullName = "Aicha Akrout";
  const bio = "Student";
  const profession = "Full Stack Developer";
  const handleName = (x) => alert(x);
  return (
    <div style={{backgroundColor:"#E2D0CE", 
    height:'700px', 
    textAlign:'center', 
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'}}>
      <Fullname FullName = {FullName} handleName={handleName}/>
      <Bio bio = {bio}>
      <img src="https://media.licdn.com/dms/image/D4E03AQGQ50oNQIrg7w/profile-displayphoto-shrink_400_400/0/1680276975900?e=1686182400&v=beta&t=9jbe2D225wgELxvooBViTeQYXSs2hHuIlDrqt_7keDg"></img>
      </Bio>
      <Profession profession={profession}/>
     
    </div>
  );
}

export default App;
