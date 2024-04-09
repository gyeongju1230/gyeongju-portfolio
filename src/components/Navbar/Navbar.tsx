import * as styles from "../Navbar/Navbar.styles";
import { ReactComponent as Logo } from "../../assets/image/Logo.svg";

const Navbar = () => {
  return (
    <styles.Header>
      <styles.Logo href="/">
        <Logo />
      </styles.Logo>

      <styles.Menu>
        <styles.MenuItem>
          <styles.Button>&lt; ABOUT /&gt;</styles.Button>
        </styles.MenuItem>
        <styles.MenuItem>
          <styles.Button>&lt; SKILL /&gt;</styles.Button>
        </styles.MenuItem>
        <styles.MenuItem>
          <styles.Button>&lt; PROJECT /&gt;</styles.Button>
        </styles.MenuItem>
        <styles.MenuItem>
          <styles.Button>&lt; CONTACT /&gt;</styles.Button>
        </styles.MenuItem>
      </styles.Menu>
    </styles.Header>
  );
};

export default Navbar;
