import one from './assets/1.png'
import two from './assets/2.png'
import three from './assets/3.png'
import four from './assets/4.png'
import d1 from './assets/d1.png'
import d2 from './assets/d2.png'
import d3 from './assets/d3.png'
import d4 from './assets/d4.jpg'
import d5 from './assets/d5.png'

export const USERS = [
    { id: 1, char: one, from: "student", username: "karthi", role: "Developer", email: "example1@gmail.com", img: "https://images.pexels.com/photos/20374107/pexels-photo-20374107/free-photo-of-portrait-of-man.jpeg?auto=compress&cs=tinysrgb&w=600", userId: "1234567890", backgroundImage: "https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=600", country: "India" },
    { id: 2, char: two, from: "student", username: "john_doe", role: "Full stack developer", email: "example2@gmail.com", img: "https://images.pexels.com/photos/20428858/pexels-photo-20428858/free-photo-of-portrait-of-man.jpeg?auto=compress&cs=tinysrgb&w=600", userId: "0987654321", backgroundImage: "https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg?auto=compress&cs=tinysrgb&w=600", country: "USA" },
    { id: 3, char: three, from: "teacher", username: "Murphy", role: "Designer", email: "example3@gmail.com", img: "https://images.pexels.com/photos/20382296/pexels-photo-20382296/free-photo-of-man-in-hat-sitting-by-table.jpeg?auto=compress&cs=tinysrgb&w=600", userId: "9876543210", backgroundImage: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600", country: "Canada" },
    { id: 4, char: four, from: "teacher", username: "alice", role: "Mern stack", email: "example4@gmail.com", img: "https://images.pexels.com/photos/16032245/pexels-photo-16032245/free-photo-of-brunette-in-tshirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600", userId: "4567890123", backgroundImage: "https://images.pexels.com/photos/257699/pexels-photo-257699.jpeg?auto=compress&cs=tinysrgb&w=600", country: "Australia" },
    { id: 5, char: one, from: "student", username: "bob", role: "Front end dev", mail: "example5@gmail.com", img: "https://images.pexels.com/photos/20413739/pexels-photo-20413739/free-photo-of-man-and-woman-holding-hands.jpeg?auto=compress&cs=tinysrgb&w=600", userId: "3210987654", backgroundImage: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600", country: "UK" }
]

export const POSTS = [
    { id: "11", userId: "1", potsImage: d1, likes: "10", postUsername: "karthi", postuserImage: "" },
    { id: "12", userId: "2", potsImage: d2, likes: "15", postUsername: "john_doe", postuserImage: "" },
    { id: "13", userId: "3", potsImage: d3, likes: "8", postUsername: "Murphy", postuserImage: "" },
    { id: "14", userId: "4", potsImage: d4, likes: "20", postUsername: "alice", postuserImage: "" },
    { id: "15", userId: "5", potsImage: d5, likes: "12", postUsername: "bob", postuserImage: "" }
]
