import React from "react"

class Profile extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            userInfo: {
                Name: "Name",
                location: "Location",
            },
            contactInfo: {
                Phone: "1234567890",
                email: "email@example.com"
            }
        };
    }

    setTheState() {
        this.setState({
            userInfo: {
                Name: 'Nani',
                location: 'kakinada',
            },
            contactInfo: {
                Phone: "999999999999",
                email: "user@example.com"
            }
        })
    }

    // React Lifecycle methods
    // componentDidMount()
    // componentDidUpdate()
    // componentWillUnmount()

    render() {

        return (
            <div className="profile">
                <h1>Profile</h1>
                <h1>{this.props.name}</h1>
                <h1>{this.state.userInfo.Name}</h1>
                <h1>{this.state.userInfo.location}</h1>
                <h1>{this.state.contactInfo.Phone}</h1>
                <h1>{this.state.contactInfo.email}</h1>
                <button onClick={() => this.setTheState()}>Update</button>
            </div>
        );
    }

}

export default Profile;