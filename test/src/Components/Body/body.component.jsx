import Home from './Home/home.component';
import Profile from './Profile/profile.component';

const Body = (props) => {
        return (
                <div>
                        <Home data={props.data}></Home>
                        <Profile data={props.data}></Profile>
                </div>
        );
};

export default Body;