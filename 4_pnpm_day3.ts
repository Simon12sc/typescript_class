// pnpm needs!!

// 1 project

// cors
// express
// bcrypt

// 2 project

// cors
// express
// bcrypt

// npm stores in different location

// pnpm creates a store and if we have to use it in other projects it will create symlink (shortcuts);
// storage efficient and fast

//typescript convert the ts file to ES3 VERSION by default

// convert to js different version
// tsc index.ts --target es2015

//tsc index.ts --outDir dist

// tsconfig.json
// {
//     "compilerOptions":{
//         "target":"es2015",
//         "outDir":"dist", // js file transpile into dir
//         "noEmitOnError":true,
//         "rootDir":"./src", // which dir ts files should transpile
//         "removeComments":true
//     }
// }

// tsc index.ts will not read  tsconfig.json  so we have to use tsc only
// if there's an error it will not compile because noEmitOnError is true

// tsc --init
