import React, { Component } from 'react';
import axios from'axios';
import Employee from '../component/Employee'





class EmployeeContainer extends Component {
 
  constructor(props){
    super(props);
    this.state={
        result:[],
        key_word:'',
       
    }
}
  // When this component mounts, search for the movie "The Matrix"
  
  componentDidMount()
  {
 
    axios.get('https://randomuser.me/api/?results=200&nat=us')
    .then(res=>{
        
        this.setState({result:res.data.results});  
        console.log(this.state.result);      
    }) ;
   
  }

  searchHandler = (e) => {

    this.setState({key_word:e.target.value}) ;
}

searchEmployee = (keyWord) => {
    return x=>{
        return x.name.first.toLowerCase().includes(keyWord.toLowerCase())||x.name.last.toLowerCase().includes(keyWord.toLowerCase()) ||!keyWord;
    }
}



 

  render() {
    return (
       
      <div>
      <form>
          <input type="text"  onChange={this.searchHandler} placeholder="Search by name..." 
          value={this.state.key_word}/>
      </form>
      {this.state.result.filter(this.searchEmployee(this.state.key_word)).map(e=>{
      return (
      <Employee pic={e.picture.thumbnail} firstName={e.name.first} lastName={e.name.last}
      email={e.email} phone={e.phone} dob={e.dob.date} />    
  )
  })
       }
  </div>
                
              )
           
    
  }
}

export default EmployeeContainer;
