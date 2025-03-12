import DataService from "./services/data-service.js";

const service = new DataService();

const studentData = service.getShuffledStudents()

const container = document.getElementById('students-container');

for (let i = 0; i < studentData.length; i++) {

    const student = studentData[i];

    const studentContainer = document.createElement('div');

    studentContainer.classList.add('student-container')

    const nameContainer = document.createElement('h3');

    // nameContainer.style.color = "red";

    const nameNode = document.createTextNode(student.name + ' ' + student.surname)

    nameContainer.appendChild(nameNode)

    const countryContainer = document.createElement('span');

    const countryNode = document.createTextNode('Nazionalità: ' + student.nationality);

    countryContainer.appendChild(countryNode);

    const genderContainer = document.createElement('span');

    const genderNode = document.createTextNode('Genere: ' + student.gender);

    genderContainer.appendChild(genderNode);

    const ageContainer = document.createElement('span');

    const ageNode = document.createTextNode('Età: ' + student.getAge());

    ageContainer.appendChild(ageNode);

    studentContainer.appendChild(nameContainer);

    studentContainer.appendChild(countryContainer);

    studentContainer.appendChild(genderContainer);

    studentContainer.appendChild(ageContainer);

    container.appendChild(studentContainer);
    
}




///TO DO:
//- aggiungere genere => fatto
//- aggiungere eta' => fatto più figo
//- allineare le schede degli studenti a due a due => fatto
//- rendere il sito molto bello per il docente => fatto
//- ordinare gli studenti per ordine alfabetico di nome

