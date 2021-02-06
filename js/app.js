//hide preloader
//window event list 


class UI{
    //load event
    hidePreloader(){
        document.querySelector('.preloader').style.display = "none"
    }
    //nav btn
    showNav(){
        document.querySelector('.nav').classList.toggle('nav--show')
    }
    //video switch
    videoControl(){
        let btn = document.querySelector('.video_switch-btn').style.left == '0px';
        if(btn === true){
            document.querySelector('.video_switch-btn').style.left = '50%';
            document.querySelector('.video_item').pause();
        }
        else{
            document.querySelector('.video_switch-btn').style.left = '0';
            document.querySelector('.video_item').play();
        }
    }
    //check for empty values
    checkEmpty(name, lastName, email){
        let result;
        if(name === '' || lastName === '' || email === ''){
            result = false;
        }
        else{
            result = true;
        }
        return result;
    }

    //feedback
    showFeedBack(text,type){
        let feedback = document.querySelector('.drink-form_feedback');
        feedback.classList.add(type);
        feedback.innerText = text;
        this.removeAlert(type)
    }
    //remove alert
    removeAlert(type){
        setTimeout(() => document.querySelector('.drink-form_feedback').classList.remove(type), 3000)
    }
    //add customer
    addCustomer(customer){
         const div = document.createElement('div');
         div.classList.add('person');
         div.innerHTML = `<img src="
         https://mymodernmet.com/wp/wp-content/uploads/archive/9YPBjDyXBmK6zd25PAM1_gesichtermix14.jpg" 
         alt="person" class="person_thumbnail">
         <h4 class="person_name">${customer.name}</h4>
         <h4 class="person_last-name">${customer.lastName}</h4>`;
         document.querySelector('.drink-card_list').appendChild(div);
    }
    //clear fields
    clearFields(){
        document.querySelector('.input-name').value = '';
        document.querySelector('.input-lastname').value = '';
        document.querySelector('.input-email').value = '';
    }

    showModal(item){
            const modal = document.querySelector('.work-modal');
            const modalItem = document.getElementById('modal_change');
            const source = item.parentElement.children[0].src

            modalItem.src = `${source}`
            modal.classList.add('work-modal-show');
            
        };
    
    closeModal(){
        const modal =  document.querySelector('.work-modal');
        modal.classList.remove('work-modal-show')
    }
    }



class Customer{
    constructor(name, lastName, email){
        this.name = name;
        this.email = email;
        this.lastName = lastName;
    }
}

const eventListeners = () => {
const ui = new UI

//load event
window.addEventListener('load', () => ui.hidePreloader());
//nav btn
document.querySelector('.navBtn').addEventListener('click', () => ui.showNav());
//video switch
document.querySelector('.video_switch').addEventListener('click', () => ui.videoControl())
//submit the form
document.querySelector('.drink-form').addEventListener('submit',
    (event) => {
        event.preventDefault();
        const name = document.querySelector('.input-name').value;
        const lastName = document.querySelector('.input-lastname').value;
        const email = document.querySelector('.input-email').value;

        let value = ui.checkEmpty(name, lastName, email)
        
        if(value){
            let customer = new Customer(name, lastName, email);
            ui.addCustomer(customer);
            ui.showFeedBack('customer added to the list', 'success');
            ui.clearFields()
        }
        else{
            ui.showFeedBack('Some form values are empty', 'error');
        }})
const links = document.querySelectorAll('.work-item-icon');
links.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
        ui.showModal(item)
    })
})

document.querySelector('.work-modal-close').addEventListener('click',
 () => ui.closeModal()
)
} 

eventListeners()
