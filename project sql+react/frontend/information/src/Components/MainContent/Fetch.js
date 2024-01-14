//async function getUrl(url) {
//     try {
//       const res = await fetch(url);
  
//       if (!res.ok) {
//         throw new Error(`HTTP error! Status: ${res.status}`);
//       }
  
//       const connection = await res.json();
//        return connection;
//     } catch (error) {
//       console.log(error);
//     }
//   }
  


//}


export function req(url) {
    return fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("HTTP error");
        }
        return res.json();
      })
      .catch((err) => {
        console.error(err);
        throw err; 
      });
}
  