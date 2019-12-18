function createCollapsibles() {
    let topContainers = document.getElementsByClassName("topContainer");

    for (let topContainer of topContainers) {
        let bodyContainer = topContainer.children[1]; // Get the bodyContainer, which is the 2nd child of the topContainer

        if (bodyContainer) { // An event listener is only needed if a bodyContainer exists inside the topContainer
            topContainer.addEventListener("click", function () {
                if (bodyContainer.style.maxHeight) { // If the maxHeight string contains something
                    topContainer.children[0].children[3].innerHTML = "+"; // "children[0]" = The div with class="reqContainer". "children[3]" = The div with class "expandAndCollapse"
                    bodyContainer.style.maxHeight = null;
                } else {
                    topContainer.children[0].children[3].innerHTML = "–";
                    bodyContainer.style.maxHeight = bodyContainer.scrollHeight + "px"; // Set maxHeight to the element's scrollHeight (which is a measurement of the height of an element's content, including content not visible on the screen due to overflow.)
                }
            });

            topContainer.style.cursor = "pointer"; // Also style the cursor
        }
    }
}

createCollapsibles();