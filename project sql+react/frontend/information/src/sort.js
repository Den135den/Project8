export function sortMas (arr){
    
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i].id > arr[j].id) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
        }
      }
}