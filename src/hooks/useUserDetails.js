import axios from "axios";
import { useEffect, useState } from "react";

function useUserDetails(username, name) {
  const [userDetails, setUserDetails] = useState({});

  async function downloadUser() {
    try {
      let response;
      if (name) {
        response = await axios.get(`https://api.github.com/users/${name}`);
      } else {
        response = await axios.get(`https://api.github.com/users/${username}`);
      }

      setUserDetails({
        login: response.data.login,
        image: response.data.avatar_url,
        name: response.data.name,
      });
    } catch {
      console.log("Invalid User or Username");
    }
  }

  useEffect(() => {
    downloadUser();
    console.log("UserDetail", userDetails);
  }, [setUserDetails]);

  return [userDetails, setUserDetails];
}

export default useUserDetails;
