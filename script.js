document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    const leftContainer = document.querySelector(".left-container");
    const rightContainer = document.querySelector(".right-container");
    const resetBtn = document.getElementById("resetBtn");
  
    // Add event listeners for both mouse and touch events
    items.forEach(function(item) {
      item.addEventListener("dragstart", dragStart);
      item.addEventListener("dragend", dragEnd);
      item.addEventListener("touchstart", dragStart);
      item.addEventListener("touchend", dragEnd);
    });
  
    // Add event listeners for touch events on the right container
    rightContainer.addEventListener("touchmove", dragOver);
    rightContainer.addEventListener("touchenter", dragEnter);
    rightContainer.addEventListener("touchleave", dragLeave);
    rightContainer.addEventListener("touchend", drop);
  
    // Add event listeners for mouse events on the right container
    rightContainer.addEventListener("dragover", dragOver);
    rightContainer.addEventListener("dragenter", dragEnter);
    rightContainer.addEventListener("dragleave", dragLeave);
    rightContainer.addEventListener("drop", drop);
  
    // Reset button click event
    resetBtn.addEventListener("click", reset);
  
    let draggedItem = null;
  
    function dragStart(e) {
      if (e.type === "touchstart") {
        e.preventDefault(); // Prevent touch event default behavior
        draggedItem = this;
        draggedItem.classList.add("dragging");
      } else if (e.type === "dragstart") {
        draggedItem = this;
        draggedItem.classList.add("dragging");
      }
    }
  
    function dragEnd() {
      draggedItem.classList.remove("dragging");
    }
  
    function dragOver(e) {
      e.preventDefault();
    }
  
    function dragEnter() {
      this.classList.add("over");
    }
  
    function dragLeave() {
      this.classList.remove("over");
    }
  
    function drop(e) {
      e.preventDefault();
      this.classList.remove("over");
      const clonedItem = draggedItem.cloneNode(true);
      this.appendChild(clonedItem);
      leftContainer.removeChild(draggedItem);
      this.classList.add("success");
    }
  
    function reset() {
      location.reload();
    }
  });
  