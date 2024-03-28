const cepInput = document.querySelector("#cep");
const enderecoBody = document.querySelector("#endereco-body");

let registros = [];

const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo];
        }
    }
};

const addRegistro = (registro) => {
  const registroExistente = registros.find(item => item.cep === registro.cep);
  if (!registroExistente) {
      registros.push(registro);
      renderRegistros();
  }
};

const renderRegistros = () => {
    enderecoBody.innerHTML = "";
    registros.forEach((registro) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${registro.localidade}</td>
            <td>${registro.bairro}</td>
            <td>${registro.uf}</td>
            <td>${registro.logradouro}</td>
        `;
        enderecoBody.appendChild(row);
    });
};

cepInput.addEventListener("keyup", (event) => {
    let search = cepInput.value.replace("-", "");
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default",
    };

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then((response) => {
            response.json()
                .then((data) => {
                    showData(data);
                    addRegistro(data);
                })
                .catch((error) => {
                    console.log("ERRO: " + error.message);
                });
        });
});

document.querySelectorAll('.order').forEach((element) => {
    element.addEventListener('click', () => {
        const column = element.parentElement.cellIndex;
        const orderType = element.classList.toggle('descending') ? -1 : 1;

        registros.sort((a, b) => {
            const propA = Object.values(a)[column];
            const propB = Object.values(b)[column];
            if (propA < propB) return -1 * orderType;
            if (propA > propB) return 1 * orderType;
            return 0;
        });

        renderRegistros();
    });
});


