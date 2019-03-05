var chocolateBars= [
  'snickers',
  'hundred grand',
  'kitkat',
<<<<<<< HEAD
  'skittles']
  
function addElementToBeginningOfArray(chocolateBars,element){
return [element, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,element){
chocolateBars.unshift(element)
return chocolateBars}

function addElementToEndOfArray(chocolateBars,element){
return[...chocolateBars,element]
}

function destructivelyAddElementToEndOfArray (chocolateBars,element){
  chocolateBars.push(element)
  return chocolateBars
}

function accessElementInArray(chocolateBars,index){
return chocolateBars[index]
}

function destructivelyRemoveElementFromBeginningOfArray (chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars){
return chocolateBars.slice(1)
}
function destructivelyRemoveElementFromEndOfArray (chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}
function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0,chocolateBars.length-1)
}
=======
  'skittles']
>>>>>>> b51f41085d8501a4b10f959db37db64ddcfca50c
