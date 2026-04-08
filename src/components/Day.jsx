function Day({ day, onClick, type }) {
  return (
    <div className={`day ${type}`} onClick={() => onClick(day)}>
      {day}
    </div>
  );
}

export default Day;