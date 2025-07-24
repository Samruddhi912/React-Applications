import profilePic from './assets/dog-puppy-on-garden-royalty-free-image-1586966191.avif'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className='card-title'>Samruddhi</h2>
            <p className="card-text">I am a Student and i do coding</p>

        </div>
    );

}
export default Card