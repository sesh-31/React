// ProfilePicture.jsx
import React from 'react';

function ProfilePicture() {
  const imageUrl = './src/assets/twitwer.jpg';
  const handleClick = (e)=> e.target.style.display = "none";

  return <img onClick={(e)=> handleClick(e)} src={imageUrl} alt="Profile" />;
}

export default ProfilePicture;
