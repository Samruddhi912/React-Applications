import image from "./assets/Profile.jpg"
function ProfilePic(){
    const handleClickimg=(e)=>e.target.style.display="none";
    return(<img className="imageUrl" onClick={(e)=>{handleClickimg(e)}} src={image}></img>);
}
export default ProfilePic