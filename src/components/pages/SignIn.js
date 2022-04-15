import React from 'react'

function SignIn() {
  return (
    <div className="container">
    <div className="py-4">
      <h1>Registration Page</h1>
      <form>
      <div class="form-group">
          <label for="exampleInputEmail1">Enter Name</label>
          <input
            type="name"
            class="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Enter User Name</label>
          <input
            type="username"
            class="form-control"
            id="exampleInputusername"
            aria-describedby="usernameHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default SignIn