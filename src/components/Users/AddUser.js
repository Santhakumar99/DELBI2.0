import React from 'react'

const AddUser = () => {


      
  return (
    <div>
        <form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="nametext" aria-describedby="name" />
    {/* <div id="name" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="age" class="form-label">Age</label>
    <input type="number"  maxLength={2} class="form-control" id="agebox" />
  </div>
  <div class="mb-3">
    <label for="address" class="form-label">Address</label>
    <input type="textarea" class="form-control" id="addresstext" aria-describedby="address" />
    {/* <div id="name" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="work" class="form-label">Work</label>
    <input type="text" class="form-control" id="worktext" aria-describedby="work" />
    {/* <div id="name" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="mobile" class="form-label">Mobile</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" maxlength="10" />
    {/* <div id="name" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default AddUser