
const search=document.querySelector('#topicSearch');
if(search){search.addEventListener('input',()=>{const q=search.value.toLocaleLowerCase();document.querySelectorAll('.section').forEach(s=>s.classList.toggle('hide',q&&!s.innerText.toLocaleLowerCase().includes(q)));});}
document.querySelector('#printBtn')?.addEventListener('click',()=>window.print());
