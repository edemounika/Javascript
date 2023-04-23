import { useContext } from "react";
import UserContext from "../utils/userContext";
const Footer = () => {
  const {user} = useContext(UserContext);
    return(
      <div>
    <h2>Footer</h2>;
    <h4 className="p-8 m-10">This site is Developed by {user.name}-{user.email}</h4>
    
    </div>

  )};
  export default Footer;