

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}
function wireUp() {
    document.querySelector('.status.remote').addEventListener('click',(e)=>{
        e.preventDefault();
        e.stopPropagation();
        document.querySelector('#status').value = 'remote';
        document.querySelector('.status.remote').classList.add('selected');
        document.querySelector('.status.leave').classList.remove('selected');
    });

    document.querySelector('.status.leave').addEventListener('click',(e)=>{
        e.preventDefault();
        e.stopPropagation();
        document.querySelector('#status').value = 'leave';
        document.querySelector('.status.leave').classList.add('selected');
        document.querySelector('.status.remote').classList.remove('selected');
    });
    let uk = getQueryVariable('uk');
    if (!!uk) {
        document.getElementById('uk').value = uk;
    }
}
wireUp();

function submitForm() {
    let feedBackContainer = document.getElementById("feedback");

    let uk = document.getElementById("uk").value;
    let status = document.getElementById("status").value;
   

    let _data = JSON.stringify({
        "uk": uk.trim(),
        "status": status.trim(),
    
    });

    let API_URL = "http://staywoke.v4.iviva.cloud/Lucy/UserStatus/users/" + uk.trim();
    let API_Key = "SC:staywoke:529c20cd6c187259";

    fetch(API_URL, {
        method: "post",
        headers: {
            'Authorization': 'APIKEY ' + API_Key,
            'Content-Type': 'application/json'
        },
        body: _data
    })
        .then((res) => res.json())
        .then(response => {

            if (!response._id) {
                // error
                feedBackContainer.innerHTML = "<span class=\"error\">Ooops! Sorry something went wrong</span>";
            }

            // update local storage
            localStorage.setItem("officeStatus:" + uk, status.trim());
            feedBackContainer.innerHTML = "<span class=\"success\">Thanks. Have a good day!</span>";


        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}
function validateForm() {
    if (!document.getElementById('status').value) {
        alert('Please select either "Remote" or "On Leave". If you are coming into office you will be checked-in automatically');
        return false;
    }
    return true;
}

function saveChanges() {
    let isValid = validateForm();
    let feedBackContainer = document.getElementById("feedback");
    feedBackContainer.innerHTML = "<span class=\"info\">Submitting...</span>";

    if (isValid) {
        // submit form
        submitForm();
    }
    else {
        // show error
        feedBackContainer.innerHTML = "<span class=\"error\"></span>";
    }
}

document.getElementById("submit").addEventListener("click", saveChanges);