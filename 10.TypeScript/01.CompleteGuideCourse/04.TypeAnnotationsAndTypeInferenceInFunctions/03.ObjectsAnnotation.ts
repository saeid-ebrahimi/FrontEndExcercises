const profile = {
    username:"Alex",
    age:20,
    coords:{
        lat: 0 ,
        lng: 15
    },
    setAge(age: number): void{
        this.age = age;
    },
};
const {age, username}:{age:number; username:string} = profile; // this error is OK!
const { coords: {lat, lng}}: {coords: { lat:number; lng:number}} = profile;
