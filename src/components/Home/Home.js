import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import './Home.css';

class Home extends Component {

	constructor(props){
		super(props);
		this.state={
			redirectReferrer: false,
			name: '',
			email:''
		}

	}

	//builtin react function
	// get session from session storage
	componentDidMount(){
		/*let data = JSON.parse(sessionStorage.getItem('userData'));
		console.log("componentDidMount()")
		console.log(data)
		this.setState({name: data.userData.name});
		this.setState({email: data.userData.email});*/
		this.getUsersDetails();
	}

	getUsersDetails = _ =>{
		fetch('http://localhost:4000/test/6')
		.then(response => response.json())
		.then(({data}) => {
			console.log(data)
		})
		.catch(err=>console.error(err))
	}

	render() {
	// if session is not present
	// if (sessionStorage.getItem('userData')){
	// 	return (<Redirect to='/home'>);
	// }
    return (
      <div className="row small-up-2 medium-up-3 large-up-4" id="Body">
        <div className="medium-12 columns">
          <h2>Welcome name </h2>
        </div>
      </div>
    );
  }
}

export default Home;
