const requestData = (url, success) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            success(JSON.parse(xhr.responseText));
        }
    }
};

const websiteDataProcess = (data) => {
    const websiteLists = document.getElementById("website-lists");
    let html = "";
    for (let i = 0; i < data.length; i++) {
        html += `<a href="${data[i].url}" target="_blank">
                <div>
                    <img src="${data[i].image}">
                    <span>${data[i].title}</span>
                </div>
                <p>${data[i].describe}</p>
            </a>`;
    }
    websiteLists.innerHTML = html;
};

requestData("../database/website.json", websiteDataProcess);
