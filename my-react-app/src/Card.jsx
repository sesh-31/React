import profilePic from './assets/twitwer.jpg'
function Card(){
     return(
      <div className="card">
        <img className='card-image' src={profilePic} alt="Profile picture"></img>
        <h2 className='card-title'>Shesh raj Paudel</h2>
        <p className='card-text'>Shesh raj Paudel is a beginner in this  IT field </p>
      </div>
     );
}
export default Card