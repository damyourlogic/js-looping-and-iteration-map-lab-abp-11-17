// Code your solution in this file.
functionlowerCaseArray(array){
  return array.map(function(e){
    return e.toLowerCase()
  })
  
}

function nameToAttributes(names){
  names.map(function(name){

    let fName = name.split("")[0]
    let lName - name.split("")[1]
    return {fName, lastName: lName}
  })
}