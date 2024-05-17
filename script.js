document.addEventListener('DOMContentLoaded' ,function() => {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault(); 
        //get form values
        const name= document.getElementById('name') .ariaValueMax;
        const email=  document.getElementById('email').ariaValueMax
        const message=  document.getElementById('message').ariaValueMax;
        //Basic validation
        if (name=='' || email=='' || message=='') {
            alert('please fill in all fields.'); 
            return;
        }  
        
        //Here, you would typically send the form data to your server
        console.log('Form submitted,' {name,email,message}); 
        alert('Thank you for your message!'); 
        // Clear form
        document.getElementById('contactForm').reset();
    )};  
)};