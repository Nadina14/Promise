class Crostata {

    step(info) {
        return new Promise((resolve, reject) => {
            
            if (info === "Controllo ingredienti") {
                reject("Non ho lo zucchero");
            } else {
                resolve(`${info}: ok`);
            }
        });
    }
}

const crostata1 = new Crostata();
crostata1.step("Controllo ingredienti")
    .then(msg => {
        console.log(msg);
        return crostata1.step("Preparazione");
    })
    .then(msg => {
        console.log(msg);
        return crostata1.step("Consegna");
    })
    .then(msg => console.log(msg))
    .catch(msg => console.warn(msg));