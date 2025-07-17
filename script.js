const materias = [
  // Semestre 1
 { codigo: "40513", nombre: "Física I", creditos: 3, semestre: 1, requisitos: [] },
 { codigo: "40514", nombre: "Cálculo I", creditos: 3, semestre: 1, requisitos: [] },
 { codigo: "40515", nombre: "Química General I", creditos: 3, semestre: 1, requisitos: [] },
 { codigo: "40516", nombre: "Laboratorio de Química General I", creditos: 2, semestre: 1, requisitos: [] },
 { codigo: "23423", nombre: "Cultura Física y Deportiva", creditos: 1, semestre: 1, requisitos: [] },
 { codigo: "29205", nombre: "Cátedra UIS", creditos: 1, semestre: 1, requisitos: [] },
 { codigo: "23427", nombre: "Taller de Lenguaje", creditos: 3, semestre: 1, requisitos: [] },

 // Semestre 2
 { codigo: "40517", nombre: "Física II", creditos: 3, semestre: 2, requisitos: ["40513"] },
 { codigo: "40518", nombre: "Cálculo II", creditos: 3, semestre: 2, requisitos: ["40514"] },
 { codigo: "40519", nombre: "Álgebra Lineal", creditos: 3, semestre: 2, requisitos: [] },
 { codigo: "40520", nombre: "Química General II", creditos: 3, semestre: 2, requisitos: ["40515"] },
 { codigo: "40521", nombre: "Laboratorio de Química General II", creditos: 2, semestre: 2, requisitos: ["40515", "40516"] },
 { codigo: "40555", nombre: "Inglés I", creditos: 2, semestre: 2, requisitos: [] },

 // Semestre 3
 { codigo: "40522", nombre: "Física III", creditos: 3, semestre: 3, requisitos: ["40517"] },
 { codigo: "40523", nombre: "Cálculo III", creditos: 3, semestre: 3, requisitos: ["40518"] },
 { codigo: "40524", nombre: "Fisicoquímica I", creditos: 3, semestre: 3, requisitos: ["40518"] },
 { codigo: "40525", nombre: "Química Analítica I", creditos: 3, semestre: 3, requisitos: ["40520"] },
 { codigo: "40526", nombre: "Laboratorio de Química Analítica I", creditos: 2, semestre: 3, requisitos: ["40520"] },
 { codigo: "40556", nombre: "Inglés II", creditos: 2, semestre: 3, requisitos: ["40555"] },

 // Semestre 4
 { codigo: "40527", nombre: "Química Orgánica I", creditos: 3, semestre: 4, requisitos: ["40517", "40518", "40519", "40520", "40521"] },
 { codigo: "40528", nombre: "Ecuaciones Diferenciales", creditos: 3, semestre: 4, requisitos: ["40523"] },
 { codigo: "40529", nombre: "Fisicoquímica II", creditos: 3, semestre: 4, requisitos: ["40524"] },
 { codigo: "40530", nombre: "Laboratorio de Fisicoquímica I", creditos: 2, semestre: 4, requisitos: ["40524"] },
 { codigo: "40531", nombre: "Química Analítica II", creditos: 3, semestre: 4, requisitos: ["40525"] },
 { codigo: "40557", nombre: "Inglés III", creditos: 2, semestre: 4, requisitos: ["40556"] },

 // Semestre 5
 { codigo: "40532", nombre: "Química Orgánica II", creditos: 3, semestre: 5, requisitos: ["40527"] },
 { codigo: "40533", nombre: "Laboratorio de Química Orgánica I", creditos: 2, semestre: 5, requisitos: ["40527"] },
 { codigo: "40534", nombre: "Química Cuántica", creditos: 3, semestre: 5, requisitos: ["40528"] },
 { codigo: "40535", nombre: "Laboratorio de Fisicoquímica II", creditos: 2, semestre: 5, requisitos: ["40528"] },
 { codigo: "40536", nombre: "Laboratorio de Química Analítica II", creditos: 2, semestre: 5, requisitos: ["40531"] },
 { codigo: "40558", nombre: "Inglés IV", creditos: 2, semestre: 5, requisitos: ["40557"] },
 { codigo: "Cont1", nombre: "Contexto I", creditos: 2, semestre: 5, requisitos: [] },

 // Semestre 6
 { codigo: "40537", nombre: "Química Orgánica III", creditos: 3, semestre: 6, requisitos: ["40532"] },
 { codigo: "40538", nombre: "Laboratorio de Química Orgánica II", creditos: 2, semestre: 6, requisitos: ["40532", "40533"] },
 { codigo: "40539", nombre: "Bioquímica I", creditos: 3, semestre: 6, requisitos: ["40533"] },
 { codigo: "40540", nombre: "Química Inorgánica I", creditos: 3, semestre: 6, requisitos: [] },
 { codigo: "40541", nombre: "Química Analítica III", creditos: 3, semestre: 6, requisitos: ["40530"] },
 { codigo: "40542", nombre: "Laboratorio de Química Analítica III", creditos: 2, semestre: 6, requisitos: ["40530"] },

 // Semestre 7
 { codigo: "40543", nombre: "Diseño de Experimentos", creditos: 3, semestre: 7, requisitos: ["40532", "40533", "40534", "40535", "40536"] },
 { codigo: "40544", nombre: "Bioquímica II", creditos: 3, semestre: 7, requisitos: ["40539"] },
 { codigo: "40545", nombre: "Laboratorio de Bioquímica", creditos: 2, semestre: 7, requisitos: ["40539"] },
 { codigo: "40546", nombre: "Química Inorgánica II", creditos: 3, semestre: 7, requisitos: ["40540"] },
 { codigo: "40547", nombre: "Laboratorio de Química Inorgánica I", creditos: 2, semestre: 7, requisitos: [ "40540"] },
 { codigo: "40548", nombre: "Química Ambiental", creditos: 3, semestre: 7, requisitos: ["40532", "40533", "40534", "40535", "40536"] },

 // Semestre 8
 { codigo: "40549", nombre: "Seminario", creditos: 3, semestre: 8, requisitos: ["40543", "40544", "40545", "40546", "40547", "40548"] },
 { codigo: "40550", nombre: "Química Industrial", creditos: 4, semestre: 8, requisitos: ["40537", "40538", "40539", "40540", "40541", "40542"] },
 { codigo: "40551", nombre: "Laboratorio de Química Industrial", creditos: 2, semestre: 8, requisitos: ["40537", "40538", "40539", "40540", "40541", "40542"] },
 { codigo: "Elec1", nombre: "Electiva Disciplinar I", creditos: 3, semestre: 8, requisitos: [] },
 { codigo: "40552", nombre: "Laboratorio de Química Inorgánica II", creditos: 2, semestre: 8, requisitos: [] },

 // Semestre 9
 { codigo: "40554", nombre: "Trabajo de Grado I", creditos: 3, semestre: 9, requisitos: ["40549"] },
 { codigo: "Elec2", nombre: "Electiva Disciplinar II", creditos: 3, semestre: 9, requisitos: [] },
 { codigo: "Elec3", nombre: "Electiva Disciplinar III", creditos: 3, semestre: 9, requisitos: [] },
 { codigo: "40553", nombre: "Ética Ciudadana y Profesional", creditos: 2, semestre: 9, requisitos: ["40537", "40538", "40539", "40540", "40541", "40542"] },
 { codigo: "Cont2", nombre: "Contexto II", creditos: 2, semestre: 9, requisitos: [] },

 // Semestre 10
 { codigo: "22977", nombre: "Trabajo de Grado II", creditos: 7, semestre: 10, requisitos: ["40554"] },
 { codigo: "Elec4", nombre: "Electiva Disciplinar IV", creditos: 3, semestre: 10, requisitos: [] },
 { codigo: "EleT", nombre: "Electiva Transdisciplinar", creditos: 3, semestre: 10, requisitos: [] },
 { codigo: "Cont3", nombre: "Contexto III", creditos: 2, semestre: 10, requisitos: [] },
];

