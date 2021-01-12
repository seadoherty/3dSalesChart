const pushData = (data) => {

    for (var i = 0; i <= dataSet.length - 1; i++) {
        let test1 = dataSet[i].x;

        for (var j = 0; j <= dataSet[i].monthRev.length - 1; j++) {
            let test2 = dataSet[i].monthRev[j].y;
            let test3 = dataSet[i].monthRev[j].z;
            
            data.add({ x: test1, y: test2, z: test3 });
        }
    }
}