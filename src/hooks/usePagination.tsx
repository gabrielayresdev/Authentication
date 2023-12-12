import React from "react";

// Hook retorna um estado referente à página atual, uma função para avançar a página, uma para retroceder e uma para selecionar uma página específica.
const usePagination = (lastPage: number) => {
  const [page, setPage] = React.useState(0);

  function goTo(destiny: number) {
    // Se a página de destino existir e não for a atual, page é atualizado.
    if (!(destiny < 0 || page === destiny || destiny >= lastPage)) {
      setPage(destiny);
    }
  }

  function nextPage() {
    if (page + 1 < lastPage) {
      setPage((actual) => actual + 1);
    }
  }

  function previousPage() {
    if (page - 1 >= 0) {
      setPage((actual) => actual - 1);
    }
  }

  return { page, goTo, nextPage, previousPage };
};

export default usePagination;
