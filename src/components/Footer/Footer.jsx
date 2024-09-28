import React from 'react'
import './footer.css'


function Footer() {
  return (
    <div className="footersection">
                    <p>&copy; 2024 Muranga University Tech Club. All rights reserved. <GithubLink/></p>  
            </div>
  )
}

function GithubLink() {
    return (
        <div class="github-profile-link">
    <a href="https://github.com/kinya-njui" class="github-profile-link">charles kinyanjui</a>
</div>
    )  
}


export default Footer






















// import './footer.css';
 
// function PageFooter () {
//     return (
//         <div className="footer section">
//                  <p>&copy; 2024 Urban Haven Apartments. All rights reserved.</p>
                 
//         </div>
//         )
// }


// // function GithubLink() {
// //     return (
// //         <div class="github-profile-link">
// //     <a href="https://github.com/kinya-njui" class="github-profile-link">charles kinyanjui</a>
// // </div>
// //     )  
// // }

  
  
  
// // function Footer() {
// //     return (
// //         <Footer>
// //             <PageFooter/>
// //             {/* <GithubLink/> */}
// //         </Footer>
// //     )
// // }
  
// export default PageFooter