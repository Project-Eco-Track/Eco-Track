import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import profile from "../images/profile.jpg"; // just for testing purposes

interface Props {
  // Move this to a types file later
  id: number;
  name: string;
  image: string;
  illustration: string;
  position?: string;
  description: string;
  socialMedia: {
    twitter: string;
    linkedin: string;
    github: string;
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
  illustration,
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
          <p className="member-description">
            &quot;<b>{description}&quot;</b>
          </p>
        </div>

        <div className="social-media-icons">
          {socialMedia.twitter !== "" && (
            <Link href={socialMedia.twitter} target="_blank">
              <i className="fab fa-twitter"></i>
            </Link>
          )}

          {socialMedia.linkedin !== "" && (
            <Link href={socialMedia.linkedin} target="_blank">
              <i className="fab fa-linkedin"></i>
            </Link>
          )}

          {socialMedia.github !== "" && (
            <Link href={socialMedia.github} target="_blank">
              <i className="fab fa-github"></i>
            </Link>
          )}

          {socialMedia.instagram !== "" && (
            <Link href={socialMedia.instagram} target="_blank">
              <i className="fab fa-instagram"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
