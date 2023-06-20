function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
    let x = 0;
    for (let i = 0; i < itensColetados.lengh; i++) {
        if (itensColetados[i] = itemNecessario1) {
            x++;
        }
        else if (itensColetados[i] = itemNecessario2) {
            x++;
        }
        else if (itensColetados[i] = itemNecessario3) {
            x++;
        }
    }
    if (x == 3) {
        return("PODE ENFRENTAR");   
    }
    else {
        return("NAO PODE ENFRENTAR");
    }
}
