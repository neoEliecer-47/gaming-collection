import styles from "./Navbar.module.css";
import { navbarProps } from "../../types";

const Navbar = ({
  titles,
  activeOptionIndex,
  updateOptionIndex,
}: navbarProps) => {
  function handleActiveStack(index: number) {
    updateOptionIndex(index);
  }

  return (
    <nav className={styles.navContainer}>
      <div
        className={styles.stack}
        style={{
          transform: `translateX(${activeOptionIndex * 100}%)`, //moves the stack to the left or right depending on the activeOptionIndex
          width: `calc(90% / ${titles?.length})`, //calculates the width depending on the number of titles
        }}
      />
      {titles?.map((title, index) => (
        <div
          key={index}
          onClick={() => handleActiveStack(index - 1)}
          className={styles.navOption}
        >
          {title}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
