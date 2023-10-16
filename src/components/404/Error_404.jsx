import "./style.css";
import img_404 from "../../assets/404_images/404.png";
import cloud from "../../assets/404_images/404_cloud.png";
import { Link } from "react-router-dom";

const Error_404 = () => {
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
          <div className="bullshit__info">
            Убедитесь, что вы ввели правильный URL, или нажмите кнопку ниже,
            чтобы вернуться на главную страницу.
          </div>
          <Link to={`/`} className="bullshit__return-home">
            Назад
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error_404;
