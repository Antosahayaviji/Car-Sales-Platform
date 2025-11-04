
    let currentImage = 1; // To keep track of which image is currently displayed

    function changeImage() {
        const carImage = document.getElementById('carImage');

        if (currentImage === 1) {
            carImage.src = 'BMW 2.jpg'; // Replace with the path to your second image
            currentImage = 2;
        } else if (currentImage === 2) {
            carImage.src = 'Tata.jpg';
            currentImage = 3;
        }
        else if (currentImage === 3) {
            carImage.src = 'Kia.jpg';
            currentImage = 4;
        }
        else if (currentImage === 4) {
            carImage.src = 'Audi1.jpg';
            currentImage = 5;
        }
        else if (currentImage === 5) {
            carImage.src = 'Honda.jpg';
            currentImage = 6;
        }
        else if (currentImage === 6) {
            carImage.src = 'Mahindra.jpg';
            currentImage = 7;
        }
        
        else {
            carImage.src = 'BMW Used.jpg'; // Replace with the path to your first image
            currentImage = 1;
        }
    }
//EMI Calculator
function Calculate() {
 const amount = document.querySelector("#amount").value;
const rate = document.querySelector("#rate").value;
const months = document.querySelector("#months").value;
const interest = 10;
const total = ((amount / months) + interest).toFixed(2);
document.querySelector("#total")
           .innerHTML = "EMI : (₹)" + total;
}


function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
