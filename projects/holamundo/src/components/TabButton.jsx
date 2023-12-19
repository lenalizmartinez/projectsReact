export default function TabButton({children, onSelect}){
    console.log('APP tabButton executing');
    return (
        <li><button onClick={onSelect}>{children}</button></li>
    );
}


// cualquiera de las dos funciones realiza la misma accion
// export default function TabButton({children}}){
//     return (
//         <li><button>{props.children}</button></li>
//     );
// }