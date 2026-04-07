const moveCells = () => {
  const grid = document.querySelector(".square-body");
  const reset = document.querySelector(".btn-reset");
  const copy = grid.innerHTML;

  grid.addEventListener("click", (e) => {
    const cells = [...grid.getElementsByClassName("block")];
    const t = e.target;
    const c = t.closest(".block");
    if (!c) return;
    const i = cells.indexOf(c);
    let ni;

    if (t.closest(".arrow.left")) {
      if (i <= 0) return;
      ni = i - 1;
      cells[ni].before(cells[i]);
    } else if (t.closest(".arrow.right")) {
      if (i >= 24) return;
      ni = i + 1;
      cells[i].before(cells[ni]);
    } else if (t.closest(".arrow.top")) {
      if (i <= 4) return;
      ni = i - 5;
      cells[ni].before(cells[i]);
      cells[i - 1].after(cells[ni]);
    } else if (t.closest(".arrow.bottom")) {
      if (i >= 20) return;
      ni = i + 5;
      cells[ni].before(cells[i]);
      cells[i + 1].before(cells[ni]);
    }
  });

  reset.addEventListener("click", () => {
    grid.innerHTML = copy;
  });
};

moveCells();
