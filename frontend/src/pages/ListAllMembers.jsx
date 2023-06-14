import React, { useState, useEffect } from "react";
import axios from "axios";

function ListAllMembers() {
  const [deals, setDeals] = useState([]);

  const API_URL = "http://localhost:6001/api/users";

  useEffect(() => {
    async function getDeal() {
      try {
        const { data } = await axios.get(`${API_URL}`);
        setDeals(data);
      } catch (err) {
        console.error(err);
      }
    }
    getDeal();
  }, []);
  return (
    <div className="ListAllMembers">
      {deals.map((deal) => (
        <div key={deal.user_id}>
          <h3>{deal.last_name}</h3>
          <p>{deal.first_name}</p>
        </div>
      ))}
    </div>
  );
}

export default ListAllMembers;
