import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import './account.css';

function Account() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const validateToken = () => {
      const token = sessionStorage.getItem('token');
      if (!token) {
        alert('Session expired. Please log in again.');
        navigate('/login');
        return false;
      }
      try {
        const { exp } = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        if (exp < currentTime) {
          alert('Your session has expired. Please log in again.');
          sessionStorage.removeItem('token');
          navigate('/login');
          return false;
        }
        return true;
      } catch (error) {
        console.error('Error decoding token:', error);
        sessionStorage.removeItem('token');
        navigate('/login');
        return false;
      }
    };

    const fetchUserData = async () => {
      const isValid = validateToken();
      if (!isValid) return;
      
      const token = sessionStorage.getItem('token');
      
      try {
        // Fetch user data
        const userResponse = await fetch('http://localhost:5001/api/users/account', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = await userResponse.json();
        
        if (userResponse.ok) {
          setUser(userData.user);
          setOrders(userData.orders);
        } else {
          alert('Failed to load user data');
          return;
        }

        // Fetch addresses
        const addressResponse = await fetch('http://localhost:5001/api/addresses', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const addressData = await addressResponse.json();
        
        if (addressResponse.ok) {
          setAddresses(addressData.addresses);
        } else {
          console.error('Failed to load addresses');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="account-page">
      <div className="account-container">
        <h2>My Account</h2>
        <button onClick={handleLogout} className="logout-button">Log out</button>
        
        <div className="account-content">
          <div className="order-history">
            <h3>Order History</h3>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <p key={index}>Order #{order.id}</p>
              ))
            ) : (
              <p>You haven't placed any orders yet.</p>
            )}
          </div>

          <div className="account-details">
            <h3>Account details</h3>
            <p>{user.firstName} {user.lastName}</p>
            <p>{user.country || 'India'}</p>
            <button
              onClick={() => navigate('/account/address')}
              className="view-addresses-button"
            >
              View addresses ({addresses.length})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;