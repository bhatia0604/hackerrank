function angryProfessor(k, a) {
    let classyesno = 'YES';
    let no=0;
    a.forEach(element => {
     if (element <=0 ) no=no+1;
    });
    if(no >= k) classyesno='NO'
    
    return classyesno;

}
angryProfessor(3,[-2,-1,0,1,2])
angryProfessor(4,[-2,-1,0,1,2])
angryProfessor(4,[-3,-2,-1,0,1,2])
