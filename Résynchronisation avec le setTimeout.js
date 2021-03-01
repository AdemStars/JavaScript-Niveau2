// FONCTION DE CALLBACK ------------------
const snir =(ARG)=>{                    
console.log(ARG)                        
}
//----------------------------------------


setTimeout(snir,3000,"BTSSNIR"); //ETAPE 1 -- EXECUTE 2

setTimeout(snir,4000,"BONJOUR"); //ETAPE2 --EXECUTE 1