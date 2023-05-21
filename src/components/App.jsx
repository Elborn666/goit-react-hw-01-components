import { Profile } from 'components/Profile/Profile.jsx';
import user from 'components/data/user.json';

import { Statistics } from 'components/Statistics/Statistics.jsx';
import data from 'components/data/data.json';



export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} /> 
        <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
