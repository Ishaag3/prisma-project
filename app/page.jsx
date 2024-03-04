// import prisma from "@/lib/prisma"
// import info from "./info/page";
// import Data from "@/app/components/data";
// import  { GetServerSideProps } from "next";
// import addPost from "./add-post/page";
// import Link from "next/link";
// import Post from "@/app/components/post";


// async function getName(){
//   const name = await  prisma.User.findMany();
//   console.log(name);
//   return name;
// }

// async function getPosts(){
//   const posts = await prisma.post.findMany({
//     include:{
//       author:{
//         select :{name: true}
//       }
//     }
//   })
//   return posts;
// }
// export default async function Home(){
//   const userNames =await getName();
//   const posts = await getPosts();
//   //console.log(posts);
//   // console.log(userNames)
//   return (

//   <div>
//     <h1>THIS IS OUR FIRST POSTGRES PROJECT!!!</h1>
//     <Link href={'/add-post'}>ADD POST</Link>
//     {
//       userNames.map((items,index)=>{
//         {/* console.log(typeof items); */}
//         return (<info  
//         key={index} 
//         name={items.name} 
//         id={items.id}/>);
//       })
//     }
//     {/*these 2 functions are for getting the data from bacend or database */}
//     {
//       userNames.map((use)=>{
//         {/* console.log(typeof items); */}
//         return (<Data  
//         key={use.id} 
//         name={use.name} 
//         id={use.id}
//         />
//         )
//       })
//     }
//     {
//       posts.map((post)=>{
//         return (
//           <Post
//           key={post.id} 
//           authorName={post.author.name} 
//           id={post.id}
//           title={post.title}
//           content={post.content}
//           />
//           )
//       })
//     }
//     {/* <info name={userNames[0].name} id={userNames}/> */}
//   </div>
  
//   )
// }


import Navbar from "./components/navbar"

export default function Home(){
  return(
    <main>
      <Navbar />
    </main>
  )
}