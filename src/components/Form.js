import { data } from 'autoprefixer';
import React from 'react';

class Form extends React.Component {
  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   submittedData:[]
  // }

  // handleChange = (e) => {
  //   let name = e.target.name
  //   let val = e.target.value;
  //   this.setState({[name]: val})
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
  //   let dataArray = this.state.submittedData.concat(formData)
  //   this.setState({submittedData: dataArray})
  // }

  // listOfSubmissions = () =>{
  //   return this.state.submittedData.map(data => {
  //     return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
  //   })
  // }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  render() {
    console.log(this)
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" name="firstName" onChange={this.handleChange} value={this.props.formData.firstName} />
          <input type="text" name="lastName" onChange={this.handleChange} value={this.props.formData.lastName} />
          <input type="submit"/>
        </form>
        {this.props.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;
