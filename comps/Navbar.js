import Link from "next/link";
// import styles from "../styles/components/_header.scss";

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src="../GigSubsLogo.png" alt="GigSubs Logo" />

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/allListings">
        <a>Listings</a>
      </Link>
      <Link href="/news">
        <a>News</a>
      </Link>
      <Link href="/account">
        <a>My Account</a>
      </Link>
      <Link href="/submit-listing">
        <a>Add Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
