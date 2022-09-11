const countdown = document.querySelector(".countdown");
let time = 10;

// using setTimeout to callback 10 times
countdown.innerHTML = time--;
setTimeout(() => {
    countdown.innerHTML = time--;
    setTimeout(() => {
        countdown.innerHTML = time--;
        setTimeout(() => {
            countdown.innerHTML = time--;
            setTimeout(() => {
                countdown.innerHTML = time--;
                setTimeout(() => {
                    countdown.innerHTML = time--;
                    setTimeout(() => {
                        countdown.innerHTML = time--;
                        setTimeout(() => {
                            countdown.innerHTML = time--;
                            setTimeout(() => {
                                countdown.innerHTML = time--;
                                setTimeout(() => {
                                    countdown.innerHTML = time--;
                                    setTimeout(() => {
                                        countdown.innerHTML = time--;
                                        countdown.innerHTML = `Happy Independence Day`
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);