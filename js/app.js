// დავალება:
// 1. გამოიყენეთ const currentDay = new Date().getDay();
// ცვლადი;   currentDay ცვლადი გვაძლევს კვირის დღეს რიცხვითი სახით 0 - არის კვირა,
//     1 - არის ორშაბათი და ასე შემდეგ.(0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი),
//         დავწეროთ switch სადაც შევამოწმებთ currentDay - ს და 0 ის შემთხვევაში console.log
//         ში გამოვიტანთ სიტყვას - კვირა, 1 ის შემთხვევაში - ორშაბათს და ასე შემდეგ 6 - შაბათი.
// // 2. დაწერეთ for ციკლი, 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i
// 3. დაწერეთ while ციკლი 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i
// 4. დაწერეთ do while ციკლი 0 დან 150 - მდე console.log ში დაბეჭდეთ ინდექსი i
// 5. შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while )
// 1 დან 1000 - მდე ამ მასივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე(i * i);
//  გამოიყენეთ  push მეთოდი

//1

// const currentDay = new Date().getDay();




// switch (currentDay) {
    
//     case 0:
//         console.log(`კვირა`);
//         break;
    
//     case 1:
        
//         console.log(`ორშაბათი`);
//         break;
//     case 2:
//         console.log(`სამშაბათი`);
//         break;
//     case 3:
//         console.log(`ოთხშაბათი`);
//         break;
//     case 4:
//         console.log(`ხუთშაბათი`);
//         break;
//     case 5:
//         console.log(`პარასკევი`);
//         break;
//     case 6:
//         console.log(`შაბათი`);
//         break;
// }


//1

//2
// for (let i = 0; i < 100; i++){

//     console.log(i);
// }

//2

//3

// let i = 0;

// while (i < 50) {
//     console.log(i);
//     i++;

// }

//3


//4


// do {
    
//     console.log(i);
//     i++;
// } while (i < 150);

//4

//5

// const myArr = [];

// let i = 0;

// while (i < 1000) {

// myArr.push(i * i);
//     i++;
// }



// console.log(myArr);


// for (let i = 0; i < 1000; i++) {
    
//     myArr.push(i * i);

// }
// console.log(myArr);



//5






