

const createMatrix = (n) => {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = []
        for (let j = 0; j < n; j ++) {
            matrix[i].push(i * n + j + 1);
        }   
    }
    return matrix;
}

const rotateCounterClockwise = (a, times) => {
    var n=a.length;
    for (let iRot = 1; iRot <= times; iRot ++) {
        for (let i=0; i<n/2; i++) {
            for (let j=i; j<n-i-1; j++) {
                let tmp=a[i][j];
                a[i][j]=a[j][n-i-1];
                a[j][n-i-1]=a[n-i-1][n-j-1];
                a[n-i-1][n-j-1]=a[n-j-1][i];
                a[n-j-1][i]=tmp;
            }
        }
    }
    return a;
}

const rotateClockwise = (a, times) => {
    var n=a.length;
    for (let iRot = 1; iRot <= times; iRot ++ ) {
        for (let i=0; i<n/2; i++) {
            for (let j=i; j<n-i-1; j++) {
                let tmp=a[i][j];
                a[i][j]=a[n-j-1][i];
                a[n-j-1][i]=a[n-i-1][n-j-1];
                a[n-i-1][n-j-1]=a[j][n-i-1];
                a[j][n-i-1]=tmp;
            }
        }
    }
    return a;
}

const crazyMatrix = (n = 0, rotateN = [], coords = []) => {

    if (n < 2) throw new Error('n incorrecto');
    if (coords.length !== 2) throw new Error('coords incorrectas');
    let matrix = createMatrix(n);
    rotateN.forEach(spin => {
        if (spin < 0) 
            matrix = rotateCounterClockwise(matrix, spin * -1);
        
        if (spin > 0)
            matrix = rotateClockwise(matrix, spin);
    });
    if (coords[0] < 0 || coords[0] > n || coords[1] < 0 || coords[1] > n) throw new Error('coords incorrectas');
    return matrix[coords[0]][coords[1]];
}

module.exports = crazyMatrix;
