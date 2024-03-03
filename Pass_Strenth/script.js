document.addEventListener('DOMContentLoaded', () => {
    let pass = document.getElementById("password");
    let msg = document.getElementById("message");
    let str = document.getElementById("strength");

    pass.addEventListener('input', () => {
        if (pass.value.length > 0) {
            msg.style.display = "block";
        } else {
            msg.style.display = "none";
        }

        if (pass.value.length < 4) {
            str.innerHTML = "Weak";
            pass.style.borderColor="#ff5925";
            msg.style.color="#ff5925";
        } else if (pass.value.length >= 4 && pass.value.length < 8) {
            pass.style.borderColor="yellow";
            msg.style.color="yellow";
            str.innerHTML = "Medium";
        } else if (pass.value.length >= 8) {
            pass.style.borderColor="#ff5934";
            msg.style.color="#ff5567";
            str.innerHTML = "Strong";
        }
    });

  

    let form = document.getElementById("myForm");
    form.onsubmit = (event) => {
        event.preventDefault(); 
        console.log("Form was submitted");
    }
});
