import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import profile from "../images/profile.jpg"; // just for testing purposes

interface Props {
  // Move this to a types file later
  id: number;
  name: string;
  image: string;
  illustration:string;
  position?: string;
  description: string;
  socialMedia: {
    twitter: string;
    linkedin: string;
    github: string ;
    instagram: string;
  };
}
const TeamCard: React.FC<Props> = ({
  id,
  name,
  image,
  position,
  description,
  socialMedia,
  illustration
}) => {
  return (
    <div className="member-card" key={id}>
      <div className="member-container">
        <div className="member-info">
          <Image // Next Image component for better performance
            src={profile}
            alt={name}
            className="member-image"
            width={300}
            height={300}
          />

          <h3 className="member-name">{name}</h3>
          <p className="member-position">{position}</p>

          <Image 
            src={illustration}
            alt={name}
            className="illustration-image"
            width={300}
            height={300}
          />
          <p className="member-description">{description}</p>
        </div>

        <div className="social-media-icons">
          <Link href={socialMedia.twitter} target="_blank">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href={socialMedia.linkedin} target="_blank">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link href={socialMedia.github} target="_blank">
            <i className="fab fa-github"></i>
          </Link>
          <Link href={socialMedia.instagram} target="_blank">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
