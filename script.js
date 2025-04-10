const toggleBtn = document.getElementById("toggleBtn");
const navMobile = document.querySelector(".navMobile");
const aboutBtn = document.querySelectorAll("#aboutBtn");
const basBtn = document.querySelectorAll("#basBtn");
const modal = document.querySelector(".modal");
const basModal = document.querySelector(".basModal");
const ModalClose = document.querySelectorAll(".ModalClose");
const basModalClose = document.querySelector(".basModalClose");

toggleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    navMobile.classList.toggle("active");

    if (navMobile.classList.contains("active")) {
      toggleBtn.classList.remove("fa-bars");
      toggleBtn.classList.add("fa-xmark"); 
    } else {
      toggleBtn.classList.remove("fa-xmark");
      toggleBtn.classList.add("fa-bars"); 
    }

});

// Close when clicking outside
document.addEventListener("click", function (e) {
    const isClickInsideMenu = navMobile.contains(e.target);
    const isClickOnButton = toggleBtn.contains(e.target);

    if (!isClickInsideMenu && !isClickOnButton && navMobile.classList.contains("active")) {
        navMobile.classList.remove("active");
        // toggleBtn.textContent = 'O';
        toggleBtn.classList.remove("fa-xmark");
        toggleBtn.classList.add("fa-bars");   
    }
});


aboutBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.classList.toggle("aboutActive");
    });
})
basBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        basModal.classList.toggle("basModalActive");
    });
});

ModalClose.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.classList.remove("aboutActive");
    });
});

basModalClose.addEventListener("click", function (e) {
    e.preventDefault();
    basModal.classList.remove("basModalActive");
});



document.querySelector('#sendMessage').addEventListener('click', async (e) => {
    e.preventDefault();
    
    // Get selected services
    const selectedServices = Array.from(document.querySelectorAll('input[name="service"]:checked'))
      .map(input => input.value);
  
    // Get email and description values
    const email = document.querySelector('.emailInput').value.trim();
    const description = document.querySelector('.descInput').value.trim();
  
    const userData = {
      services: selectedServices,
      email,
      description
    };
    
    const url = 'https://enyfs-anti-client.vercel.app/send-proposal'; // Replace with your actual API
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  
      if (response.ok) {
        console.log('Message sent successfully!');
        basModal.classList.remove("basModalActive");
      } else {
        
        console.log('Failed to send message0.', response);
        basModal.classList.remove("basModalActive");
      }
      
    } catch (error) {
      console.error('Error sending message0:', error);
      alert('Something went wrong.');
    }
    basModal.classList.remove("basModalActive");
  });