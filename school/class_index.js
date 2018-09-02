var klass = require('./class');

//klass.add('王老师',['学生1','学生2','学生3333']);

exports.add=function (klasses) {
    klasses.forEach(function(item , index){
        var _klass=item;
        var teacherName=item.teacherName;
        var students=item.students;
        klass.add(teacherName,students)
    })
}