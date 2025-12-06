//show and hide extra text
function toggleMore(){
    const extra = document.getElementById('extra');
    if(extra){
        extra.style.display = (extra.style.display === 'block') ? 'none' : 'block';
    }
}

//handle feedback from forms
function handleSubmit(event){
    event.preventDefault();
    const form = document.getElementById('feedbackForm');
    const thankyou = document.getElementById('thankyou');

    if(form && thankyou){
        form.style.display = 'none';//hide form 
        thankyou.style.display = 'block';// show thank you
    }
}