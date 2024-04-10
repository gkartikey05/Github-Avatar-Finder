// import axios from "axios";
// import { useEffect, useState } from "react";

// function useUserList() {
//   const [userListState, setUserListState] = useState({
//     userList: [],
//     isLoading: true,
//     userUrl: "https://api.github.com/users",
//     nextUrl: "",
//     prevUrl: "",
//   });

//   async function downloadUser() {
//     setUserListState((state) => ({
//       ...state,
//       isLoading: true,
//     }));

//     const response = await axios.get(userListState.userUrl); // This downloads list of 20 users
//     const userResults = response.data.results; // We get the array of users from the response

//     setUserListState((state) => ({
//       ...state,
//       nextUrl: response.data.next,
//       prevUrl: response.data.previous,
//     }));

//     const userResultPromise = userResults.map((user) =>
//       axios.get(user.url)
//     );

//     // Passing that promise to the axios.all
//     const userData = await axios.all(userResultPromise); // Array of 20 user detailed data

//     // Now iterate on the data of each user
//     const userListResult = userData.map((userData) => {
//       const user = userData.data;
//       return {
//         id: user.id,
//         name: user.name,
//         image: user.sprites.other.dream_world.front_default,
//         types: user.types,
//       };
//     });
//     setUserListState((state) => ({
//       ...state,
//       userList: userListResult,
//       isLoading: false,
//     }));
//   }

//   useEffect(() => {
//     downloadUser();
//   }, [userListState.userUrl]);

//   return [userListState, setUserListState];
// }

// export default useUserList;