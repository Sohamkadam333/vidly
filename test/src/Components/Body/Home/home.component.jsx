const Home = (props) => {
        return (
                <div>
                        <h1>{props.data.home.title}</h1>
                        <p>{props.data.home.desc}</p>
                </div>
        );
};


export default Home;