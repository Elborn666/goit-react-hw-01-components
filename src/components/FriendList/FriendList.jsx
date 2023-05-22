import PropTypes from 'prop-types';
// import css from './FriendList.css';


export const FriendList = ({ friends }) => {
  return <ul className="friend-list">
  {friends.map(({ id, avatar, name, isOnline }) => (
    <li className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  ))}
  </ul>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;