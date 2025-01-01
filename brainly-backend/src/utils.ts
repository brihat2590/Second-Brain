export function Random(len:number){
    let options="qwertyuuiopasdfghjklzxcvbnm1234567";
    let ans=''
    for(let i=0;i<len;i++){
        ans+=options[Math.floor((Math.random() * options.length))]
        return ans

    }

}