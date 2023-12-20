export default function TabButton({ children, isSelected, ...props }) {
  console.log("APP tabButton executing");
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

// cualquiera de las dos funciones realiza la misma accion
// export default function TabButton({children}}){
//     return (
//         <li><button>{props.children}</button></li>
//     );
// }
