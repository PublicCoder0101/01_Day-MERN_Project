document.getElementById("myForm").addEventListener("submit",function(p){
    p.preventDefault();
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value.trim();
    const confirmPassword=document.getElementById("confirmPassword").value.trim();
    const message=document.getElementById("message");

    if(!name || !email || !password || !confirmPassword){
        message.textContent="please fill in all fields"
        message.style.color="red";
        return;
    }
    if(password !==confirmPassword){
        message.textContent="Password don't match.";
        message.style.color="red";
        return;
    }
    message.textContent=`Registation Successfull. welcome ${name}`;
    message.style.color="green";
    document.getElementById("myForm").reset();
});