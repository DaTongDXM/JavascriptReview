

async function asyTest(){
var count=await getCount()
return count
}
function getCount(){
  return  new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(2)
      }, 2000);
  })
}
asyTest().then(res=>{console.log(res)})