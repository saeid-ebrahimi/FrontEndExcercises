function dragStartHandler(event){
    console.log("darg")
    event.dataTransfer.setData("elementId",event.target.id)
    
}
function dropHandler(event){
    console.log("Drop")
    const draggedId = event.dataTransfer.getData("elementId")
    const draggedElement = document.getElementById(draggedId)
    event.target.append(draggedElement)
}
function dragOverHandler(event){
    event.preventDefault() 
}

document.querySelectorAll
//dragged: onDragStart onDrag onDragEnd
// dropped: onDragEnter onDragOver onDrop