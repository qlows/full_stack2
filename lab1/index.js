console.log("Week1 - Buffer code example")

/*
    Buffer.alloc(),
    Buffer.allocUnsafe(),
    Buffer.from()
*/

var a = new Buffer.from("A Hello")
console.log(a)
console.log(a.toString())
console.log(a[0])
console.log(a[1])
console.log(a.length)

a[0] = 97
// a[80] = 97
console.log(a.toString())

var data = "😛😉"
var buf = Buffer.from(data)
console.log(buf)
console.log(buf.toString())
console.log(buf.length)
console.log(buf[0])
console.log(buf[1])
buf[0] = 65
console.log(buf[2])
console.log(buf.toString())
console.log(buf.toString("utf8"))
console.log(buf.toString("utf-16le"))

var values = "®℗©"
var buf2 = Buffer.from(values)
console.log(buf2.length)

// Using alloc

var buf3 = Buffer.alloc(10, "H")
console.log(buf3.toString())

var buf4 = Buffer.alloc(15, "*")
//buf4.write("Hello World")
buf4.write("Hello World", 4, 2)
console.log(buf4.toString())

// Concat buffer
var newBuffer = a + buf + buf2
console.log(newBuffer)
console.log(typeof(newBuffer)) //string

newBuffer = Buffer.concat([a, buf, buf2])
console.log(newBuffer.toString())
console.log(typeof(newBuffer)) //object

// Slice
var bufferString = Buffer.from("George Brown College")
console.log(bufferString.toString())

var mySlice = bufferString.slice(0, 6)
console.log(mySlice.toString())
mySlice = bufferString.slice(7, 12)
console.log(mySlice.toString())
