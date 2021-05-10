const quantity =["All","Almost 50% of","A tiny proportion of","One in two"]
const noun = ["programmers","kids","adults","men","women","the world's population","aliens","scientists","cooks","students"]
const verb = ["like","love","hate","don't give damn about","are interested in","feel insecure when talking about"]
const object = ["Coffee","Tea","Music","the Weather", "the stock market","Politics"]

function createFunnyHeadlines(number) {
    for (let i=0;i<number;i++) {
    let q = Math.floor(Math.random() * quantity.length);
    let n = Math.floor(Math.random() * noun.length);
    let v = Math.floor(Math.random() * verb.length);
    let o = Math.floor(Math.random() * object.length);

    console.log(`${quantity[q]} ${noun[n]} ${verb[v]} ${object[o]}.`)

}
};

 createFunnyHeadlines(1);


