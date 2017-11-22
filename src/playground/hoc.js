import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
<div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
</div>
);

const requireAuthentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
        {props.isAuth ? <WrappedComponent {...props}/>:"please login"}
        
        </div>
    );
};

const AuthInfo=requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuth={true} info="There is some info"/>, document.getElementById('app'));