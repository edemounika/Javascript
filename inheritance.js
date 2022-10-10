class parent{
    getMobile(){
        console.log('iphone11');
    }

}
class child extends parent{

}
let obj = new child();
obj.getMobile();