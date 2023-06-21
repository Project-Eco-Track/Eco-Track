import React from "react";
import "./AboutTeam.scss";
import TeamCard from "./TeamCard";

const teamMembers = [
  {
    name: "Akshay",
    position: "CEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./images/profile.jpg",
    illustration: "https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454628-2918517.png",
    socialMedia: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      instagram: "https://instagram.com/"
    },
  },
  {
    name: "Ariv",
    position: "CEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/profile.jpg",
    illustration: "https://cdni.iconscout.com/illustration/premium/thumb/front-end-developer-doing-web-designing-4487948-3722636.png",
    socialMedia: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      instagram: "https://instagram.com/"
    },
  },
  {
    name: "Mike",
    position: "CEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/profile.jpg",
    illustration: "https://cdni.iconscout.com/illustration/premium/thumb/back-end-developer-working-on-a-laptop-6765194-5607779.png",
    socialMedia: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      instagram: "https://instagram.com/"
    },
  },
  {
    name: "Riya",
    position: "CEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/profile.jpg",
    illustration: "https://cdni.iconscout.com/illustration/premium/thumb/woman-programmer-working-on-a-new-project-6765192-5607777.png",
    socialMedia: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      instagram: "https://instagram.com/"
    },
  },
];

const AboutTeam: React.FC = () => {
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
          <TeamCard
            key={index}
            id={index}
            name={member.name}
            position={member.position}
            image={member.image}
            description={member.description}
            socialMedia={member.socialMedia}
            illustration={member.illustration}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
