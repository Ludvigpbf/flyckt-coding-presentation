import LogoIcon from "../assets/64x64.svg";
import { LogoProps } from "../interface/LogoInterface";

const Logo: React.FC<LogoProps> = ({ className, onClick }) => {
  return (
    <div className={`logo ${className}`} onClick={onClick}>
      <img src={LogoIcon} alt="Logo" />
    </div>
  );
};

export default Logo;
