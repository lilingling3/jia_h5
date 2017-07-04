/**
 * Created by linlin on 2017/5/11.
 */
class Usrr {
    private name;
    private mobile;
    private token;
    constructor (){

    }

    public setName(name){
        this.name = name;
    }
    public getName(){
        return this.name;
    }
    public setMobile(mobile){
        this.mobile=mobile;
    }
    public getMobile(){
        return this.mobile;
    }
    public setToken(token){
        this.token = token;
    }
    public getToken(){
        return this.token;
    }

}

var yunshanUser = new Usrr();