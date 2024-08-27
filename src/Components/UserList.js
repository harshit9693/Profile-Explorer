// import React from "react";
// import { observer } from "mobx-react-lite";
// import userStore from "../Stores/UserStore";

// const UserList = observer(() => {
//   if (userStore.loading) {
//     return <div>Loading...</div>;
//   }

//   if (userStore.error) {
//     return <div>{userStore.error}</div>;
//   }

//   return (
//     <ul className="user-list">
//       {userStore.paginatedUsers.map((user) => (
//         <li className="user-item" key={user.login.uuid}>
//           {user.name.first} {user.name.last}
//         </li>
//       ))}
//     </ul>
//   );
// });

// export default UserList;
import React from "react";
import { observer } from "mobx-react-lite";
import userStore from "../Stores/UserStore";

// const UserList = observer(() => {
//   return (
//     <div className="user-list-container">
//       {userStore.loading && <p>Loading users...</p>}
//       {userStore.error && <p>{userStore.error}</p>}
//       {!userStore.loading && !userStore.error && (
//         <table className="user-table">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//               <th>Location</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userStore.paginatedUsers.map((user, index) => (
//               <tr key={user.login.uuid}>
//                 <td>{index + 1 + (userStore.currentPage - 1) * userStore.usersPerPage}</td>
//                 <td>{user.name.first}</td>
//                 <td>{user.name.last}</td>
//                 <td>{user.email}</td>
//                 <td>{`${user.location.city}, ${user.location.country}`}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// });

const UserList = observer(() => {
  const { paginatedUsers } = userStore;

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>No</th>
          <th>First Name</th>
          <th>Last Name</th>
            <th>Email</th>
            <th>Location</th>
          {/* Add other columns if needed */}
        </tr>
      </thead>
      <tbody>
        {paginatedUsers.map((user, index) => (
          <tr key={user.login.uuid}>
            <td>{index + 1}</td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
           <td>{user.email}</td>
            <td>{`${user.location.city}, ${user.location.country}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});


export default UserList;
