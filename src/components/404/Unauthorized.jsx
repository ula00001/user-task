import "./style.css";
import img_404 from "../../assets/404_images/404.png";
import cloud from "../../assets/404_images/404_cloud.png";

const Unauthorized = () => {
  return (
    <div className="wscn-http404-container">
      <div className="wscn-http404">
        <div className="pic-404">
          <img className="pic-404__parent" src={img_404} alt="404" />
          <img className="pic-404__child left" src={cloud} alt="404" />
          <img className="pic-404__child mid" src={cloud} alt="404" />
          <img className="pic-404__child right" src={cloud} alt="404" />
        </div>
        <div className="bullshit">
          <div className="bullshit__oops">УПС!</div>
          <div className="bullshit__info">НЕТ ДОСТУПА</div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
