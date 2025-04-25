export const valido = (e) =>{
  e.preventDefaul();
  console.log(e.target.childrean);
  const campos = [...e.target].filter((elemento) => {
    return elemento.hasAttribute("required")
  })

  // recorremos los elementos
  campos.forEach(campos => {
    switch (campos.tagName) {
      case'input':
        console.log(campos.type);
        
        break;
    }

    
    if (campos.value ==='') {
      campos.classList.add("error")
    }
     
     
  })
}

