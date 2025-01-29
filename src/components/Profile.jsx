import { useState, useEffect } from "react"

export default function ProfilePage() {
  const [user, setUser] = useState({
    email: "user@example.com",
    name: "Mohit Agarwal",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, Anytown, USA",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Passionate developer and tech enthusiast",
    jobTitle: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    linkedin: "linkedin.com/in/agarwalmohit",
    github: "github.com/1997Agarwal",
    website: "mohit_agarwal.com",
    twitter: "@agarwal_mohit",
    birthday: "1997-08-16",
  })

  const [isEditing, setIsEditing] = useState(false)
  const [editedUser, setEditedUser] = useState({ ...user })

  useEffect(() => {
    const savedUserDetails = localStorage.getItem("userDetails")
    if (savedUserDetails) {
      const parsedUser = JSON.parse(savedUserDetails)
      setUser(parsedUser)
      setEditedUser(parsedUser)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }))
  }

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    setUser(editedUser)
    setIsEditing(false)
    localStorage.setItem("userDetails", JSON.stringify(editedUser))
  }

  return (
    <div className="profile-container max-w-2xl mx-auto p-6">
      <div className="profile-header flex items-center mb-6">
        <img
          src={user.profilePicture || "/placeholder.svg"}
          alt="Profile"
          className="profile-picture w-24 h-24 rounded-full mr-4"
        />
        <div className="profile-info">
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
              className="edit-input mb-2"
            />
          ) : (
            <h2 style={{color:"white"}} className="text-2xl font-bold">{user.name}</h2>
          )}
          <p>{user.email}</p>
        </div>
      </div>

      <div className="profile-details mb-6">
        <div className="details-grid grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Phone", name: "phone" },
            { label: "Address", name: "address" },
            { label: "Bio", name: "bio", type:"textarea" },
            { label: "Job Title", name: "jobTitle" },
            { label: "Company", name: "company" },
            { label: "LinkedIn", name: "linkedin" },
            { label: "GitHub", name: "github" },
            { label: "Website", name: "website" },
            { label: "Twitter", name: "twitter" },
            { label: "Birthday", name: "birthday", type: "date" },
          ].map(({ label, name, type }) => (
            <div className="detail-item" key={name}>
              <strong style={{color:"gray"}}>{label}:</strong>
              {isEditing ? (
                <input
                  type={type?type:"text"}
                  name={name}
                  value={editedUser[name]}
                  onChange={handleChange}
                  className="edit-input w-full"
                />
              ) : (
                <p style={{color:"white"}}>{user[name]}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="profile-actions">
        {isEditing ? (
          <button onClick={handleSaveClick} className="save-btn">
            Save
          </button>
        ) : (
          <button onClick={handleEditClick} className="edit-btn">
            Edit
          </button>
        )}
      </div>
    </div>
  )
}

