import React from 'react';
import './Profile_page.css';
import image_kiven from '../image/kiven_img.png';

const ProfilePage = () => {
  function cancel() {
    alert('Cancelled');
    document.querySelectorAll('input').forEach((input) => {
      input.value = '';
    });
  }

  function update() {
    const fullName = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const street = document.getElementById('street').value;
    const state = document.getElementById('state').value;
    const email = document.getElementById('email').value;
    const url = document.getElementById('url').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;

    alert(`Updated Details:\n
      Full Name: ${fullName}\n
      Phone: ${phone}\n
      Street: ${street}\n
      State: ${state}\n
      Email: ${email}\n
      Website URL: ${url}\n
      City: ${city}\n
      Zip Code: ${zip}`);
  }

  return (
    <div className="protein_profilePage_profile">
      <div className="protein_profilePage_img">
        <img src={image_kiven} alt="ops" />
      </div>

      <div className="protein_profilePage_details">
        <h1 id="protein_profilePage_h1">Personal Details</h1>

        <div className="protein_profilePage_box1">
          <label htmlFor="fullname">Full Name</label>
          <br />
          <input type="text" id="fullname" name="fullname" placeholder="Enter full name" />
        </div>

        <div className="protein_profilePage_box2">
          <label htmlFor="phone">Phone</label>
          <br />
          <input type="number" id="phone" name="phone" placeholder="Enter phone number" />
        </div>

        <div className="protein_profilePage_box3">
          <label htmlFor="street">Street</label>
          <br />
          <input type="text" id="street" name="street" placeholder="Enter street" />
        </div>

        <div className="protein_profilePage_box4">
          <label htmlFor="state">State</label>
          <br />
          <input type="text" id="state" name="state" placeholder="Enter state" />
        </div>

        <div className="protein_profilePage_box5">
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" name="email" placeholder="Enter email ID" />
        </div>

        <div className="protein_profilePage_box6">
          <label htmlFor="url">Website URL</label>
          <br />
          <input type="url" id="url" name="url" placeholder="Website URL" />
        </div>

        <div className="protein_profilePage_box7">
          <label htmlFor="city">City</label>
          <br />
          <input type="text" id="city" name="city" placeholder="Enter City" />
        </div>

        <div className="protein_profilePage_box8">
          <label htmlFor="zip">Zip Code</label>
          <br />
          <input type="text" id="zip" name="zip" placeholder="Zip Code" />
        </div>

        <div className="protein_profilePage_b1">
          <button type="button" onClick={cancel}>
            Cancel
          </button>
        </div>
        <div className="protein_profilePage_b2">
          <button type="button" onClick={update}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
