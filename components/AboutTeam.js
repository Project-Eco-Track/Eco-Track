import React from "react";
import "./AboutTeam.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const teamMembers = [
  {
    name: "Akshay",
    position: "CEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://i.ibb.co/FXYp2fp/original-299de2b20afe5a044d4eac7eb4bc2ac8.jpg",
    socialMedia: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/"
    }
  },
  {
    name: "Ariv",
    position: "CEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://i.ibb.co/FXYp2fp/original-299de2b20afe5a044d4eac7eb4bc2ac8.jpg",
    socialMedia: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/"
    }
  },
  {
    name: "Mike",
    position: "CEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://i.ibb.co/FXYp2fp/original-299de2b20afe5a044d4eac7eb4bc2ac8.jpg",
    socialMedia: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/"
    }
  },
  {
    name: "Riya",
    position: "CEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://i.ibb.co/FXYp2fp/original-299de2b20afe5a044d4eac7eb4bc2ac8.jpg",
    socialMedia: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/"
    }
  }
];

const AboutTeam = () => {
  return (
    <div className="about-team">
      <div className="team-header">
        <h2 className="team-title">Our Team</h2>
        <p className="team-description">
          Meet our amazing team of professionals who make things happen.
        </p>
        <button className="styled-button">Learn More</button>
      </div>

      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="member-info">
              <img src={member.image} alt="" className="member-image" />
              <h3 className="member-name">{member.name}</h3>
              <p className="member-position">{member.position}</p>
              <p className="member-description">{member.description}</p>
            </div>
            <div className="social-media-icons">
              <a href={member.socialMedia.twitter}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href={member.socialMedia.linkedin}>
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
