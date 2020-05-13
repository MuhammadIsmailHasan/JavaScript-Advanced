// CARA MEMBUAT OBJECT DG JAVASCRIPT

// 1. object literal
let mahasiswa1 = {
    nama : 'Ismail Object Literal', // adl properti nama, yg isinya nilai
    energi: 100,
    makan: function(porsi) { // ini adl method, yg isinya function
        this.energi += porsi;
        console.log(`Object Literal by ${this.nama}, energi skrg ${this.energi}`); // dg menggunakan string literal (samping angka 1)
    }
}


// 2. function declaration
function Mahasiswa2(nama, energi) {
    // buat object mahasiswa
    let mahasiswa2 = {};
    // properti
    mahasiswa2.nama = nama;
    mahasiswa2.energi = energi;

    mahasiswa2.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Function Makan Declaration by ${this.nama}, energi ${this.energi}`);
    }

    return mahasiswa2;
}
// instansi function object
let ismail = Mahasiswa2('Ismail', 200);


// 3. construktor function
function Mahasiswa3(nama, energi) {
    // properti
    // sebenarnya js membuat object => let this = {}; 
    this.nama = nama;
    this.energi = energi;
    
    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Function Makan Declaration by ${this.nama}, energi ${this.energi}`);
    }

    // dan me-return => return this;
}
let Hasan = new Mahasiswa3('Hasan', 300);


// 4. Object.create()  (dg function declaration)
function Mahasiswa4(nama, energi) {
    // buat object yang inherintance ke object methodMahasiswa4
    // sebenernya js membuat parameter default => Object.create(Mahasiswa4.prototype)
    let mahasiswa4 = Object.create(methodMahasiswa4);

    // properti
    mahasiswa4.nama = nama;
    mahasiswa4.energi = energi;

    return mahasiswa4;
}
// object untuk function declaration mahasiswa4
const methodMahasiswa4 = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Object Makan dr Function Declaration by ${this.nama}, energi ${this.energi}`);
    },
    main: function(jam) {
        this.energi -+ 100;
        console.log(`Object Main dr Function Declaration by ${this.nama}, energi ${this.energi}`);
    }
}
// instansi function object
let lukman = Mahasiswa4('Lukman', 400);


// 5. Prototype (dg constructor function)
function Mahasiswa5(nama, energi){
    // sebenernya js membuat parameter default => Object.create(Mahasiswa4.prototype)
    this.nama = nama;
    this.energi = energi;
}
// mambuat object prototype dari mahasiswa5
Mahasiswa5.prototype.makan = function(porsi){
    this.energi += porsi;
    console.log(`Object prototype Makan dr mahasiswa5 ${this.nama}, energi ${this.energi}`);
}
Mahasiswa5.prototype.tidur = function(jam){
    this.energi = this.energi * jam;
    console.log(`Object prototype Tidur dr mahasiswa5 ${this.nama}, energi ${this.energi}`);
}
let hakim = new Mahasiswa5('Hakim', 500);


// KONSEP CLASS (prototype dalam js)
class Mahasiswa6 {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi){
        this.energi += porsi;
        console.log(`Function Makan dr class Mahasiswa6, Hai ${this.nama}, energi ${this.energi}`);
    }
    tidur(jam){
        this.energi = this.energi * jam;
        console.log(`Function Tidur dr class Mahasiswa6, Hai ${this.nama}, energi ${this.energi}`);
    }
}
let zaenul = new Mahasiswa6('zaenul', 600);