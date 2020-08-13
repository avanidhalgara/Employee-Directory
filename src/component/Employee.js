import React, { Component } from 'react';


export default class Employee extends Component {

    constructor(props){
            super(props);
            this.state={
                on:false,
                showPlusButton:true,
                showMinusButton:false,
                tagsInput:'',
                tags:[]
            }
    }
    
   
    

    render()
    {
       
        return(
        <>
        <table class="table">
        
            
  
  <tbody>
    <tr>
     
      <td>
          <img src={this.props.pic} alt="employee  avatar"/>
        </td>
      <td>{this.props.firstName}, 
         {this.props.lastName}
         </td>
         
      <td>
      {this.props.phone}
      </td>
      <td>
      {this.props.email}
      </td>
      <td>
      {this.props.dob}
      </td>
    </tr>
    </tbody>             
           

    </table>

    </>
        )
    }
}