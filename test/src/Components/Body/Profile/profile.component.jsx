const Profile = (props) => {
        return (
                <div>
                        <h1>{props.data.profile.title}</h1>
                        <p>{props.data.profile.desc}</p>
                </div>
        );
};


export default Profile;