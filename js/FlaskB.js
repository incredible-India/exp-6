
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and the images
    const addButton1 = document.getElementById("btn1");
    const potassiumIodide = document.getElementById("PotassiumIodide");
    const beaker5ml = document.getElementById("beaker5ml");
    const conicalflaskA = document.getElementById("conicalflaskA");

    // Function to reset the position and rotation of elements
    function resetElements() {
        potassiumIodide.style.top = "";
        potassiumIodide.style.right = "";
        potassiumIodide.style.transform = "";

        beaker5ml.style.top = "";
        beaker5ml.style.right = "";
        beaker5ml.style.transform = "";

        conicalflaskA.style.top = "";
        conicalflaskA.style.right = "";
        conicalflaskA.style.transform = "";
    }

    // Add a click event listener to btn1
    addButton1.addEventListener("click", function () {
        // Apply CSS transitions for smooth animation
        potassiumIodide.style.transition = "all 1s ease-in-out";

        // Move potassiumIodide to top 55% and right 75%
        potassiumIodide.style.top = "50%";
        potassiumIodide.style.right = "73%";

        // Rotate potassiumIodide 90 degrees to the right
        potassiumIodide.style.transform = "rotate(105deg)";

        // Use setTimeout to reset the image position after 2 seconds (adjust as needed)
        setTimeout(function () {
            resetElements();
        }, 2000); // 2000 milliseconds (2 seconds) delay before resetting

        // After a delay, start the animation for beaker10ml
        setTimeout(function () {
            // Apply CSS transitions for smooth animation
            beaker5ml.style.transition = "all 1s ease-in-out";

            // Move beaker5ml towards conicalflaskB
            beaker5ml.style.top = "55%";
            beaker5ml.style.right = "92%";

            // Rotate beaker5ml 105 degrees to the right
            beaker5ml.style.transform = "rotate(105deg)";

            // Use setTimeout to reset the positions after 2 seconds (adjust as needed)
            setTimeout(function () {
                resetElements();

            }, 2000); // 2000 milliseconds (2 seconds) delay before resetting
        }, 3000); // This will start beaker5ml animation after a 3-second delay
    });
});
// #######btn2########

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and the images
    const addButton2 = document.getElementById("btn2");
    const sulphuricAcid = document.getElementById("sulphuricAcid");
    const beaker10ml = document.getElementById("beaker10ml");

    // Function to reset the position and rotation of elements
    function resetElements() {
        sulphuricAcid.style.top = "";
        sulphuricAcid.style.right = "";
        sulphuricAcid.style.transform = "";

        beaker10ml.style.top = "";
        beaker10ml.style.right = "";
        beaker10ml.style.transform = "";
    }

    // Add a click event listener to btn2
    addButton2.addEventListener("click", function () {
        // Apply CSS transitions for smooth animation
        sulphuricAcid.style.transition = "all 1s ease-in-out";

        // Move sulphuricAcid to top 55% and right 65%
        sulphuricAcid.style.top = "50%";
        sulphuricAcid.style.right = "70%";

        // Rotate sulphuricAcid 55 degrees to the right
        sulphuricAcid.style.transform = "rotate(105deg)";

        // Use setTimeout to reset the image position after 2 seconds (adjust as needed)
        setTimeout(function () {
            resetElements();
        }, 2000); // 2000 milliseconds (2 seconds) delay before resetting

        // After a delay, start the animation for beaker10ml
        setTimeout(function () {
            // Apply CSS transitions for smooth animation
            beaker10ml.style.transition = "all 1s ease-in-out";

            // Move beaker10ml towards the desired position
            beaker10ml.style.top = "55%";
            beaker10ml.style.right = "91.5%";
            // Rotate beaker10ml 105 degrees to the right
            beaker10ml.style.transform = "rotate(105deg)";

            // Use setTimeout to reset the positions after 2 seconds (adjust as needed)
            setTimeout(function () {
                resetElements();
            }, 2000); // 2000 milliseconds (2 seconds) delay before resetting
        }, 3000); // This will start beaker10ml animation after a 3-second delay
    });
});
// #########btn3#########
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and the images
    const addButton3 = document.getElementById("btn3");
    const water = document.getElementById("water");
    const beaker10ml = document.getElementById("beaker10ml");

    // Function to reset the position and rotation of elements
    function resetElements() {
        water.style.top = "";
        water.style.right = "";
        water.style.transform = "";

        beaker10ml.style.top = "";
        beaker10ml.style.right = "";
        beaker10ml.style.transform = "";
    }

    // Add a click event listener to btn3
    addButton3.addEventListener("click", function () {
        // Apply CSS transitions for smooth animation
        water.style.transition = "all 1s ease-in-out";

        // Move water to top 50% and right 70%
        water.style.top = "48%";
        water.style.right = "60%";

        // Rotate water 105 degrees to the right
        water.style.transform = "rotate(105deg)";

        // Use setTimeout to reset the image position after 2 seconds (adjust as needed)
        setTimeout(function () {
            resetElements();
        }, 2000); // 2000 milliseconds (2 seconds) delay before resetting

        // After a delay, start the animation for beaker10ml
        setTimeout(function () {
            // Apply CSS transitions for smooth animation
            beaker10ml.style.transition = "all 1s ease-in-out";

            // Move beaker10ml towards the desired position
            beaker10ml.style.top = "55%";
            beaker10ml.style.right = "91%";

            // Rotate beaker10ml 105 degrees to the right
            beaker10ml.style.transform = "rotate(105deg)";

            // Use setTimeout to reset the positions after 2 seconds (adjust as needed)
            setTimeout(function () {
                resetElements();
            }, 2000); // 2000 milliseconds (2 seconds) delay before resetting
        }, 3000); // This will start beaker10ml animation after a 3-second delay
    });
});
// ##########btn4#############
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and the images
    const addButton4 = document.getElementById("btn4");
    const starch = document.getElementById("starch");
    const beaker5ml2 = document.getElementById("beaker5ml2");

    // Function to reset the position and rotation of elements
    function resetElements() {
        starch.style.top = "";
        starch.style.right = "";
        starch.style.transform = "";

        beaker5ml2.style.top = "";
        beaker5ml2.style.right = "";
        beaker5ml2.style.transform = "";
    }

    // Add a click event listener to btn4
    addButton4.addEventListener("click", function () {
        // Apply CSS transitions for smooth animation
        starch.style.transition = "all 1s ease-in-out";

        // Move starch to top 50% and right 70%
        starch.style.top = "52%";
        starch.style.right = "62%";

        // Rotate starch 105 degrees to the right
        starch.style.transform = "rotate(105deg)";

        // Use setTimeout to reset the image position after 2 seconds (adjust as needed)
        setTimeout(function () {
            resetElements();
        }, 2000); // 2000 milliseconds (2 seconds) delay before resetting

        // After a delay, start the animation for beaker5ml2
        setTimeout(function () {
            // Apply CSS transitions for smooth animation
            beaker5ml2.style.transition = "all 1s ease-in-out";

            // Move beaker5ml2 towards the desired position
            beaker5ml2.style.top = "55%";
            beaker5ml2.style.right = "92%";

            // Rotate starch 105 degrees to the right
            beaker5ml2.style.transform = "rotate(105deg)";

            // Use setTimeout to reset the positions after 2 seconds (adjust as needed)
            setTimeout(function () {
                resetElements();
            }, 2000); // 2000 milliseconds (2 seconds) delay before resetting
        }, 3000); // This will start beaker5ml2 animation after a 3-second delay
    });
});

