import { useContext, createContext } from "react";

const UserInfo = createContext({
  name: "Hyepp",
  id: "HYEPPY98",
  email: "khv0804@gmail.com",
});

function One() {
  const { name, id, email } = useContext(UserInfo);
  return (
    <div>
      <p>{name}</p>
      <p>{id}</p>
      <p>{email}</p>
    </div>
  );
}

const App = () => {
  return <One />;
};
export default App;

// const HelloLicat = () => {
//   return (
//     <UserInfo.Consumer>
//       {(value) => (
//         <div>
//           <input type="text" />
//           <h2>{value.name}</h2>
//           <strong>{`@ ${value.id}`}</strong>
//         </div>
//       )}
//     </UserInfo.Consumer>
//   );
// };
