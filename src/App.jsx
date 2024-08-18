import React from "react";
import { useState } from "react";
import SeeData from "./component/SeeData";

const App = () => {
  const [formData,setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    address: "",
    zipcode: "",
    choose1:"true", 
    choose2: "true", 
    choose3: "true",
    mode: "",
  });
  const [submitted, setSubmitted] = useState(false);


  const changeHandler = (event) => {
    const { name, type, checked, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? (checked ? "true":"false" ): value,
    }));
  };

  const submitHandler=(e)=>{
      e.preventDefault();
      // console.log("entered data");
      // console.log(JSON.stringify(formData, null, 2));
    // let data=JSON.stringify(formData, null, 2)
    setSubmitted(true) // when i click the submit button Set submitted to true on form submit
  }

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Registration Form</h2>
      {!submitted ? (
      <form 
      onSubmit={submitHandler}
     
      className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="fname" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            onChange={changeHandler}
            name="firstname"
            id="fname"
            value={formData.firstname}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="lname" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            onChange={changeHandler}
            name="lastname"
            id="lname"
            value={formData.lastname}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Email"
            onChange={changeHandler}
            name="email"
            id="email"
            value={formData.email}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={changeHandler}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="" disabled>Select your country</option>
            <option value="india">India</option>
            <option value="pakistan">Pakistan</option>
            <option value="shrilanka">Sri Lanka</option>
            <option value="japan">Japan</option>
            <option value="china">China</option>
            <option value="nepal">Nepal</option>
            <option value="Russia">Russia</option>
            <option value="america">America</option>
            <option value="iran">Iran</option>
            <option value="israel">Israel</option>
          </select>
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address</label>
          <textarea
            name="address"
            id="address"
            placeholder="Enter street address"
            value={formData.address}
            onChange={changeHandler}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City Name</label>
          <input
            type="text"
            id="city"
            placeholder="City Name"
            name="city"
            value={formData.city}
            onChange={changeHandler}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
          <input
            type="text"
            id="state"
            placeholder="State Name"
            name="state"
            value={formData.state}
            onChange={changeHandler}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">ZIP Code</label>
          <input
            type="text"
            pattern="[0-9]{6}"
            placeholder="Five digit zip code"
            value={formData.zipcode}
            name="zipcode"
            onChange={changeHandler}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mt-6">
          <span className="block text-sm font-medium text-gray-700">By Email</span>
          <div className="mt-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="choose1"
                id="choose1"
                checked={formData.choose1}
                onChange={changeHandler}
                className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="choose1" className="text-sm font-medium text-gray-700">Comments</label>
            </div>
            <p className="text-sm text-gray-500">Get notified when someone posts a comment on a posting</p>
          </div>

          <div className="mt-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="choose2"
                id="choose2"
                checked={formData.choose2}
                onChange={changeHandler}
                className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="choose2" className="text-sm font-medium text-gray-700">Candidate</label>
            </div>
            <p className="text-sm text-gray-500">Get notified when a candidate applies for a job</p>
          </div>

          <div className="mt-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="choose3"
                id="choose3"
                checked={formData.choose3}
                onChange={changeHandler}
                className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="choose3" className="text-sm font-medium text-gray-700">Offers</label>
            </div>
            <p className="text-sm text-gray-500">Get notified when a candidate accepts or rejects an offer</p>
          </div>
        </div>

        <div className="mt-6">
          <h6 className="text-lg font-semibold text-gray-700">Push Notification</h6>
          <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone</p>

          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                name="mode"
                id="everything"
                value="everything"
                checked={formData.mode === "everything"}
                onChange={changeHandler}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <label htmlFor="everything" className="ml-2 text-sm font-medium text-gray-700">Everything</label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                name="mode"
                id="SameAsEmail"
                value="SameAsEmail"
                checked={formData.mode === "SameAsEmail"}
                onChange={changeHandler}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <label htmlFor="SameAsEmail" className="ml-2 text-sm font-medium text-gray-700">Same as Email</label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                name="mode"
                id="noPushNotification"
                value="noPushNotification"
                checked={formData.mode === "noPushNotification"}
                onChange={changeHandler}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <label htmlFor="noPushNotification" className="ml-2 text-sm font-medium text-gray-700">No Push Notification</label>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
          >
            Submit
          </button>
        </div>

      </form>
     ) : (
      <SeeData data={formData} />
    )}
    </div>
  );
};

export default App;
