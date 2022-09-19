let download = document.getElementById('download');
let download1 = document.getElementById('download1');
let download2 = document.getElementById('download2');

download.addEventListener('click', () => {
    window.open('https://www.youtube.com/channel/UCzrG46-uiv5VG0_wa5zOjvA?sub_confirmation=1', "_blank");
    download.style.display = 'none';
    download1.innerText = 'Please Wait Checking Youtube Channel';
    download1.style.display = "flex";
    setTimeout(() => {
        download1.innerText = '5 Sec Automatic Download';
        setTimeout(() => {
            download1.style.display = "none";
            download2.style.display = "flex";
        }, 5000);
    }, 35000);
})
