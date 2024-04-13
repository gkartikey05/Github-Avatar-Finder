import axios from "axios";
import { useEffect, useState } from "react";

function useUserList() {
  const [userListState, setUserListState] = useState({
    userList: [],
    isLoading: true,
    UserUrl: "https://api.github.com/users",
  });

  async function downloadUsers() {
    try {
      setUserListState((state) => ({
        ...state,
        isLoading: true,
      }));

      const response = await axios.get(userListState.UserUrl);
      const userResults = response.data;

      const result = userResults.map((userData) => {
        return {
          id: userData.id,
          name: userData.login,
          image: userData.avatar_url,
        };
      });

      console.log("List", result);
      setUserListState((state) => ({
        ...state,
        userList: result,
        isLoading: false,
      }));

    } catch {
      console.log('API server limit reached, please try after sometime!')
    }
  }

  useEffect(() => {
    downloadUsers();
  }, [userListState.UserUrl]);
  return [userListState, setUserListState];
}

export default useUserList
