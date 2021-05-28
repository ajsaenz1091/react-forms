import React from 'react';
import Form from './Form'

class ParentComponent extends React.Component {
    state = {
        firstName: "John",
        lastName: "Henry",
        submittedData:[]
      }

    handleChange = (e) => {
        let name = e.target.name
        let val = e.target.value;
        this.setState({[name]: val})
    }

    handleSubmit = (e) => {
    e.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
    }

    listOfSubmissions = () =>{
        return this.state.submittedData.map((data,idx) => {
            return <div key={idx}><span>{data.firstName}</span> <span>{data.lastName}</span></div>
        })
    }

    // handleFirstNameChange = event => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }

    // handleLastNameChange = event => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }

    render() {
        return (
                <Form
                formData={this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                listOfSubmissions={this.listOfSubmissions}
                />
        )
    }
}

export default ParentComponent;

