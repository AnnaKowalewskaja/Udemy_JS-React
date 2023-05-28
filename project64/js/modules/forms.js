function forms (){

    //FORMS

    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо!',
        faillure: 'Что-то пошло не так!',
    };
    forms.forEach(item => {
        bindPpostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data,
        });

        return await res.json();
    };



    function bindPpostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display:block;
            margin:0 auto`;

            form.insertAdjacentElement('afterend', statusMessage);

            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');



            const formData = new FormData(form);


            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    form.reset();
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.faillure);
                }).finally(() => {
                    form.reset();
                });
        });

    }

    function showThanksModal(message) {
        const prevModalDiaolg = document.querySelector(".modal__dialog");

        prevModalDiaolg.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class='modal__content'>
        <div class='modal__close' data-close>×</div>
        <div class='modal__title'>${message} </div>
        </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDiaolg.classList.add('show');
            prevModalDiaolg.classList.remove('hide');
            closeModal();
        }, 4000);
    }
    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));
    //npx json-server db.json
}

module.exports = forms;
