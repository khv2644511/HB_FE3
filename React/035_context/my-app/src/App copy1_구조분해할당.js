const App = () => {
  return <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />;
};

const HelloLicat = (props) => {
  console.log(props);
  return (
    <div>
      <h2>{props.value.id}</h2>
      <strong>{props.value.name}</strong>
      <HelloLicatTwo value={{ name: props.value.name, id: props.value.id }} />
    </div>
  );
};

const HelloLicatTwo = (props) => {
  return (
    <div>
      <h2>Two : {props.value.id}</h2>
      <strong>Two : {props.value.name}</strong>
    </div>
  );
};

// const App = () => {
//   return <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />;
// };

// const HelloLicat = ({ value }) => {
// console.log(props);
//   return (
//     <div>
//       <h2>{value.id}</h2>
//       <strong>{value.name}</strong>
//       <HelloLicatTwo value={{ name: value.name, id: value.id }} />
//     </div>
//   );
// };

// const HelloLicatTwo = ({ value }) => {
//   return (
//     <div>
//       <h2>Two : {value.id}</h2>
//       <strong>Two : {value.name}</strong>
//     </div>
//   );
// };

// const App = () => {
//   return <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />;
// };

// const HelloLicat = ({ value: { name, id } }) => {
//   // console.log(props);
//   return (
//     <div>
//       <h2>{id}</h2>
//       <strong>{name}</strong>
//       <HelloLicatTwo value={{ name: name, id: id }} />
//     </div>
//   );
// };

// const HelloLicatTwo = ({ value: { name, id } }) => {
//   return (
//     <div>
//       <h2>Two : {id}</h2>
//       <strong>Two : {name}</strong>
//     </div>
//   );
// };

export default App;
