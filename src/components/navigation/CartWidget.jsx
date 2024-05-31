import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function CartWidget() {
  return (
    <>
      <span className="icon-cart">
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>1
      </span>
    </>
  );
}
