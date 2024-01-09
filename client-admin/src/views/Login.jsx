import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { submitLogin } from "../store/actions/actionCreator";
import imgSignup from "../assets/images/signup-image.png"
import Swal from "sweetalert2";


export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [input, setInput] = useState({
        email: '',
        password: ''
    })
    const [rememberMe, setRememberMe] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });
    }

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };


    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(
            submitLogin(
                {
                    ...input,
                    rememberMe: rememberMe,
                },
                ({ status }) => {
                    if (status) {
                        navigate("/");
                    }
                }
            )
        );
    };


    useEffect(() => {
    }, [input]);

    return (
        <>
            <section className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure>
                                <img src={imgSignup} alt="sign up image" />
                            </figure>
                        </div>

                        <div className="signin-form">
                            <h2 className="form-title">Sign in</h2>
                            <form onSubmit={handleSubmitForm} className="login-form" id="login-form">
                                <div className="form-group">
                                    <label><span className="zmdi zmdi-email" aria-hidden="true"></span></label>
                                    <input onChange={handleChange}
                                        value={input.email} type="text" name="email" id="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label><i className="zmdi zmdi-lock"></i></label>
                                    <input onChange={handleChange}
                                        value={input.password} type="password" name="password" id="password" placeholder="Password"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="checkbox"
                                        name="remember-me"
                                        id="remember-me"
                                        className="agree-term"
                                        checked={rememberMe}
                                        onChange={handleRememberMeChange}
                                    />
                                    <label className="label-agree-term">
                                        <span></span>Remember me
                                    </label>
                                </div>

                                <div className="form-group form-button">
                                    <button
                                        className="form-submit">login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}