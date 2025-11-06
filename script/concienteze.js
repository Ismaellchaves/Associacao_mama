// ==========================
// MENU MOBILE
// ==========================
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');
const body = document.body;

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('menu-open');
    hamburger.innerHTML = nav.classList.contains('active') ? '✕' : '&#9776;';
});

overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('menu-open');
    hamburger.innerHTML = '&#9776;';
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            nav.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('menu-open');
            hamburger.innerHTML = '&#9776;';
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('menu-open');
        hamburger.innerHTML = '&#9776;';
    }
});

// ==========================
// SELEÇÃO DE DOAÇÕES
// ==========================
const donRadios = document.querySelectorAll('input[name="donType"]');
const alimentoSection = document.getElementById('alimentoSection');
const cabeloSection = document.getElementById('cabeloSection');
const dinheiroSection = document.getElementById('dinheiroSection');

donRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        alimentoSection.classList.add('hidden');
        cabeloSection.classList.add('hidden');
        dinheiroSection.classList.add('hidden');

        if (radio.value === 'alimento') alimentoSection.classList.remove('hidden');
        if (radio.value === 'cabelo') cabeloSection.classList.remove('hidden');
        if (radio.value === 'dinheiro') dinheiroSection.classList.remove('hidden');
    });
});

// ==========================
// CONTROLE DE QUANTIDADE DE ALIMENTOS
// ==========================
document.querySelectorAll('.product').forEach(product => {
    const plusBtn = product.querySelector('.plus');
    const minusBtn = product.querySelector('.minus');
    const quantity = product.querySelector('.quantity-value');

    product.addEventListener('click', e => {
        if (!e.target.classList.contains('plus') && !e.target.classList.contains('minus')) {
            product.classList.toggle('selected');
        }
    });

    if (plusBtn) {
        plusBtn.addEventListener('click', e => {
            e.stopPropagation();
            quantity.textContent = parseInt(quantity.textContent) + 1;
        });
    }

    if (minusBtn) {
        minusBtn.addEventListener('click', e => {
            e.stopPropagation();
            if (parseInt(quantity.textContent) > 1) {
                quantity.textContent = parseInt(quantity.textContent) - 1;
            }
        });
    }
});

// ==========================
// ENVIO PARA WHATSAPP
// ==========================
document.getElementById('sendWhatsapp').addEventListener('click', () => {
    const name = document.getElementById('donorName').value.trim();
    const phone = document.getElementById('donorPhone').value.trim();
    const donType = document.querySelector('input[name="donType"]:checked')?.value;

    if(!name || !phone || !donType){
        alert("Preencha nome, telefone e tipo de doação.");
        return;
    }

    if(donType==='alimento' && getSelectedFoodItems().length===0){
        alert("Selecione pelo menos um alimento.");
        return;
    }

    if(donType==='cabelo' && getSelectedHairTypes().length===0){
        alert("Selecione pelo menos um tipo de cabelo.");
        return;
    }

    // Não exigimos mais comprovante
    const message = generateWhatsAppMessage(name, phone, donType);
    sendToWhatsApp(message);
});

// Mensagem WhatsApp
function generateWhatsAppMessage(name, phone, donType){
    let message = `Olá! Meu nome é ${name}, telefone ${phone}.\nEU fiz uma doação: ${getDonationTypeText(donType)}.\n\n`;
    if(donType==='alimento'){ message += "🍽️ *ITENS ESCOLHIDOS:*\n"+getSelectedFoodItems().join('\n'); }
    if(donType==='cabelo'){ message += "💇‍♀️ *TIPOS DE CABELO:*\n"+getSelectedHairTypes().join('\n'); }
    if(donType==='dinheiro'){ message += "💳 *DOAÇÃO EM DINHEIRO*"; }
    message += `\n\n_*Agradeço pelo trabalho incrível!*_ 💖`;
    return message;
}

function getDonationTypeText(type){ const types={'alimento':'Doação de Alimentos 🍽️','cabelo':'Doação de Cabelo 💇‍♀️','dinheiro':'Doação em Dinheiro 💳'}; return types[type]||type; }
function getSelectedFoodItems(){ return Array.from(document.querySelectorAll('#foodGrid .product.selected')).map(p=>`${p.querySelector('h3').textContent} (x${p.querySelector('.quantity-value').textContent})`); }
function getSelectedHairTypes(){ return Array.from(document.querySelectorAll('#hairGrid .product.selected')).map(p=>p.querySelector('h3').textContent); }

function sendToWhatsApp(message){ 
    const whatsappNumber="558898706820"; 
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank"); 
}

document.addEventListener('DOMContentLoaded', ()=>{ console.log('Página de doações carregada com sucesso!'); });



//Sua Nota Tem valor 
document.getElementById('notaValor').addEventListener('change', function() {
  if (this.checked) {
    window.open('https://suanotatemvalor.sefaz.ce.gov.br/app/#/services/usuario/cadastro', '_blank');
  }
});