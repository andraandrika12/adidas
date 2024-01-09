import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerAdmin } from "../store/actions/actionCreator";

export default function Registeradmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [input, setInput] = useState({
    email: '',
    password: '',
    phoneNumber: '',
    address: ''

  })

  const handleFormChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    dispatch(registerAdmin(input, ({ status }) => {
        if (status) {
            navigate("/products");
        }
    }))
}


  useEffect(() => {
  }, [input]);

  return (
    <>
      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="dash-content">
          <div className="overview">
            <div className="title">
              <i className="uil uil-files-landscapes"></i>
              <span className="text">Register (New Admin)</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmitForm}>
          <div className="form-group">
            <input onChange={handleFormChange}
              value={input.email} type="email" name="email"className="form-control" placeholder="Email" />
          </div>
          <div className="form-group ">
            <input onChange={handleFormChange}
              value={input.password} type="password" name="password" className="form-control" placeholder="Password" />
          </div>
          <div className="form-group">
            <input onChange={handleFormChange}
              value={input.phoneNumber} type="text" name="phoneNumber" className="form-control" placeholder="Phone Number" />
          </div>
          <div className="form-group">
            <input onChange={handleFormChange}
              value={input.address} type="text" name="address" className="form-control" placeholder="address" />
          </div>
          <button className="btn btn-dark rounded-pill" id="new-product">
            <a to=""><span className="icon material-symbols-outlined" >Sign Up</span></a>
          </button>
        </form>
      </section>
    </>
  )
}