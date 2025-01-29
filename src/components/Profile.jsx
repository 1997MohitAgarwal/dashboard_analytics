import React from 'react';

function Profile() {
  const user = {
    name: "Mohit Agarwal",
    email: "user@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, Bokakhat, Assam",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "A passionate developer with a love for learning new technologies and building amazing projects.",
    jobTitle: "Software Engineer",
    company: "Tech Solutions Inc.",
    linkedin: "https://www.linkedin.com/in/mohitagarwal1238/",
    github: "https://github.com/1997MohitAgarwal",
    website: "https://portfolio-56-vercel.app",
    twitter: "@agarwal_mohit",
    birthday: "1997-08-16",
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture">
          <img
            src={user.profilePicture}
            alt="Profile"
          />
        </div>
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="profile-details">
        <div className="details-grid">
          <div className="detail-item">
            <strong>Phone:</strong>
            <p>{user.phone}</p>
          </div>
          <div className="detail-item">
            <strong>Address:</strong>
            <p>{user.address}</p>
          </div>
          <div className="detail-item">
            <strong>Bio:</strong>
            <p>{user.bio}</p>
          </div>
          <div className="detail-item">
            <strong>Job Title:</strong>
            <p>{user.jobTitle}</p>
          </div>
          <div className="detail-item">
            <strong>Company:</strong>
            <p>{user.company}</p>
          </div>
          <div className="detail-item">
            <strong>LinkedIn:</strong>
            <p>{user.linkedin}</p>
          </div>
          <div className="detail-item">
            <strong>GitHub:</strong>
            <p>{user.github}</p>
          </div>
          <div className="detail-item">
            <strong>Website:</strong>
            <p>{user.website}</p>
          </div>
          <div className="detail-item">
            <strong>Twitter:</strong>
            <p>{user.twitter}</p>
          </div>
          <div className="detail-item">
            <strong>Birthday:</strong>
            <p>{user.birthday}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
