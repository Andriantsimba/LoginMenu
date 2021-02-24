import { Component } from "react";
import './Login.css';

class Login extends Component{
    render(){
        return(
            <div id="container">
                <div>
                    <h2>Week 3 Assignment</h2>
                    <form>
                        <div id="usr">
                            <label id="lb"><b>Username</b></label>
                            <input type="text" placeholder="Enter your username" id="email"/><br/>
                        </div>
                        <div id="pwd">
                            <label id="lb"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" id="password"/><br/>
                        </div>
                        <div id="btn">
                            <button type="submit" class="btn btn-primary" id="button">Login</button>
                            <br/>
                            <input type="checkbox" id="check" checked />
                            
                            <label id="lb">Remember Me</label>
                        </div>
                        <div id="btn">
                            <button type="reset" class="btn btn-warning" id="cancel">cancel</button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}
export default Login;