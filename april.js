//happy april fools!
//checks if the current date is the first of april, if it is it will redirect to another page
const date = new Date()
if (date.getDate() == 1 && date.getMonth() == 3) {
    console.log("date is april fools, redirecting");
    document.location.href = "./april.html"
}