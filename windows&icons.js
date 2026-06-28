var selectedIcon = undefined
var biggestIndex = 1
var bottomBar = document.querySelector("#bottom")
var rect;
var viewport = {
  bottom: 0,
  left: 0,
  right: 0,
  top: 0
}

dragElement(document.querySelector("#welcome"));
dragElement(document.querySelector("#calculator"));

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;
  var dragHeader = document.getElementById(element.id + "header");

  if (dragHeader) {
    dragHeader.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();

    initialX = e.clientX;
    initialY = e.clientY;

    rect = element.getBoundingClientRect();
    viewport.bottom = window.innerHeight;
    viewport.left = 0;
    viewport.right = window.innerWidth;
    viewport.top = 0;

    document.onmouseup = stopDragging;
    document.onmousemove = onDrag;
  }

  function onDrag(e) {
    e = e || window.event;
    e.preventDefault();

    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;

    var newLeft = element.offsetLeft - currentX;
    var newTop = element.offsetTop - currentY;

    if (newLeft < viewport.left || newTop < viewport.top || newLeft + rect.width > viewport.right || newTop + rect.height + 64 > viewport.bottom) {

    } else {
      element.style.top = (element.offsetTop - currentY) + "px";
      element.style.left = (element.offsetLeft - currentX) + "px";
    }
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function selectIcon(element) {
  element.addEventListener("mousedown", () => {
    element.classList.add("selected");
    
    selectedIcon = element
  })
}

function handleIconTap(element) {
    if (element.classList.contains("selected")) {
        openWindow(element)
    }
}

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}

function handleWindowTap(element) {
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  bottomBar.style.zIndex = biggestIndex + 1;
}

function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  bottomBar.style.zIndex = biggestIndex++;
}

document.querySelectorAll(".closebutton").forEach(function(button) {
    button.addEventListener("click", function() {
        var targetID = this.id.replace("close", "");
        document.querySelector("#" + targetID).style.display = "none";
    });
});

document.querySelectorAll(".selected").forEach(function(button) {
    button.addEventListener("dblclick", function() {
        var targetID = this.id.replace("open", "");
        document.querySelector("#" + targetID).style.display = "flex";
    });
});

document.querySelectorAll(".window").forEach(function(window) {
    addWindowTapHandling(window);
});