export default function TabButton({children, onSelect, isSelected}){
    console.log('APP tabButton executing');
    return (
        <li><button className={isSelected ? "active" : undefined } onClick={onSelect}>{children}</button></li>
    );
}


// cualquiera de las dos funciones realiza la misma accion
// export default function TabButton({children}}){
//     return (
//         <li><button>{props.children}</button></li>
//     );
// }