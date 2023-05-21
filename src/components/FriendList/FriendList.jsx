import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem.jsx';
import css from './FriendList.css';


export const FriendList = ({ friends }) => {
    <ul class="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
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