import axios from "axios";
import { useEffect, useState } from "react";
import "../../App.css";

export default function UserpageHeroContent() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get("http://localhost:8000/api/users/10");
        const { ...userData } = result.data;
        setUser(userData);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, []);

  //if loading backend info is slow, this will show shortly
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-content-item">
          <img
            className="profile-img"
            src={user.profile_picture_url}
            alt="profile"
          />
        </div>
        <h2 className="hero-content-item">{user.name}</h2>
      </div>
    </section>
  );
}
