function Card({ header, title, body }) {
  return (
    <div className="card text-center">
      <div className="card-header">{header}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="card-text">{body}</div>
      </div>
    </div>
  );
}

export default Card;
