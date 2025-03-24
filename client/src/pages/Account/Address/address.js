import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './address.css';

const Address = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [formHeading, setFormHeading] = useState("Add Address");
  const [addresses, setAddresses] = useState([]);
  const [currentAddress, setCurrentAddress] = useState({});
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      alert("Please log in to view your addresses.");
      navigate('/login');
      return;
    }
    fetchAddresses();
  }, [token, navigate]);

  const fetchAddresses = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/addresses", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        setAddresses(data.addresses);
      } else {
        const errorMessage = await response.json();
        console.error("Failed to fetch addresses:", errorMessage.message);
        if (errorMessage.message === "Unauthorized") {
          alert("You are not authorized to view these addresses. Please log in again.");
          sessionStorage.removeItem('token');
          navigate('/login');
        } else {
          alert(`Failed to fetch addresses. Error: ${errorMessage.message}`);
        }
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
      alert("An error occurred while fetching addresses.");
    }
  };

  const handleAddAddress = () => {
    setFormVisible(true);
    setFormHeading("Add Address");
    setCurrentAddress({});
  };

  const handleEditAddress = (address) => {
    // Transform backend fields to frontend fields when editing
    const transformedAddress = {
      firstName: address.fullName?.split(' ')[0] || '',
      lastName: address.fullName?.split(' ')[1] || '',
      address1: address.addressLine1 || '',
      address2: address.addressLine2 || '',
      city: address.city || '',
      state: address.state || '',
      postalCode: address.zipCode || '',
      phone: address.phone || '',
      country: address.country || '',
      _id: address._id
    };
    setFormVisible(true);
    setFormHeading("Edit Address");
    setCurrentAddress(transformedAddress);
  };

  const handleDeleteAddress = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/api/addresses/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        setAddresses(addresses.filter((address) => address._id !== id));
        alert("Address deleted successfully.");
      } else {
        const errorMessage = await response.json();
        console.error("Failed to delete address:", errorMessage.message);
        alert(`Failed to delete address. Error: ${errorMessage.message}`);
      }
    } catch (error) {
      console.error("Error deleting address:", error);
      alert("An error occurred while deleting the address.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { firstName, lastName, address1, address2, city, state, postalCode, country, phone } = currentAddress;
    
    // Validate required fields
    if (!firstName || !lastName || !address1 || !city || !state || !postalCode || !country || !phone) {
      alert("Please fill in all required fields.");
      return;
    }
    
    // Transform frontend fields to backend fields
    const transformedData = {
      fullName: `${firstName} ${lastName}`,
      addressLine1: address1,
      addressLine2: address2 || '',
      city,
      state,
      zipCode: postalCode,
      country,
      phone
    };

    const method = formHeading === "Add Address" ? "POST" : "PUT";
    const endpoint = formHeading === "Add Address"
      ? "http://localhost:5001/api/addresses/add"
      : `http://localhost:5001/api/addresses/edit/${currentAddress._id}`;

    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(transformedData),
      });

      if (response.ok) {
        fetchAddresses();
        setFormVisible(false);
        alert(`Address ${formHeading === "Add Address" ? "added" : "updated"} successfully.`);
      } else {
        const errorMessage = await response.json();
        console.error("Failed to save address:", errorMessage.message);
        alert(`Failed to save address. Error: ${errorMessage.message}`);
      }
    } catch (error) {
      console.error("Error saving address:", error);
      alert("An error occurred while saving the address.");
    }
  };

  return (
    <div className="address-page">
      <div className="address-header">
        <h2>Address</h2>
        <button className="add-address-btn" onClick={handleAddAddress}>
          Add Address
        </button>
      </div>

      {!isFormVisible &&
        addresses.map((address) => (
          <div key={address._id} className="address-card">
            <p><strong>{address.fullName}</strong></p>
            <p>{address.addressLine1}</p>
            {address.addressLine2 && <p>{address.addressLine2}</p>}
            <p>{address.city}, {address.state}, {address.zipCode}</p>
            <p>{address.country}</p>
            <p>Phone: {address.phone}</p>
            <div className="address-actions">
              <button onClick={() => handleEditAddress(address)} className="edit-btn">
                Edit
              </button>
              <button onClick={() => handleDeleteAddress(address._id)} className="delete-btn">
                Delete
              </button>
            </div>
          </div>
        ))}

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="address-form">
          <h3>{formHeading}</h3>
          <input
            type="text"
            placeholder="First Name *"
            value={currentAddress.firstName || ""}
            onChange={(e) => setCurrentAddress({ ...currentAddress, firstName: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Last Name *"
            value={currentAddress.lastName || ""}
            onChange={(e) => setCurrentAddress({ ...currentAddress, lastName: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Address Line 1 *"
            value={currentAddress.address1 || ""}
            onChange={(e) => setCurrentAddress({ ...currentAddress, address1: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Address Line 2"
            value={currentAddress.address2 || ""}
            onChange={(e) => setCurrentAddress({ ...currentAddress, address2: e.target.value })}
          />
          <input
            type="text"
            placeholder="City *"
            value={currentAddress.city || ""}
            onChange={(e) => setCurrentAddress({ ...currentAddress, city: e.target.value })}
            required
          />
          <select
            value={currentAddress.state || ""}
            onChange={(e) => setCurrentAddress({ ...currentAddress, state: e.target.value })}
            required
          >
            <option value="">Select State *</option>
            <option value="Delhi">Delhi</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>
          <input
            type="text"
            placeholder="Postal Code *"
            value={currentAddress.postalCode || ""}
            onChange={(e) => setCurrentAddress({ ...currentAddress, postalCode: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Country *"
            value={currentAddress.country || ""}
            onChange={(e) => setCurrentAddress({ ...currentAddress, country: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone *"
            value={currentAddress.phone || ""}
            onChange={(e) => setCurrentAddress({ ...currentAddress, phone: e.target.value })}
            required
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setFormVisible(false)} className="cancel-btn">
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default Address;