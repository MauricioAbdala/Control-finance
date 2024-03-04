

document.addEventListener('DOMContentLoaded', function () {
  const appElement = document.getElementById('app');
  const financialValue = document.createElement('section');
  const valuesList = document.createElement('ul');

  financialValue.classList.add("sectionValue");


  function getCategoryByID(categoryID) {
    const foundCategory = valuesCategory[categoryID];
    return foundCategory;
  }


  function sumValuesByCategory(category) {
    const categoryValues = insertedValues.filter(function (value) {
      const valueCategory = getCategoryByID(value.categoryID);
      return valueCategory === category;
    });

    const totalSum = categoryValues.reduce(function (acc, curr) {
      return acc + curr.value;
    }, 0);

    return totalSum;
  }


  function deleteItem(itemId) {
    const itemIndex = insertedValues.findIndex(value => value.id === itemId);

    if (itemIndex !== -1) {
      insertedValues.splice(itemIndex, 1);
    }
  }


  function renderAllValues() {
    valuesList.innerHTML = "";

    const entradaSum = sumValuesByCategory("Entrada");
    const saidaSum = sumValuesByCategory("Saída");
    const totalSum = entradaSum + saidaSum;
    const item = document.createElement('li');
    const totalItem = document.createElement('span');

    item.textContent = 'Soma dos valores';
    totalItem.textContent = "R$" + totalSum;

    item.classList.add('sum_Values');
    totalItem.classList.add("li_total")

    item.appendChild(totalItem);
    valuesList.appendChild(item);
    financialValue.appendChild(valuesList);
    appElement.appendChild(financialValue);

    const entradaValues = insertedValues.filter(function (value) {
      const valueCategory = getCategoryByID(value.categoryID);
      return valueCategory === "Entrada";
    });

    const saidaValues = insertedValues.filter(function (value) {
      const valueCategory = getCategoryByID(value.categoryID);
      return valueCategory === "Saída";
    });

    entradaValues.forEach(function (value) {
      const item = document.createElement('li');
      const deleteButton = document.createElement('span');

      item.textContent = 'Entrada R$' + value.value;
      deleteButton.innerHTML = '<img src="src/assets/Property 1=Frame 6.png">'

      deleteButton.classList.add('iconTrash');
      deleteButton.classList.add('delete-button');

      deleteButton.addEventListener('click', function () {

        deleteItem(value.id);

        item.remove();
      });

      valuesList.appendChild(item);
      item.appendChild(deleteButton);
      financialValue.appendChild(valuesList);
      appElement.appendChild(financialValue);

    });


    saidaValues.forEach(function (value) {
      const item = document.createElement('li');
      const deleteButton = document.createElement('span');
      item.textContent = 'Saida R$' + value.value;
      deleteButton.innerHTML = '<img src="src/assets/Property 1=Frame 6.png">'

      deleteButton.classList.add('iconTrash');
      deleteButton.classList.add('delete-button');

      deleteButton.addEventListener('click', function () {

        deleteItem(value.id);

        item.remove();
      });

      valuesList.appendChild(item);
      item.appendChild(deleteButton);
      financialValue.appendChild(valuesList);
      appElement.appendChild(financialValue);

    });
  }


  function renderEntryValues() {
    valuesList.innerHTML = "";
    
  
    const sumValuesContainer = document.createElement('div');
    sumValuesContainer.classList.add('sumValuesContainer');
  
    const entrySum = sumValuesByCategory("Entrada");
    const totalSum = entrySum;
    const item = document.createElement('li');
    const totalItem = document.createElement('span');
  
    item.textContent = 'Soma dos valores';
    totalItem.textContent = 'R$' + totalSum;
  
    item.classList.add('sum_Values');
    totalItem.classList.add("li_total")
  
    item.appendChild(totalItem);
    valuesList.appendChild(item);
    sumValuesContainer.appendChild(valuesList);
    financialValue.appendChild(sumValuesContainer);
    appElement.appendChild(financialValue);

    const entryValues = insertedValues.filter(function (value) {
      const entryCategory = getCategoryByID(value.categoryID);
      return entryCategory === "Entrada";
    });

    entryValues.forEach(function (value) {
      const item = document.createElement('li');
      const deleteButton = document.createElement('span');

      item.textContent = 'Entrada R$' + value.value;
      deleteButton.innerHTML = '<img src="src/assets/Property 1=Frame 6.png">'

      deleteButton.classList.add('iconTrash');
      deleteButton.classList.add('delete-button');

      deleteButton.addEventListener('click', function () {

        deleteItem(value.id);
        item.remove();
      });

      valuesList.appendChild(item);
      item.appendChild(deleteButton);
      financialValue.appendChild(valuesList);
      appElement.appendChild(financialValue);
    });
  }



  function renderOutputValues() {
    valuesList.innerHTML = "";
  
    const sumValuesContainer = document.createElement('div');
    sumValuesContainer.classList.add('sumValuesContainer');
  
    const outputSum = sumValuesByCategory("Saída");
    const totalSum = outputSum;
    const item = document.createElement('li');
    const totalItem = document.createElement('span');
  
    item.textContent = 'Soma dos valores';
    totalItem.textContent = 'R$' + totalSum;
  
    item.classList.add('sum_Values');
    totalItem.classList.add("li_total")
  
    item.appendChild(totalItem);
    valuesList.appendChild(item);
    sumValuesContainer.appendChild(valuesList);
    financialValue.appendChild(sumValuesContainer);
    appElement.appendChild(financialValue);

    const outputValues = insertedValues.filter(function (value) {
      const outputCategory = getCategoryByID(value.categoryID);
      return outputCategory === "Saída";
    });

    outputValues.forEach(function (value) {
      const item = document.createElement('li');
      const deleteButton = document.createElement('span');

      item.textContent = 'Saída R$' + value.value;
      deleteButton.innerHTML = '<img src="src/assets/Property 1=Frame 6.png">'

      deleteButton.classList.add('iconTrash');
      deleteButton.addEventListener('click', function () {

        deleteItem(value.id);

        item.remove();
      });

      valuesList.appendChild(item);
      financialValue.appendChild(valuesList);
      item.appendChild(deleteButton);
      appElement.append(financialValue);
    });
  }


  function createNavigationMenu() {
    const resumeSummary = document.createElement('section');
    const financialSummary = document.createElement('h3');
    const btn_list = document.createElement('div');
    const btn_allValues = document.createElement('button');
    const btn_entryValue = document.createElement('button');
    const btn_outputValue = document.createElement('button');
  
    financialSummary.innerText = "Resumo Financeiro";
    btn_allValues.innerText = "Todos";
    btn_entryValue.innerText = "Entradas";
    btn_outputValue.innerText = "Saídas";
  
    resumeSummary.classList.add("sectionSummary");
    btn_allValues.classList.add("allValues");
    btn_entryValue.classList.add("entryValue");
    btn_outputValue.classList.add("outputValue");
  
    appElement.appendChild(resumeSummary);
    resumeSummary.append(financialSummary, btn_list);
  
    btn_list.appendChild(btn_allValues);
    btn_list.appendChild(btn_entryValue);
    btn_list.appendChild(btn_outputValue);
  
    const allValuesContainer = document.createElement('div');
    const entryValuesContainer = document.createElement('div');
    const outputValuesContainer = document.createElement('div');
  
    appElement.appendChild(allValuesContainer);
    appElement.appendChild(entryValuesContainer);
    appElement.appendChild(outputValuesContainer);
  
    btn_allValues.addEventListener("click", function () {
      allValuesContainer.style.display = "block";
      entryValuesContainer.style.display = "none";
      outputValuesContainer.style.display = "none";
      renderAllValues();
    });
  
    btn_entryValue.addEventListener("click", function () {
      allValuesContainer.style.display = "none";
      entryValuesContainer.style.display = "block";
      outputValuesContainer.style.display = "none";
      renderEntryValues();
    });
  
    btn_outputValue.addEventListener("click", function () {
      allValuesContainer.style.display = "none";
      entryValuesContainer.style.display = "none";
      outputValuesContainer.style.display = "block";
      renderOutputValues();
    });
  
    // Resto do código...
  }
  
  createNavigationMenu();


  function openModal() {
    const modal = document.createElement("dialog");
    const registryTitle = document.createElement("h3");
    const btn_closeModal = document.createElement("button");
    const registryText = document.createElement("p");
    const value = document.createElement('h3');
    const valueTitle = document.createElement("label");
    const inputValue = document.createElement("input");
    const valueType = document.createElement("label");
    const btn_entry = document.createElement("button");
    const btn_output = document.createElement("button");
    const btn_insertValue = document.createElement("button");

    registryTitle.classList.add('registryValue');
    btn_closeModal.classList.add('closeModal');
    value.classList.add("value")
    valueTitle.classList.add('insertTitule');
    valueType.classList.add('valueType');
    btn_entry.classList.add('btn_modal');
    btn_output.classList.add('btn_modal');
    btn_insertValue.classList.add('btn_modal--insertdValue');

    registryTitle.textContent = "Registro de valor";
    btn_closeModal.textContent = "X";
    registryText.textContent = "Digite o valor e em seguida aperte no botão referente ao tipo de valor";
    value.textContent = "Valor"
    valueTitle.textContent = "R$";
    inputValue.placeholder = "00,00";
    valueType.textContent = "Tipo de valor";
    btn_entry.textContent = "Entrada";
    btn_output.textContent = "Saída";
    btn_insertValue.textContent = "Inserir Valor";

    modal.append(registryTitle, btn_closeModal, registryText, value);
    registryTitle.appendChild(btn_closeModal);
    valueTitle.appendChild(inputValue);
    valueType.append(btn_entry, btn_output);
    modal.append(valueTitle, valueType, btn_insertValue);

    document.body.appendChild(modal);


    btn_closeModal.addEventListener("click", function () {
      closeModal(modal);
    });
    modal.showModal();

    let selectedCategory = "Entrada";
    let selectedCategoryOut = "Saída";

    function category(Category) {
      selectedCategory = Category;

      if (selectedCategory === "Entrada") {
        renderEntryValues();
      } else if (selectedCategoryOut === "Saída") {
        renderOutputValues();
      }
    }


    // function selectedCategory () 
    btn_entry.addEventListener("click", function () {
      category("Entrada");
    });
    
    btn_output.addEventListener("click", function () {
      category("Saída");
    });
   

    btn_insertValue.addEventListener("click", function () {
     
  
      const valor = inputValue.value;
    
      if (selectedCategory !== null && selectedCategory !== "") {
        const categoryID = getCategoryIDByCategory(selectedCategory);
        addValueToCategory(valor, categoryID);
      } else if (selectedCategoryOut !== null && selectedCategoryOut !== "") {
        const categoryID = getCategoryIDByCategory(selectedCategoryOut);
        addValueToCategory(valor, categoryID);
      }
      renderOutputValues();
    });
  }

  const registryValue = document.getElementById("btn_newValue");

  registryValue.addEventListener("click", function () {
    openModal();
  });

  function closeModal(modal) {
    modal.close();
    modal.remove();
  }

  function addValueToCategory(value, categoryID) {
    insertedValues.push({
      id: insertedValues.length + 1,
      value: parseFloat(value),
      categoryID: categoryID,
    });

  }

  function getCategoryIDByCategory(category) {
    let result = null;
    Object.keys(valuesCategory).forEach(id => {
      if (valuesCategory[id] === category) {
        result = id;
      }
    });
    return result;

  }

});

