//i declared to language that I know this variable 'a' is capable enough to deal with 2 datatypes 

let a: number | string  = 100;
console.log(a) //100
a = 'abcde';
console.log(a) //'abcde'

//browser -> language??? javascript -> 
//browser -> cannot even understand Typescript -> 

//the only roleplay for TS is to imrpove developer productivity, identify errors earlier
// TS needs a transpiler ( a code converter ) -> this converts TS code into JS 

//i.e when you are wrting TS for a browser (frontend) then eventually due to some xyz step -> 
//we convert it to JS and run over browser 