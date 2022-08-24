import funduLogo from "../../assests/funduB.png";
export const LeftSidePannelWithLogo = () => {
  return (
    <div className="loginLandingLeftSideLogo">
      {/* logo for testing ... */}
      <div className="imageLogo">
        <img
          src={funduLogo}
          alt="logo"
        />
      </div>
    </div>
  );
};
