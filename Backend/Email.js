

function sendEmail(){
    const ActionBtn = document.getElementById('action-send-btn');
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const address = document.getElementById('address').value.trim();
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value.trim();

    if(!name || !mobile || !subject) {
        ActionBtn.disabled = true;
        alert('Please fill in all required fields (Name, Mobile Number, and Subject)');

        setTimeout(function(){
            location.reload();
        }, 100);

        return false
    }

    let params = {
        name: name || 'Not Available',
        mobile: mobile || 'Not Available',
        subject: subject || 'Not Available',
        address: address || 'Not Available',
        date: date || 'Not Available',
        message: message || 'Not Available'
    };

    ActionBtn.disabled = false;

    console.log('Sending email with:', params);

    emailjs.send('service_p8wd58e', 'template_basefdg', params).then(alert('Sending email with:', params));
    console.log(params);

    return true;
};

