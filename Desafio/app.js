document.addEventListener("DOMContentLoaded", function() {
    const codificarBtn = document.querySelector(".apresentacao__conteudo__botoes__codificar");
    const descodificarBtn = document.querySelector(".apresentacao__conteudo__botoes__descodificar");
    const apresentacaoTextoDiv = document.querySelector(".apresentacao__texto");
    const textoInput = document.getElementById("textoInput");
    const copiarBtn = document.createElement("button");
    
    copiarBtn.textContent = "Copiar";
    copiarBtn.classList.add("copiar__botao");
    copiarBtn.style.display = 'none'; 

    apresentacaoTextoDiv.appendChild(copiarBtn);

    function criptografar(texto) {
        return texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function descriptografar(texto) {
        return texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    function atualizarTexto(texto) {
        apresentacaoTextoDiv.innerHTML = ''; 
        const novoParagrafo = document.createElement("p");
        novoParagrafo.textContent = texto;
        novoParagrafo.classList.add("apresentacao__texto__paragrafo");
        apresentacaoTextoDiv.appendChild(novoParagrafo);
        apresentacaoTextoDiv.appendChild(copiarBtn);
        copiarBtn.style.display = 'block'; 
    }

    codificarBtn.addEventListener("click", function() {
        const texto = textoInput.value;
        if (texto) {
            const textoCriptografado = criptografar(texto);
            atualizarTexto(textoCriptografado);
        }
    });

    descodificarBtn.addEventListener("click", function() {
        const texto = textoInput.value;
        if (texto) {
            const textoDescriptografado = descriptografar(texto);
            atualizarTexto(textoDescriptografado);
        }
    });

    copiarBtn.addEventListener("click", function() {
        const textoParaCopiar = document.querySelector(".apresentacao__texto__paragrafo").textContent;
        navigator.clipboard.writeText(textoParaCopiar).then(function() {
            alert("Texto copiado!");
        }, function(err) {
            alert("Erro ao copiar o texto: ", err);
        });
    });
});
