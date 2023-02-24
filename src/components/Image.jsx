import moi from "../moi.png";
import "./Image.css";
const Image = () => {
  return (
    <div>
      <img class="image" src={moi} alt="me" />
    </div>
  );
};

export default Image;
