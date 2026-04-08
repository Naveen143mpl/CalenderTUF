function Header({ month, year }) {
  return (
    <div className="header">
      <h2>
        {month} {year}
      </h2>
    </div>
  );
}

export default Header;