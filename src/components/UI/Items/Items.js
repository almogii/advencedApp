import Product from "../../Product/Product";
import "./Items.css";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
const Items = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        size="15px"
        variant="dark"
        className="btn-primary button"
        onClick={() => navigate("./cart/")}
      >
        go to cart
      </Button>
      <div className="items">
        {props.productsArray.map((p, index) => {
          return <Product product={p} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Items;
