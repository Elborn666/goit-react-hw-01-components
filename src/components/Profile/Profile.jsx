import PropTypes from 'prop-types';
import prof from './Profile.module.css';
 
 export const Profile = ({username, avatar, tag, location, stats}) => {
    return <div className={prof.profile}>
    <div className={prof.description}>
      <img
        src={avatar}
        alt={username}
        className={prof.avatar}
      />
      <p className={prof.name}>{username}</p>
      <p className={prof.tag}>@{tag}</p>
      <p className={prof.location}>{location}</p>
    </div>
  
    <ul className={prof.stats}>
      <li>
        <span className={prof.label}>Followers</span>
        <span className={prof.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={prof.label}>Views</span>
        <span className={prof.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={prof.label}>Likes</span>
        <span className={prof.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
 }

 Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  };

  export default Profile;