// * Materi Var, Const, dan Let
// ES 5
var myName = "Zainudin Abdullah";
myName = "yUm1k4";
// console.log(myName);
// !!! var tidak baik karena bisa diakses diluar function atau block scopenya, atau biasa diebut global scope

// ES 6
const myCar = "Audi";
let myBike = "Honda";
// console.log(myBike);

// ---------------------------------
// * Materi String Concat
// ---------------------------------
// ambil element
// const user_place = document.getElementById('user');

// ES 5
// const user_logged = "Tony";
// user_place.innerHTML = "Hi, " + user_logged + " Apa Kabar?";
// console.log(user_logged);

// ES 6
// const user_logged = "Zain";
// user_place.innerHTML = `Hi, ${user_logged} Apa Kabar?`;
// console.log(user_logged);

// ---------------------------------
// * Materi Object Literal
// ---------------------------------

// const cart_items = document.getElementById('cart');

// ES 5
// function addProduct(name, category) {
//     return {
//         name: name,
//         category: category
//     }
// }

// var getProduct = addProduct('Buku', 'Novel');
// console.log(getProduct);


// ES 6
// function addProduct(name, category) {
//     return {
//         name,
//         category
//     }
// }

// var getProduct = addProduct('Buku', 'Novel');
// cart_items.innerHTML = `Product : ${getProduct.name} | Kategori : ${getProduct.category}`;
// console.log(getProduct);

// ---------------------------------
// * Materi Array ForEach
// ---------------------------------
// const skills_holder = document.getElementById('skills');

// // ES6
// const yourSkills = ['HTML', 'CSS', 'JS', 'React', 'Node'];
// yourSkills.push('PHP');
// let parent = '<ul>';

// yourSkills.forEach((skill) => {
//     parent += `<li>${skill}</li>`;
// });

// parent += '</ul>';
// skills_holder.innerHTML = parent;

// ---------------------------------
// * Materi Map dan Filter
// ---------------------------------
// const skills_holder = document.getElementById('skills');

// ES6
// // MAP :
// const yourSkills = ['HTML', 'CSS', 'JS', 'React', 'Node'];
// yourSkills.push('PHP');

// const printSkills = yourSkills.map(skill => {
//     return skill;
// });

// skills_holder.innerHTML = yourSkills;
// FILTER (bisa utk mengambil sebagian data saja):
// const yourSkills = ['HTML', 'CSS', 'JS', 'React', 'Node'];

// const myPrimarySkill = yourSkills.filter(skill => {
//     // tampilkan js saja
//     // return skill === 'JS';
    
//     // kecuali
//     return skill !== 'HTML';
// });

// // console.log(myPrimarySkill);
// skills_holder.innerHTML = myPrimarySkill;


// ---------------------------------
// * Materi Classes
// ---------------------------------
class Siswa {
    constructor(username, password, nama_kelas) {
        this.username = username;
        this.password = password;
        this.nama_kelas = nama_kelas;
    }

    gabung() {
        console.log(`${this.username} telah gabung ke kelas ${this.nama_kelas}`);
    }
    
    hitungMember() {
        console.log('Jumlah member : 10');
    }
}

// let tambahSiswa = new Siswa('Zainudin', '12345', 'XII RPL 3');
// console.log(tambahSiswa);

// ---------------------------------
// * Materi Inheritance
// ---------------------------------
class Langganan extends Siswa {
    constructor(username, paket) {
        super(username); // super = mengambil data dari class parent yaitu Siswa
        this.paket = paket;
    }

    // membuat suatu fungsi bahwa username tst dikelas siswa sudah bergabung di kelas apa
    gabungPaket() {
        console.log(`${this.username} telah berlangganan di paket ${this.paket}`);
    }
}


let tambahLangganan = new Langganan('Zainudin', 'Premium');

// tambahLangganan.gabung();
// tambahLangganan.hitungMember();
tambahLangganan.tambahLangganan();