const aprobadas = new Set();

function crearMalla() {
 const contenedor = document.getElementById('malla');
 const contador = document.getElementById('contador-creditos');
 const semestres = [...new Set(materias.map(m => m.semestre))].sort((a, b) => a - b);

 semestres.forEach(sem => {
   const col = document.createElement('div');
   col.className = 'semestre';
   col.innerHTML = `<h2>Semestre ${sem}</h2>`;

   materias
     .filter(m => m.semestre === sem)
     .forEach(m => {
       const btn = document.createElement('button');
       btn.className = 'materia';
       btn.id = m.codigo;
       btn.innerHTML = `
         <strong>${m.nombre}</strong><br>
         <em>Código: ${m.codigo}<br>
         Créditos: ${m.creditos}</em>
       `;
       btn.addEventListener('click', () => alternarMateria(m.codigo));
       col.appendChild(btn);
     });

   contenedor.appendChild(col);
 });

 actualizarEstadoBotones();
 actualizarContador(); // Inicializa el contador
}

function alternarMateria(codigo) {
 const boton = document.getElementById(codigo);

 if (aprobadas.has(codigo)) {
   aprobadas.delete(codigo);
   boton.classList.remove('aprobada');
 } else {
   aprobadas.add(codigo);
   boton.classList.add('aprobada');
 }

 actualizarEstadoBotones();
 actualizarContador();
}

function actualizarEstadoBotones() {
 materias.forEach(m => {
   const btn = document.getElementById(m.codigo);
   if (!aprobadas.has(m.codigo)) {
     const habilitada = m.requisitos.every(r => aprobadas.has(r));
     btn.disabled = !habilitada;
   } else {
     btn.disabled = false; // mantener habilitado si está aprobado
   }
 });
}

function actualizarContador() {
 const contador = document.getElementById('contador-creditos');
 const total = Array.from(aprobadas)
   .map(cod => materias.find(m => m.codigo === cod)?.creditos || 0)
   .reduce((a, b) => a + b, 0);
 contador.textContent = `Créditos aprobados: ${total}`;
}

window.onload = crearMalla;
