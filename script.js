1.class - movie

class movie{
    constructor (title,studio,rating){
               this.title=title;
               this.studio=studio;
               this.rating=rating
    if (rating==null) {
          return this.rating="PG"
    } 
    else{
         return this.rating=rating
    }
}
      getPG(){
        var result= arr.filter((element)=>element.rating=="PG")
        return result;
      }
      getmovie(){
          var result1=[`a movie title is ${this.title} create studio ${this.studio} its rating of ${this.rating}`]
          return result1;
      }
}
let movie1=new movie("Thunivu","Red giant","Pg30");
let movie2=new movie("PS-1","Lyca");
let movie3=new movie("Love Today","AGS","PG7");
let movie4=new movie("KGF-2","Humbale nights");
let arr=[movie1,movie2,movie3,movie4];
 console.log(movie2.getPG());
 console.log(movie3.getmovie());

 // 2.class-circle.md

 class circle{
    constructor (radius,color){
               this.radius=radius;
               this.color=color;
    }
    setradius(rad){
          this.radius=rad
    }
    getradius(){
          var gtrad=`radious :${this.radius}`;
          return gtrad;
    }
    setcolor(col){
          this.color=col;
    }
    getcolor(){
          var gtcol=`color :${this.color}`;
           return gtcol;
    }
    getstring(){
          let string = `circle[radiou=${this.radius},color=${this.color}]`;
          return string;
    }
    getarea(){
          let area=`Area of circle :${((2*3.14)*(this.radius*this.radius))}`;
          return area;
    }
    getcircumfrence(){
          let circumfrence=`Circumfrence of circle :${(2*3.14*this.radius).toFixed(2,2)}`;
          return circumfrence
    }
}
  let circle1=new circle(6.0,"pink");
      circle1.setradius(8.0);
      circle1.setcolor("blue");
  console.log(circle1.getradius());
  console.log(circle1.getcolor());
  console.log(circle1.getstring());
  console.log(circle1.getarea());
  console.log(circle1.getcircumfrence());

 // 3.Write a “person” class to hold all the details.

 class person{
    constructor (fname,lname,faname,gender,mariedstatus,DOB,place,country,degree,job,){
               this.fname=fname;
               this.lname=lname;
               this.faname=faname;
               this.gender=gender;
               this.mariedstatus=mariedstatus;
               this.DOB=DOB;
               this.place=place;
               this.country=country;
               this.degree=degree;
               this.job=job;
    }
    setdetails(deg){
          this.degree=deg
               }
    getdetails(){
          let result=`fname :${this.fname}\nlname :${this.lname}\nfaname :${this.faname}\ngender :${this.gender}\nmariedstatus :${this.mariedstatus}\nDOB :${this.DOB}\nplace :${this.place}\ncountry :${this.country}\ndegree :${this.degree}\njob :${this.job}`
          return result;
    }
}
let person1=new person("Sabari","arun","G","male","unmaried","30/12/1995","coimbatore","india","B.sc","Employee");
    person1.setdetails("M.R");
console.log(person1.getdetails());

 4.write a class to calculate the uber price.

    class ubrent{
  constructor (name,place,distance,rate,waitingCharge){
             this.name=name;
             this.place=place;
             this.distance=distance;
             this.rate=rate;
             this.waitingCharge=waitingCharge
  }
    setDistance(dist){
          this.distance=dist
    }
    getdistancerate(){
      let mCharge=3000;
      if (this.distance<100){
            return mCharge
      }
    }
    getdistance(){
      let charge=(this.distance*this.rate)+(10*this.waitingCharge);
          return charge;
    }
}
let ubrent1=new ubrent("Arun","chennai",30,40,50)
  ubrent1.setDistance(200)

console.log(ubrent1.getdistance());