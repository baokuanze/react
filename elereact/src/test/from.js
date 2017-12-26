import React, { Component } from 'react';
// class FromTest extends React.Component{
//     render(){
//         return (
//             <div>
//                 <from>
//                     <label>
//                         Name: <input type='text' name="name" />
//                     </label>
//                     <input type="submit" value="Submit" />
//                 </from>
//             </div>
//         )
//     }
// }
// export default FromTest


class FromTest extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isGoing: false,
            numberOfGuests: 2
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(e){
        e.preventDefault();
        console.log(e.target.name,'000000000')
        let name = e.target.name;
        let value = e.target.type == 'checkbox'? e.target.checked : e.target.value;
        console.log(value)
        this.setState({
            [name]: value
        });
    }
    render(){
        return (
            <div>
                <form>
                    <label>
                        Is going:
                        <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Number of guests:
                        <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange.bind(this)} />
                    </label>
                </form>
            </div>
        )
    }
}
export default FromTest