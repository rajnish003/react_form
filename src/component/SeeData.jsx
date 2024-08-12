import React from 'react';

const SeeData = ({ data }) => {
    const { 
      firstname, 
      lastname, 
      email, 
      country, 
      address, 
      zipcode, 
      choose1, 
      choose2, 
      choose3, 
      mode 
    } = data;
  return (
    <div className="overflow-x-auto">
      <table className="max-w-5xl divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Zipcode</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comments</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Offers</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Push Notification</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">{firstname}</td>
            <td className="px-6 py-4 whitespace-nowrap">{lastname}</td>
            <td className="px-6 py-4 whitespace-nowrap">{email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{country}</td>
            <td className="px-6 py-4 whitespace-nowrap">{address}</td>
            <td className="px-6 py-4 whitespace-nowrap">{zipcode}</td>
            <td className="px-6 py-4 whitespace-nowrap">{choose1}</td>
            <td className="px-6 py-4 whitespace-nowrap">{choose2}</td>
            <td className="px-6 py-4 whitespace-nowrap">{choose3}</td>
            <td className="px-6 py-4 whitespace-nowrap">{mode}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SeeData;
