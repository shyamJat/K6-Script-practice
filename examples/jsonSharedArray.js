import { SharedArray } from "k6/data";

var data = new SharedArray("some name", function() {
    // here you can open files, and then do additional processing on them or just generate the data dynamically
    var f = JSON.parse(open("../data/test.json"))
    return f; // f must be an array
});

export default () => {
    var element = data[Math.floor(Math.random() * data.length)]
    console.log(JSON.stringify(element));
    // do something with element
}