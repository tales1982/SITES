const btnEnviar=document.querySelector("#gerar-pdf");btnEnviar.addEventListener("click",()=>{document.querySelector("#conteudoHTML");html2pdf().set({magin:[0,10,10,0],filename:"arquivo.pdf",html2canvas:{scale:2},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"}}).from(conteudoHTML).save()});