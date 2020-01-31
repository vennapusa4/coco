export const getDate=()=>{
    let today = new Date();
    let date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
    return date;
   }