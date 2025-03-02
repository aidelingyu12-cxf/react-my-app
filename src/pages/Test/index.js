// import RouterBreadcrumbs from "../../components/SideBar/index"
// import ResponsiveAppBar from "../../components/Header/index"
// import MainCard from "../../pages/MainCard/index.js"


// export default function index() {

//   return (
//     <div className="main">
//       <h3>sdfsdfdf</h3>
//     </div>

//   )
// }

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
 
let nameNum = names.reduce((pre,cur)=>{
  console.log(pre);
  console.log(cur);
  if(cur in pre){
    pre[cur]++
  }else{
    pre[cur] = 1 
  }
  return pre
},{})

