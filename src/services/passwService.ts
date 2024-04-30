export default function generatePass(){
    let password:string = ''
    let characters: string = '1234567890@#$%¨&*(){}abcdefghijlmnopqrstuvxzwyç!'
    let passWordLength:number = 16 

    for(let index = 0; index < passWordLength; index++){
        password+=characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }
    return password
}