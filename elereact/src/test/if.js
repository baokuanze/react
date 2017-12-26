
/**
 * 条件判断 (v-if)
 */
import React, { Component } from 'react';
function LoginButtom(props){
    return (
        <button onClick={props.onClick}>Login</button>
    )
}
function LoginOutButtom(props){
    return (
        <button onClick={props.onClick}>退出</button>
    )
}
function WarningBanner(props){
    if (!props.warn) {
        return null;
    }

    return (
    <div className="warning">
        Warning!
    </div>
    );
}

// 不要在一个类定义的组件中重新定义一个函数
class ChangeRender extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            login:false,
            showWarning:true
        }
    }
    login(e){
        e.preventDefault();
        console.log('login',this);
        setTimeout(()=>{
            this.setState({
                login:false
            })
        },2000);
        this.setState({
            showWarning:true
        })
    }
    loginOut(e){
        e.preventDefault();
        console.log('loginOut',this);
        setTimeout(()=>{
            this.setState({
                login:true
            })
        },2000);
        this.setState({
            showWarning:false
        })
    }
    render(){
        console.log(this.state.login)
        return (
            <div>
                <h1>test</h1>
                <WarningBanner warn={this.state.showWarning} /> 
                {
                    // 用大括号括起来
                    this.state.login?
                    (
                        <LoginButtom onClick={(e)=>this.login(e)}/>
                    ):
                    (
                        <LoginOutButtom onClick={(e)=>this.loginOut(e)}/>
                    )
                }
            </div>
        )
    }
}
export default ChangeRender;




