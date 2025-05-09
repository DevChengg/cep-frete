export const calculaCep = (uf) => {
    const fretePorUF = {
        PR: 45,
        SP: 25,
        MG: 30,
        RJ: 15,
    };

    if (typeof uf !== 'string') {
        console.warn('UF inválido ou não informado.', uf);
        return 20;
    }

    const ufUpper = uf.toUpperCase();

    if (fretePorUF[ufUpper] !== undefined){
        return fretePorUF[ufUpper];
    }else {
        console.warn('UF não mapeado. Usando valor padrão:', ufUpper);
        return 20;
    }
};