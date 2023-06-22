import React from "react";
import "./AboutTeam.scss";
import TeamCard from "./TeamCard";
import { getTeams } from "@libs/getTeams";

const teamMembers = getTeams();

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
