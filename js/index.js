// Footer button

document.addEventListener('DOMContentLoaded', () => {
  const footerBtn = document.getElementById('footerDownloadBtn');
  if(!footerBtn) return; //

  const content = footerBtn.querySelector('.btn-content');
  const loader = footerBtn.querySelector('.btn-loader');
  const success = footerBtn.querySelector('.btn-success');

  footerBtn.addEventListener('click', () => {
s
    if (footerBtn.classList.contains('is-loading') || footerBtn.classList.contains('is-success')) return;


    footerBtn.classList.add('is-loading'); 
    

    footerBtn.classList.remove('w-56', 'rounded-lg', 'bg-lime-400', 'hover:bg-lime-300', 'text-midnightcharcoal-950');
    footerBtn.classList.add('w-14', 'rounded-full', 'bg-zinc-900', 'border', 'border-zinc-700'); 


    content.classList.add('opacity-0');
    loader.classList.remove('opacity-0');


    setTimeout(() => {

      loader.classList.add('opacity-0');
      

      footerBtn.classList.remove('bg-zinc-900', 'border', 'border-zinc-700');
      footerBtn.classList.add('bg-cyan-400', 'shadow-[0_0_20px_rgba(34,211,238,0.6)]');

      success.classList.remove('opacity-0', 'scale-50');
      success.classList.add('scale-100');
      

      console.log("Download started...");
      
    }, 2000);
  });
});