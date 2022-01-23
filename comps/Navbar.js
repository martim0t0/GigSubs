import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>GigSubs</h1>
      </div>
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
