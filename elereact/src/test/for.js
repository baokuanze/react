/**
 * for运算 相当于v-for
 *  <li key={index}>{number}</li>
 * key 关键字的最好方法是使用一个字符串来唯一标识其兄弟中的列表项
 */
import React, { Component } from 'react';

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number,index) =>
//       <li key={index}>{number}</li>
//     );
//     return (
//       <ul>{listItems}</ul>
//     );
//   }



// class Test2 extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             numbers : [1, 2, 3, 4, 5]
//         }
//     }
//     render(){
//         return (
//             <div>
//                 <NumberList numbers={[1, 2, 3, 4, 5]} />
//             </div>
//         )
//     }
// }
// export default Test2




function ListItem(props){
    const value = props.value;
    console.log(value,)
    return (
        <li>{value}</li>
    )
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number,index) =>
      <ListItem value={number} key={index} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }


class Test2 extends React.Component{
    render(){
        return (
            <NumberList numbers={[1, 2, 3, 4, 5]}/>
        )
    }
}

export default Test2
