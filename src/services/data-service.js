import Student from "../model/student.js";


export default class DataService {

    constructor() {}

    getStudentsData(){
        
        const data = [
            {
                "name": "lorenzo",
                "surname": "puppo",
                "yob": 1995,
                "nationality": "italy",
                "gender": "m",
                "marks": [
                    8,
                    9,
                    10
                ]
            },
            {
                "name": "jan",
                "surname": "stigliani",
                "yob": 2000,
                "nationality": "italy",
                "gender": "m",
                "marks": [
                    7,
                    7,
                    8
                ]
            },
            {
                "name": "giovanni",
                "surname": "sussarellu",
                "yob": 1981,
                "nationality": "italy",
                "gender": "m",
                "marks": [
                    7,
                    6,
                    8
                ]
            },
            {
                "name": "sara",
                "surname": "de prà",
                "yob": 1989,
                "nationality": "italy",
                "gender": "fluid",
                "marks": [
                    9,
                    6,
                    8
                ]
            },
            {
                "name": "jeremias",
                "surname": "cedeno",
                "yob": 2003,
                "nationality": "ecuador",
                "gender": "m",
                "marks": [
                    6,
                    10,
                    7
                ]
            },
            {
                "name": "laura",
                "surname": "mazza",
                "yob": 1984,
                "nationality": "italy",
                "gender": "f",
                "marks": [
                    4,
                    2,
                    6
                ]
            },
            {
                "name": "eusebio",
                "surname": "veizi",
                "yob": 1993,
                "nationality": "albanese",
                "gender": "peanut",
                "marks": [
                    5,
                    7,
                    6
                ]
            },
            {
                "name": "hugo",
                "surname": "martinez",
                "yob": 1994,
                "nationality": "elSalvador",
                "gender": "f",
                "marks": [
                    10,
                    10,
                    8
                ]
            }
        ];

        // const orderdData = this.sortStudentData(data);

        const students = this.createStudentsFromRowData(data)

        return students;

        // const richData = this.addAge(data)

        // return richData;
    }


    getStudentsByName(){
        const students = this.getStudentsData();

        const studentsClone = students.slice();

        studentsClone.sort((s1, s2) => s1.compareByName(s2));

        return studentsClone;
    }

    getStudentsByAge(){
        const students = this.getStudentsData();

        const studentsClone = students.slice();

        studentsClone.sort((s1, s2) => s1.compareByAge(s2));

        return studentsClone;
    }

    getShuffledStudents(){
        const students = this.getStudentsData();

        const studentsClone = students.slice();

        const shuffledStudent = this.shuffleArray(studentsClone);

        return shuffledStudent;
    }


    shuffleArray(array){
        // const newArray = array.slice()
        // newArray.sort(() => Math.random()-0.5);
        // return newArray;
        const cloneArray = array.slice()
        const newArray = []

        while(cloneArray.length > 0){

            const randomIndex = Math.round(Math.random() * (cloneArray.length -1));

            const randomStudent = cloneArray[randomIndex];

            newArray.push(randomStudent);

            cloneArray.splice(randomIndex, 1);

            // const randomStudent = cloneArray.splice(randomIndex, 1)[0];

            // newArray.push(randomStudent);

        }

        return newArray;
    }

    // sortStudentData(data){

    //     data.sort((s1, s2) => {
    //         const name1 = s1.name;
    //         const name2 = s2.name;

    //         return name1.localeCompare(name2);
    //     })

    //     return data;
    // }

    createStudentsFromRowData(data){

        const students = []

        for (let i = 0; i < data.length; i++) {

            const element = data[i];

            const newStudent = new Student(element.name, element.surname, element.yob, element.gender, element.nationality, element.marks)

            students.push(newStudent)
            
        }

        return students;

    }


    // addAge(studentArray){
    //     const newData = studentArray.map(student => {
    //         // const now = new Date();
    //         // const actualYear = now.getFullYear();
    //         // const age = actualYear - student.yob;
    //         // student.age = age;
    //         student.age = this.calculateAge(student.yob);
    //         return student;
    //     })

    //     return newData;
    // }

    // calculateAge(yob){
    //     const now = new Date();
    //     const actualYear = now.getFullYear();
    //     const age = actualYear - yob;
    //     return age;
    // }
}

