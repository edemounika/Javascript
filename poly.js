class parent{
    getMobile(){
        console.log('iphone11');
    }

}
class child extends parent{
    getMobile(){
        console.log('iphone12');

    }


}
let obj = new child();
obj.getMobile();