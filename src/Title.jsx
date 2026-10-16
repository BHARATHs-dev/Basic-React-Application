// import { useEffect } from "react";
// function Title({count}) {
//     console.log('Title rendered');
//     useEffect(() => {
//         document.title = `clicked ${count} times`;
//     }, [count]);
//     return <h1>{count}</h1>;
// }
// export default Title;

const array = [1, 2, 3, 4, 5];
const formattedObject = {
    data: array,
    status: array.length > 0 ? 200 : 400
    
};
export default formattedObject;