// ########btn5########
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and the images
    const addButton5 = document.getElementById("btn5");
    const sodium = document.getElementById("sodium");
    const beaker10ml2 = document.getElementById("beaker10ml2");

    // Function to reset the position and rotation of elements
    function resetElements() {
        sodium.style.top = "";
        sodium.style.right = "";
        sodium.style.transform = "";

        beaker10ml2.style.top = "";
        beaker10ml2.style.right = "";
        beaker10ml2.style.transform = "";
    }

    // Add a click event listener to btn5
    addButton5.addEventListener("click", function () {
        // Apply CSS transitions for smooth animation
        sodium.style.transition = "all 1s ease-in-out";

        // Move sodium to top 65% and right 58%
        sodium.style.top = "50%";
        sodium.style.right = "61%";

        // Rotate sodium 105 degrees to the right
        sodium.style.transform = "rotate(105deg)";

        // Use setTimeout to reset the image position after a delay (adjust as needed)
        setTimeout(function () {
            resetElements();
        }, 2000); // 2000 milliseconds (2 seconds) delay before resetting

        // After a delay, start the animation for beaker10ml2
        setTimeout(function () {
            // Apply CSS transitions for smooth animation
            beaker10ml2.style.transition = "all 1s ease-in-out";

            // Move beaker10ml2 towards the desired position
            beaker10ml2.style.top = "55%";
            beaker10ml2.style.right = "92.5%";

            // Rotate beaker10ml2 105 degrees to the right
            beaker10ml2.style.transform = "rotate(105deg)";

            // Use setTimeout to reset the positions after a delay (adjust as needed)
            setTimeout(function () {
                resetElements();
            }, 2000); // 2000 milliseconds (2 seconds) delay before resetting
        }, 3000); // This will start beaker10ml2 animation after a 3-second delay
    });

});
// ########btn6########
document.addEventListener("DOMContentLoaded", function () {
    const addButton6 = document.getElementById("btn6");
    // Add a click event listener to btn6
    addButton6.addEventListener("click", function () {
        // Get references to the elements
        const addButton5 = document.getElementById("btn6");
        const hydrogen = document.getElementById("hydrogen");
        const beaker5ml3 = document.getElementById("beaker5ml3");

        // Function to reset the position and rotation of elements
        function resetElements() {
            hydrogen.style.top = "";
            hydrogen.style.right = "";
            hydrogen.style.transform = "";

            beaker5ml3.style.top = "";
            beaker5ml3.style.right = "";
            beaker5ml3.style.transform = "";
        }

        // Apply CSS transitions for smooth animation on hydrogen
        hydrogen.style.transition = "all 1s ease-in-out";

        // Move hydrogen to top 55% and right 65%
        hydrogen.style.top = "48%";
        hydrogen.style.right = "58%";

        // Rotate hydrogen 105 degrees to the right
        hydrogen.style.transform = "rotate(105deg)";

        // Use setTimeout to reset the image position after 2 seconds (adjust as needed)
        setTimeout(function () {
            resetElements();
        }, 2000); // 2000 milliseconds (2 seconds) delay before resetting

        // After a delay, start the animation for beaker5ml3
        setTimeout(function () {
            // Apply CSS transitions for smooth animation on beaker5ml3
            beaker5ml3.style.transition = "all 1s ease-in-out";

            // Move beaker5ml3 towards the desired position
            beaker5ml3.style.top = "55%";
            beaker5ml3.style.right = "92.5%";

            // Rotate beaker5ml3 105 degrees to the right
            beaker5ml3.style.transform = "rotate(105deg)";

            // Use setTimeout to reset the positions after 2 seconds (adjust as needed)
            setTimeout(function () {
                resetElements();
            }, 2000); // 2000 milliseconds (2 seconds) delay before resetting
        }, 3000); // This will start beaker5ml3 animation after a 3-second delay
    });

});

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the button and the header element
    const addButton1 = document.getElementById("btn1");
    const addButton2 = document.getElementById("btn2");
    const addButton3 = document.getElementById("btn3");
    const addButton4 = document.getElementById("btn4");
    const addButton5 = document.getElementById("btn5");
    const addButton6 = document.getElementById("btn6");
    const addButton7 = document.getElementById("btn7");// Add reference for btn8
    const headerText = document.getElementById("headerText1");


    // Add a click event listener to btn1
    addButton1.addEventListener("click", function () {
        headerText.textContent = "INSTRUCTIONS- Measure 10ML of 2.5 molar of 10ml sulphuric acid in a measuring jar and add it into each conical flasks";
    });

    // Add a click event listener to btn2
    addButton2.addEventListener("click", function () {
        headerText.textContent = " INSTRUCTIONS- Measure 85ML of distilled water in measuring jar and pour into conical flasks A to make it 100ml,similarly make each solution 100ml ";
    });
    // Add a click event listener to btn3
    addButton3.addEventListener("click", function () {
        headerText.textContent = "INSTRUCTIONS- Measure 5ml of starch solution in a measuring jar pour it into flask A , repeat the same procedure for the remaining flasks";
    });
    // Add a click event listener to btn4
    addButton4.addEventListener("click", function () {
        headerText.textContent = "INSTRUCTIONS- Take 10ml of 0.05molar sodium thiosulphate and pour it into flask A and repeat same procedure in each flask";
        // Add a click event listener to btn5
        addButton5.addEventListener("click", function () {
            headerText.textContent = "INSTRUCTIONS - Now measure 5ml of 3% hydrogen-peroxide and pour it into flask A";
        });
        // Add a click event listener to btn6
        addButton6.addEventListener("click", function () {
            headerText.textContent = "INSTRUCTIONS - Stir the mixture and imediately start the stop watch";
        });
        // Add a click event listener to btn7
        addButton7.addEventListener("click", function () {
            document.getElementsByClassName('flaska')[0].innerHTML = ` <img src="CONICAL_FLASK_A.png " id="flaskA" alt="Image 1">`
            document.getElementsByClassName('flaskb')[0].innerHTML = ` <img src="./BLUEBEAKER B.png" id="flaskB" alt="Image 2" style=" position: absolute;
top: 66%;

width: 7%;">`
document.getElementsByClassName('clock')[0].style.display = "block"
document.getElementsByClassName('ca')[0].style.display = "none"
document.getElementsByClassName('cb')[0].style.display = "block"
document.getElementsByClassName('cc')[0].style.display = "none"
document.getElementsByClassName('cd')[0].style.display = "none"
            headerText.textContent = "INSTRUCTIONS - Note the time when blue colour appear and repeat the same procedure for each flask ";
        });
    });
});
