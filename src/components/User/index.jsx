import "./User.scss";
import deleteButton from "../../images/deleteButton.svg";

const User = (props) => {
  const { name, email, phone, picture, dobdate, location, onDelete } = props;

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(email);
  };

  return (
    <div className="user">
      <div className="user__title">
        <div className="user__avatar">
          <img src={picture} alt="User Avatar" />
        </div>
        <div className="user__main">
          <h2 className="user__name">{name}</h2>
          <p className="user__email">{email}</p>
          <a href="#" onClick={handleDelete} className="user__delete-button">
            <img
              src={deleteButton}
              alt="Delete"
              style={{ width: "24 px", height: "24px" }}
            />
          </a>
        </div>
      </div>
      <div className="user__info">
        <div className="user__info-row">
          <p className="user__phone">Phone No</p>
          <p className="user__phone-text">{phone}</p>
        </div>
        <div className="user__info-row">
          <p className="user__birthday">Birthday</p>
          <p className="user__birthday-text">{dobdate}</p>
        </div>
        <div className="user__info-row">
          <p className="user__address">Address</p>
          <p className="user__address-text">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
